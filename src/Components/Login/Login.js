import React, {  useState } from 'react'
import './Login.css';
import { RxCross2 } from "react-icons/rx";
import supabase from '../../Supabase';
import { useDispatch } from 'react-redux';
import {setUser} from '../../Slice/Slice';


const Login = ({isclick,setIsclick}) => {

  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  console.log('emailpass '+ email,password);
  const [loginType,setLoginType] = useState(true)
  const dispatch = useDispatch()

  const login = async () =>{
    const {data,error} = await supabase.auth.signInWithPassword({
      email,
      password
    } ) 
    if(error)
    alert(error.message);
    dispatch(setUser(data.user))
  }

  const signup = async ()=>{
    const {data,error} = await supabase.auth.signUp({
      email,
      password
    })
    if(data.user) alert('Accuont created.Pleace verify your email') (error)
    
  }

  return isclick  ? (
    <>
          <div className="overlay">
      <div className="LoginModel">
        <div className="left">
          <div className="left-container">
            <p className="Login-title">Login</p>
            <p className="Login-des">
              Get access to your Orders, Wishlist and Recommendations
            </p>
          </div>
        </div>
        <div className="right">
          <input
            type="email"
            className="Login-input"
            placeholder="Enter Email "
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            className="Login-input"
            placeholder="Enter Password "
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <p className="termsandcon">
            By continuing, you agree to Flipkart's{" "}
            <span style={{ color: "blue" }}>Terms of Use</span> and
            <span style={{ color: "blue" }}> Privacy Policy.</span>{" "}
          </p>
          {loginType ? (
            <button className="Login-btn" onClick={login}>
              Login
            </button>
          ) : (
            <button className="Login-btn" onClick={signup}>
              Signup
            </button>
          )}
          {loginType ? (
            <p className="Login-signup" onClick={() => setLoginType(false)}>
              New to Flipkart? Create an account
            </p>
          ) : (
            <p className="Login-signup" onClick={() => setLoginType(true)}>
              Already an user? Login to an account
            </p>
          )}
        </div>
        <div className="close" onClick={()=> setIsclick(false)}>
          <RxCross2  />
        </div>
      </div>
    </div>
   </>
  ) : ("");
};

export default Login;
