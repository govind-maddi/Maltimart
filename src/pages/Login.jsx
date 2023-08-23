import React, { useState } from 'react';
import { auth,googleprovider } from '../firebase/config';
import { createUserWithEmailAndPassword,signInWithPopup } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

function Login() {

  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const navigate = useNavigate();

  const signinUsingEmailPassword = async () => {
    try {
      await createUserWithEmailAndPassword(auth,email,password);
      navigate('/home');
    } catch (error) {
      alert(error);
    }

  }

  const googleSignin = async () =>{
    await signInWithPopup(auth,googleprovider);
}

  return (
    <div>
      <input type="text" placeholder='Email' onChange={(e) => setEmail(e.target.value)}/>
      <input type="text" placeholder='Password' onChange={(e) => setPassword(e.target.value)}/>
      <button onClick={signinUsingEmailPassword}>Sign In</button>
      <button onClick={googleSignin}>Sign In Google</button>
    </div>
  )
}

export default Login;