import React from 'react'
import { useState, useEffect } from 'react'
import { addDoc, collection } from 'firebase/firestore'
import { db, auth } from '../firebase-configue'
import { useNavigate } from 'react-router-dom'


const CreatPost = ({isAuth}) => {
  
  const [title, setitle] = useState("")
  const [postText, setPostText] = useState("")

  let navigate = useNavigate()

  const postCollectionRef = collection(db, "post")
  const createPost = async () => {
    await addDoc(postCollectionRef, {
      title,
      postText,
      author: { name: auth.currentUser.displayName, id: auth.currentUser.uid}
    })

    navigate('/')
  }

  useEffect(() =>{
    if (!isAuth) {
      navigate('/login')
    }
  }, [])


  return (
    <div className='createPostPage'>

      <div className='cpContainer'>
        <h1>Create New Post</h1>

        <div className='inputGp'>
          <label htmlFor="">Title:</label>
          <input 
          type="text" 
          placeholder='Title...' 
            onChange={(e) =>{
              setitle(e.target.value);
            }}
          />
        </div>
          

          <div className='inputGp'>
          <label htmlFor="">Post:</label>
          <textarea name="" placeholder='Post...' 
            onChange={(e) =>{
              setPostText(e.target.value);
            }}
          />
        </div>

        <button onClick={createPost}>Submit Post</button>
      </div>      
    </div>
  )
}

export default CreatPost

