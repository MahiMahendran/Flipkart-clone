import React from 'react';
import './Home.css';
import {BestOf,CarouselData,CategoryBarData} from '../../Datas'
import Categorybar from '../../Components/Categorybar/Categorybar';
import Bannercarousel from '../../Components/BannerCarousel/BannerCarousel';
import ProductCarousel from '../../Components/ProductCarousel/ProductCarousel'

const Home = () => {
  return (
    <div className='Home'>
      <div className='Home_catogryContianer'>
        <div className='Home_catogryBar'>
          {CategoryBarData.map((item,index) =>
          (
            <Categorybar 
            key={index}
            imgSrc = {item.imageSrc}
            CategoryName={item.category}/>
          ))}
        </div>
        <div className='Home_container'></div>
        <div className='Home_carousel'>
          <Bannercarousel data ={CarouselData}/>
        </div>
        <div className='Home_ProductCarousel'>
        <ProductCarousel
            BgImg={
              "https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            }
            Title={"Best of Electronics"}
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Beauty,Food,Toys"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Winter Essentials"
            Data={BestOf.Electronics}
          />
          <ProductCarousel
            BgImg ="https://rukminim1.flixcart.com/fk-p-flap/278/278/image/7593e7b6640822c1.jpg?q=90"
            Title="Wedding & Gifting Specials"
            Data={BestOf.Electronics}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
