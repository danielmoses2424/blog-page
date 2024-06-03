import React, { useState, useEffect} from 'react'
import { getDocs, collection, deleteDoc, doc } from 'firebase/firestore'
import { db, auth } from '../firebase-configue'
import { MdDeleteOutline } from "react-icons/md"


const Blog = ({ isAuth }) => {
  const [postList, setPostList] = useState([])

  const postCollectionref = collection(db, "post")

  useEffect(() => {
    const getposts = async () =>{
      const data = await getDocs(postCollectionref)
      setPostList(data.docs.map((doc) => ({...doc.data(), id:doc.id})))
    }
    getposts();
  })

   const deletePost = async (id) => {
    const postDoc = doc(db, "post", id)
    await deleteDoc(postDoc)
  }
        return (
    <div className='homePage'>
      {postList.map((post) => {
        return (
          <div className="post" key={post.id}> 
            <div className="postHeader">
              <div className="title">
                <h1>{post.title}</h1>
              </div>

               <div className="deletePost">
                {isAuth && post.author.id === auth.currentUser.uid && <button onClick={() => {deletePost(post.id)} }> <MdDeleteOutline /></button>}
              </div>

            </div>
            <div className="postTextContainer">{post.postText}</div>
            <h3>@{post.author?.name}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default Blog

