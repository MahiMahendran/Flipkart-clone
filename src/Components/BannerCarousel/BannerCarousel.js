import React from 'react'
import './BannerCarousel.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

const Bannercarousel = ({data}) => {
    const settings ={
      dots: false,
      infinite: true,
      speed: 1000,
      autoplay: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplaySpeed: 3000,
    }
  return (
    <div className='Bannercarousel'>
      <Slider {...settings}>
         {data.map((item) => (
          <div key={item.id}>
            <img src={item.Imgsrc} alt="" className="BannerCarousel_Image" />
          </div>))}
       </Slider>      
    </div>
  )
}

export default Bannercarousel
