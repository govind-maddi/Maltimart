/* eslint-disable react/prop-types */

import React from 'react'
import './styles/productcard.css'

import { motion } from 'framer-motion'

import { useSelector,useDispatch } from 'react-redux';
import { addItem } from '../../redux/slices/cartSlice';

import { useAuth } from '../../custom-hooks/useAuth';

function ProductCard({product}) {

  const { currentuser } = useAuth();
  const list = useSelector(state => state.cart.cartItems);
  const dispatch =useDispatch();

  const scaleVariants = {
    hover:{scale : 0.9},
  };

  const addToCart = () => {
    if(currentuser)
      {
        dispatch(addItem({
          id:product.id,
          productName: product.productName,
          imgUrl: product.imgUrl,
          price: product.price,
        }));
      }
    else
      console.log(false);
  }

  return (
    <div id='product_card_cont'>
        <motion.img whileHover='hover'
                    variants={scaleVariants}
                    transition={{duration:0.14}}
                    src={product.imgUrl} alt={product.productName} />
                    
        <section id='product_card_info'>
        <label>{product.productName}</label><br/>
        <span>{product.category}</span><br/>
        <section>
            $ {product.price}
            <span id='add_icon_cont'>
                <i className="ri-add-line" onClick={addToCart}></i>
            </span>
        </section>
        </section>
    </div>
  )
}

export default ProductCard