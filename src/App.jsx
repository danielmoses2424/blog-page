import { useState } from "react"
import { BrowserRouter as Router, Routes, Route,} from "react-router-dom"
import Blog from "./pages/Blog"
import CreatPost from "./pages/CreatePost"
import Login from "./pages/Login"
import Navbar from "./pages/Navbar";


const App = () => {
       
 // this is how to store someone's document(login and logout) locally

  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));   
 

 
  return (

    <Router>
       <Navbar setIsAuth={setIsAuth} isAuth={isAuth}/>
      
        <Routes>
          <Route path="/" element={<Blog isAuth={isAuth} />} />
          <Route path="/createpost" element={<CreatPost isAuth={isAuth} />} />
          <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
    </Router>
    
  )
}

export default App
