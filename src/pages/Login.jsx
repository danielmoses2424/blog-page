
import React from 'react'
import { auth, provider } from '../firebase-configue'
import { signInWithPopup } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'





const Login = ({setIsAuth}) => {

   let navigate = useNavigate();

  const signInWithGoogle = () =>{
    signInWithPopup(auth, provider).then((Result) => {
      localStorage.setItem("isAuth", true);
      setIsAuth(true)
      navigate('/')
    })
  }
  return (
    <div className='loginPage'>
      <p>sign in with Google</p>
      <button className='login-with-google-btn' onClick={signInWithGoogle}>sign in with Google</button>
    </div>
  )
}

export default Login
