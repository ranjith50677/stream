import "./Navbar.css";
import { Link } from "react-router-dom";
import "../Login/test.css";
import Test from "../Login/Test";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "../Search/Search";
import axios from 'axios'
import GoogleLogin from 'react-google-login';

function Navbar() {
  const [ auth, setAuth] = useState(localStorage.getItem('user')? true : false)
  
  const [buttonPopup, setButtonPopup] = useState(false);
  
  const navigate = useNavigate()
  const logOutUser = ()=>{
    localStorage.removeItem('user')
    setAuth(false)
    navigate('/')
  }
  const handleLogin = async (googleData)=>{
   const res2 = await axios.post('https://hotstar-v.herokuapp.com/google/login',{
      token : googleData.tokenId
    })
    localStorage.setItem('user', JSON.stringify(res2.data))
    setAuth(true)
    setButtonPopup(false)
    navigate('/profile')
  }
  const handleFailure = (err)=>{
    alert(`Login failed`)
  }


  return (
    <>
      <div className="nav">
        <div className="nav-left">
          <div>
            C STREAM
          </div>
          <div className="dropdown">
            <Link className="link" to="/tv" >TV</Link>
          </div>

          <div className="dropdown">
            <Link className="link" to="/movie">Movies</Link>
          </div>
        </div>
        <div className="nav-right">
          <Search />
          { auth ? <div className="dropdown">
            <div className="link">PROFILE</div>
            <ul>
              <li><Link to={"/watchlist"}>WatchList</Link></li>
              <li><Link to="/profile">My Account</Link></li>
              <li onClick={logOutUser}>Log Out</li>
            </ul>
          </div> : <div onClick={() => setButtonPopup(true)}>ADMIN</div>}
          
        </div>
      </div>
      <div>
      <Test trigger={buttonPopup} setTrigger={setButtonPopup}>
        <p style={{
          fontSize: "18px",
          wordSpacing: "1.4px"
        }} className="text">Login to continue</p>
        <br></br>
        <div 
        className="googleBtn">
          <GoogleLogin
         clientId={"920450409324-dr6oficri8basjuvt765sag2njgub8du.apps.googleusercontent.com"}
        buttonText="Sign In With Google"
        onSuccess={handleLogin}
        onFailure={handleFailure}
        cookiePolicy={'single_host_origin'}
        /></div>
        <br></br>
        <p style={{
          marginLeft: "45%"
        }}>admin</p>
        <br></br>
      </Test>
      </div> 
      
    </>
  );
}

export default Navbar;
