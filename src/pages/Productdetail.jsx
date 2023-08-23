import React, { useState } from 'react'
import { useParams } from 'react-router-dom'

import sofa from '../assets/images/double-sofa-01.png'

import '../styles/productdetail.css'

import { addItem } from '../redux/slices/cartSlice'
import { useDispatch } from 'react-redux';

function Productdetail() {

    const param = useParams();
    const [flag,setFlag] = useState(true);
    const dispatch = useDispatch();

  return (
    <div>
        <section id='main_cont_prodbackimg'>
            <header>Products</header>
        </section>

        <div id='main_cont_proddetail'>

            <section id='productdetail_cont'>
                <figure>
                    <img src={sofa} alt={sofa} />
                </figure>
                <article id='productdetail'>
                    <header>Stone and Beam Westview</header>
                    <label htmlFor="">
                        <span className='staricon'><i className="ri-star-s-fill" style={{color:'#ff7f50'}}></i></span>
                        <span className='staricon'><i className="ri-star-s-fill" style={{color:'#ff7f50'}}></i></span>
                        <span className='staricon'><i className="ri-star-s-fill" style={{color:'#ff7f50'}}></i></span>
                        <span className='staricon'><i className="ri-star-s-fill" style={{color:'#ff7f50'}}></i></span>
                        <span className='staricon'><i className="ri-star-s-fill" style={{color:'#ff7f50'}}></i></span>
                        <span style={{marginLeft:'2.5rem'}}>4.7 (<span style={{color:'#ff7f50'}}> ratings </span>)</span>
                    </label>
                    <label htmlFor="">
                        <span className='pricecat'>$193</span>
                        <span className='pricecat' style={{fontWeight:'400'}}>Category : <span style={{fontWeight:'500'}}>sofa</span></span>
                    </label>
                    <p style={{width:'80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur iure quas illo voluptates labore tempore!</p>
                    <button /* onClick={() => dispatch(addItem())} */>Add To Cart</button>
                </article>
            </section>

            <section id='main_cont_descrevw'>
                <article id='desc_revw_tabs'>
                    <label htmlFor="" onClick={() => setFlag(true)}>Description</label>
                    <label htmlFor="" onClick={() => setFlag(false)}>Reviews</label>
                </article>
                { flag && <article id='desc'>
                    <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum accusantium iste, voluptas cumque provident! Consequatur officiis animi rem tempore voluptate cumque hic similique aperiam ut consectetur distinctio repudiandae quia quam quos, quas illo, iusto, necessitatibus odio veniam exercitationem quis voluptatibus debitis laboriosam! Esse debitis obcaecati blanditiis at impedit quibusdam!
                    </p>
                </article> }
                
                { !flag && <article id='revw_cont'>
                <section className='revw'>
                        <label htmlFor="" className='reviewer'>
                            <span>John Doe</span>
                            <span style={{color:'coral'}}>4.7 rating</span>
                        </label>
                        <label htmlFor="" className='reviewer_review'>Lorem ipsum dolor sit amet consectetur adipisicing elit</label>
                    </section>
                    <form>
                        <header>Leave Your Experience</header>
                        <input type="text" placeholder='Enter Name'/>
                        <figure>
                            <span><i className="ri-star-s-fill"></i></span>
                            <span><i className="ri-star-s-fill"></i></span>
                            <span><i className="ri-star-s-fill"></i></span>
                            <span><i className="ri-star-s-fill"></i></span>
                            <span><i className="ri-star-s-fill"></i></span>
                        </figure>
                        <textarea id="" rows="10"  placeholder='Enter Your Review'/>
                    </form>
                </article> }
            </section>
        </div>
    </div>
  )
}

export default Productdetail