import { Link, useNavigate } from "react-router-dom";
import {auth} from "../firebase-configue";
import { signOut} from "firebase/auth";

const Navbar = ({setIsAuth, isAuth}) => {


    const navigate = useNavigate();

     const signUserOut = () =>{
    signOut(auth).then(() =>{
      localStorage.clear();
      setIsAuth(false);
      navigate('/login');
    })
  }

  return (
    <nav className="nav">
        <Link to='/'>Blog </Link>
        {!isAuth ? (
          <Link to='/login'>sign in</Link>
           ) : ( 
        <>
          <Link to='/createpost'>Create Post</ Link>
        <button onClick={signUserOut} className="login-btn">Sign Out</button>
        </>
        )}
      </nav>
  )
}

export default Navbar

