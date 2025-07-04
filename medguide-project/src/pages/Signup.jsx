import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import { auth, db } from '../components/firebase';
import { setDoc, doc } from 'firebase/firestore';

const Signup = () => {

    const [name,setName] = useState("");
    const [email, setEmail] = useState("");
    const [password,setPassword] = useState("");

    // function handleClick(event){
    //     event.preventDefault();                         
    //     if(name && email && password){
    //         toast.success("Signed up successfully!");
    //     }
    //     else{
    //         toast.warning("Please enter the details");
    //     }
    // };

    const handleLogin = async(e) => {
        e.preventDefault();                                
        if(!name || !email || !password){
            toast.warning("Please enter the details");
            return;
        }
        try {
            await createUserWithEmailAndPassword(auth, email, password);    
            const user = auth.currentUser;                                  
            console.log(user);
            console.log("User Registered Successfully");
            // toast.success("Signed up successfully!");
            if (user) {
                await setDoc(doc(db, "Users", user.uid), {                  
                    email: user.email,
                    name: name,
                    password: password,
                });
                window.location.href = "/home";
            }
            
        } catch (error) {
            console.log(error.message);
            toast.error(error.message);
        }
    }


  return (
    <>
      <form className='mx-auto mt-20 px-10 py-5 rounded-lg max-w-[600px] h-auto shadow-2xl' onSubmit={handleLogin} >
        <h1 className='font-bold text-center text-4xl bg-gradient-to-r from-green-600 to-blue-400 text-transparent bg-clip-text mt-16'> Sign Up </h1>
        <br /><br />
        <div className='mb-5'>
            <h3 className='text-xl text-teal-600 font-semibold'>Name</h3>
            <input
            className='px-3 py-3 rounded-lg mt-2 w-full' 
            type="text" 
            placeholder='Enter your name...'
            value={name}
            onChange={(e)=>setName(e.target.value)}
            required />
        </div>
        <div className='mb-5'>
            <h3 className='text-xl text-teal-600 font-semibold'>Email</h3>
            <input
            className='px-3 py-3 rounded-lg mt-2 w-full'
            type="email" 
            placeholder='Enter your email id...' 
            value={email}
            onChange={(e)=>setEmail(e.target.value)} 
            required />
        </div>
        <div className="mb-5">
            <h3 className='text-xl text-teal-600 font-semibold'>Password</h3>
            <input
            className='px-3 py-3 rounded-lg mt-2 w-full' 
            type="password" 
            placeholder='Enter password...'
            value={password}
            onChange={(e)=>setPassword(e.target.value)} 
            required />
        </div>
        <div className="mt-5 text-center" >
            <button className='bg-teal-600 text-white text-xl px-3 py-2 rounded-md active:scale-90 border-none hover:bg-teal-500' type="submit"> Sign Up </button>
            <br /><br />
            <span className='text-black'>Already have an account? </span><Link to="/login" className='text-teal-600 font-semibold'>Login</Link>
        </div>
      </form>
    </>
  )
}

export default Signup;