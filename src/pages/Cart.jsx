import React, { useEffect, useState } from 'react';
import { collection,doc } from 'firebase/firestore';

import { useAuth } from '../custom-hooks/useAuth';

import '../styles/cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../redux/slices/cartSlice';

function Cart() {

  //const [cartList,setCartList] = useState([]);
  const { currentuser } = useAuth();

  const cartlist = useSelector(state => state.cart.cartItems);
  const totalamount = useSelector(state => state.cart.cartItems.totalAmt);
  
  const dispatch = useDispatch();

  return (
    <div id='main_cart_container'>

        <section id='main_cont_cartbackimg'>
          <header>Products</header>
        </section>

        <section id='main_cont_cartinfo'>
          <section id='carttable_cont'>
            {currentuser ? <table id='carttable'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {cartlist.map((item,index) => {
                  return <tr key={index}>
                    <td className='cart_product_img'><img src={item.imgUrl} alt={item.productName} /></td>
                    <td>{item.productName}</td>
                    <td>{item.totalPrice}</td>
                    <td>{item.quantity}</td>
                    <td> <i className="ri-delete-bin-line" onClick={() => {dispatch(deleteItem(item))}}></i></td>
                  </tr>
                })}
              </tbody>
            </table> : <label id='signin_info_label'>Sign In To View Cart</label>}
          </section>
          <section id='main_cont_cartbill'>
            <article>
              <label htmlFor=""><span>Subtotal</span><span>{  }</span></label>
              <label htmlFor="" style={{fontSize:'14px',fontWeight:'500'}}>Taxes and shipping will calculate in checkout</label>
            </article>
            <button>Checkout</button>
            <button>Continue Shopping</button>
          </section>
        </section>
    </div>
  )
}

/* id: newItem.id,
productName: newItem.productName,
imgUrl: newItem.imgUrl,
price: newItem.price,
quantity: 1,
totalPrice: newItem.price, */

export default Cart