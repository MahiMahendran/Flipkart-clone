import React from 'react';
import './Categorybar.css'

const Categorybar = ({imgSrc,CategoryName}) => {
  return (
    <div className='cateogrybar'>
        <div className='cateogrybar_img'>
         <img src={imgSrc} alt='img'/>
        </div>
        <p className='cateogrybar_name'> {CategoryName} </p> 
    </div>
  )
}

export default Categorybar
