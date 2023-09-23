import React from 'react'
import'./CategoryBanner.css';

const CategoryBanner = ({ImgSrc, Title, Brand }) => {
  return (
    <div className='Categorybanner'>
      <img src={ImgSrc} alt='' className='Categorybanner_img'/>
      <p className='Categorybanner_title'>
        {Title.length<25? Title : Title.slice(0,15)+'...'}
      </p>
      <p className='Categorybanner_shopnow'>Shop Now</p>
      <p className='Categorybanner_brand'>{Brand}</p>
    </div>
  )
}

export default CategoryBanner;
