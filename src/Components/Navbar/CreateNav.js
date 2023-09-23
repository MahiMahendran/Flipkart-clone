import React, { useState } from 'react'
import './CreateNav.css';
import { IoSearch } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { MdKeyboardArrowDown } from "react-icons/md";
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import supabase from '../../Supabase';
import {removeUser} from '../../Slice/Slice'


const CreateNav = () => {

  const [isclick,setIsclick] = useState(false)
  const user = useSelector((state)=>state.userData.user)
  const dispatch = useDispatch()

  useEffect(()=>{
    if(user){
      setIsclick(false)
    }
  },[user])

  const signOut = async ()=>{
    const {error} = await supabase.auth.signOut();
    if(!error){
      dispatch(removeUser())
    }
  }

  return (
    <>
      <div className='Nav_contianer'>
        <div className='Nav_title'>
          <Link to='/' >
            <img className='Nav_logo'
              src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png"
              alt='logo' />
          </Link>
        </div>
        <div className='Nav_search'>
          <input type='text' placeholder='search for products and more'
            className='Nav_searchbox' />
          <button className='Nav_searchicon'> <IoSearch /></button>
        </div>          
        <div className='Nav_login'>
           {user ? (
            <p onClick={signOut} style={{color:'white',fontWeight:'bold'}}>{user&&user.email.slice(0,8)}(LogOut)</p>
           ) :
          <button className='Nav_btn' onClick={()=> setIsclick(true)}>Login</button>}
        </div>
        <div className='Nav_seller'>
          <Link className='Nav_sellerlink' to='/cart'>Become a seller</Link>
        </div>
        <div className='Nav_more'>
          More<MdKeyboardArrowDown />
        </div>
        <div className='Nav_cart'>
          <Link  FaShoppingCart className='Nav_cartLink' to='/cart'><FaShoppingCart/> Cart</Link>
        </div>
        <Login isclick = {isclick} setIsclick={setIsclick}/>
      </div>
    </>
  )
}

export default CreateNav
