import React, { useState } from 'react'
import logo from '../../assets/images/eco-logo.png'
import { NavLink,Link } from 'react-router-dom'

import { auth } from '../../firebase/config';
import { signOut } from 'firebase/auth';

import { motion } from 'framer-motion';
import usericon from '../../assets/images/user-icon.png'

import { useSelector } from 'react-redux';

import { useAuth } from '../../custom-hooks/useAuth';

import './header.css'

const nav_links =[
  {
    path:'home',
    display:'Home',
  },
  {
    path:'shop',
    display:'Shop',
  },
  {
    path:'cart',
    display:'Cart',
  }
];

function Header() {

  const [userMenu,setUserMenu] = useState(false);
  const { currentuser } = useAuth();
  const cartlength = useSelector((state) => state.cart.totalQty);

  const toggleMenu = () => {
    setUserMenu(prevState => !prevState)
  };

  const signout = async () =>{
    await signOut(auth);
}

  return (
    <nav id='nav_container'>
      <section id='nav_cont_logolabel'>
        <img id='nav_cont_logo' src={logo} alt="logo" />
        <label id='nav_cont_label' htmlFor="">Maltimart</label>
      </section>

      <section id='nav_cont_links'>
        <ul id='nav_cont_linklist'>
          {
            nav_links.map((item,index) => {
              return <li key={index} className='nav_cont_linklist_item'>
                <NavLink to={item.path} className={(navClass) => navClass.isActive ? 'nav_active':''}>{item.display}</NavLink>
              </li>
            })
          }
        </ul>
      </section>

      <section id='nav_cont_icons'>
        <figure className='nav_cont_icon'>
          <i className="ri-shopping-bag-line icon"></i>
          <span className='nav_cont_icon_amt'>{ currentuser ?  cartlength : 0}</span>
        </figure>

        <figure className='nav_cont_icon'>
        <i className="ri-heart-line icon"></i>
          <span className='nav_cont_icon_amt'>2</span>
        </figure>

        <figure className='nav_cont_icon'>
        <motion.img id='profile_icon' whileTap={{ scale: 1.2 }} onClick={toggleMenu}
                  src={/* currentUser ? currentUser.photoURL :  */usericon} alt="" />

        {userMenu && (
          <section id='profile_icon_linklist'>
          <ul id='profile_icon_list'>
            { currentuser ? <li  className='profile_icon_link' onClick={signout}>Logout</li> : <li  className='profile_icon_link'><Link to='Login'>Login</Link></li> }
            <li className='profile_icon_link'><Link to='SignUp'>SignUp</Link></li>
            {/* <li className='profile_icon_link'>DashBoard</li> */}
          </ul>
        </section>
        )}
        </figure>

      </section>
    </nav>
  )
}

export default Header