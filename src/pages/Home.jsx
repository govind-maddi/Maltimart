import React,{useEffect, useState} from 'react'
import products from '../assets/data/products'
import ProductCard from '../components/UI/ProductCard'
import Clock from '../components/UI/Clock'

import { motion } from 'framer-motion'

import {Link, NavLink} from 'react-router-dom'

import Furndisplay from '../assets/images/common-section-bg.jpg'
import OfferChair from '../assets/images/counter-timer-img.png'
import LimProductOffer from '../assets/images/counter-timer-img.png'

import '../styles/home.css'

function Home() {

  const [ bestsales,setBestSales ] = useState([]);
  const [ newarrivals,setNewArrivals ] = useState([]);
  const [ popular,setPopular ] = useState([]);

  useEffect(() => {
    let filteredNewArrivals = products.filter((item) => item.category === 'sofa');
    filteredNewArrivals = filteredNewArrivals.slice(0,4);
    setNewArrivals(filteredNewArrivals);

    let filteredpopCategory = products.filter((item) => item.category === 'chair');
    filteredpopCategory = filteredpopCategory.slice(0,4);
    setPopular(filteredpopCategory);

    let filteredbestsales = products.filter((item) => item.category === 'mobile');
    filteredbestsales = filteredbestsales.slice(0,4);
    setBestSales(filteredbestsales);
  },[]);

  return (
    <div id='main_container_home'>

      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_outer_info'>
        <div id='main_cont_inner_infoimg'>
        <section id='main_cont_inner_info'>
          <header>Discover Quality Living,<br/> Maltimart Style</header>
          <article>
            Maltimart offers a curated collection of quality products designed to enhance your lifestyle. Discover a range that seamlessly combines functionality and style. Explore our thoughtfully selected items that cater to your needs, delivering a delightful shopping experience that reflects your unique taste and preferences. Elevate your everyday with Maltimart.
          </article>
          <button>Shop Now</button>
        </section>

        <figure id='main_cont_inner_img'>
          <img id='infoimg' src={Furndisplay} alt="Furniture Display" />
        </figure>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_features_outer'>
      <div id='main_cont_features'>
        <section className='main_cont_feature' style={{backgroundColor:'rgba(253,239,230,1)'}}>
          <figure className='feature_icon'>
          <i className="ri-truck-line"></i>
          </figure>
          <article className='feature_taglines'>
            <label style={{fontSize:'16px'}}>Free Shipping</label><br/>
            <label style={{fontSize:'14px',marginTop:'10px'}}>Lorem ipsum dolor sit amet</label>
          </article>
        </section>

        <section className='main_cont_feature' style={{backgroundColor:'rgb(214, 229, 251)'}}>
        <figure className='feature_icon'>
          <i className="ri-refresh-line"></i>
          </figure>
          <article className='feature_taglines'>
            <label style={{fontSize:'16px'}}>Easy Returns</label><br/>
            <label style={{fontSize:'14px',marginTop:'10px'}}>Lorem ipsum dolor sit amet</label>
          </article>
        </section>

        <section className='main_cont_feature' style={{backgroundColor:'rgb(226, 242, 178)'}}>
        <figure className='feature_icon'>
        <i className="ri-secure-payment-line"></i>
          </figure>
          <article className='feature_taglines'>
            <label style={{fontSize:'16px'}}>Secure Payment</label><br/>
            <label style={{fontSize:'14px',marginTop:'10px'}}>Lorem ipsum dolor sit amet</label>
          </article>
        </section>

        <section className='main_cont_feature' style={{backgroundColor:'rgb(206, 235, 233)'}}>
        <figure className='feature_icon'>
          <i className="ri-exchange-dollar-line"></i>
          </figure>
          <article className='feature_taglines'>
            <label style={{fontSize:'16px'}}>Back Gaurantee</label><br/>
            <label style={{fontSize:'14px',marginTop:'10px'}}>Lorem ipsum dolor sit amet</label>
          </article>
        </section>
      </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_bestsales'>
        <header>Best Sales</header>
        <div id='main_cont_bestsalesgrid'>
          
            {newarrivals.map((item,index) => {
              return < ProductCard key={index} product={item}></ProductCard>
            })}

        </div>
      </div>
      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_product_limoffer'>
        <header id='main_cont_product_header'>Product On Offer</header>
        <div id='main_cont_product_infotimer_outer'>
          <section id='main_cont_product_infoimg'>

            <section id='main_cont_product_info'>
              <label style={{fontSize:'18px',fontWeight:'500'}}>Limited Offers</label>
              <label style={{fontSize:'22px',fontWeight:'500'}}>Quality Armchair</label>
              <Clock/>
              <button><Link to='/shop'>Visit Store</Link></button>
            </section>

            <figure id='main_cont_product_img'>
              <img src={LimProductOffer} alt={LimProductOffer} />
            </figure>

          </section>
        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_newarrprod'>
        <header>Trending Products</header>
        <div id='main_cont_newarrprodgrid'>
          
            {newarrivals.map((item,index) => {
              return <ProductCard key={index} product={item}></ProductCard>
            })}

        </div>
      </div>

      {/* ----------------------------------------------------------------------------- */}
      <div id='main_cont_popular'>
        <header>Popular Category</header>
        <div id='main_cont_populargrid'>
          
            {popular.map((item,index) => {
              return <ProductCard key={index} product={item}></ProductCard>
            })}

        </div>
      </div>

    </div>
  )
}

export default Home