import React, { useState } from 'react'
import { toast } from 'react-toastify'
import { useEffect } from 'react';
import { auth, db } from '../components/firebase';
import { doc, getDoc } from 'firebase/firestore';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';
import Features from '../components/Features';

const Home = () => {

  const [userDetails,setUserDetails] = useState(null);
  const fetchUserData = async() => {
    auth.onAuthStateChanged(async (user) => {
        console.log(user);
        const docSnap = getDoc(doc(db,"Users",user.uid));
        if ((await docSnap).exists()){
            setUserDetails((await docSnap).data());
            console.log(docSnap.data);
        } else {
            console.log("User not found !")
        }
    });
  };
   useEffect(()=>{
    fetchUserData();
    toast.dismiss();
    toast.success("Logged in successfully !")
   },[]);

    const handleLogout = async() => {
    try {
        await auth.signOut();
        sessionStorage.clear();
        window.location.href = "/login";
        // replacing "userDetails" value to null in browser history to prevent navigating back
        window.history.replaceState(null, null, "/login");
        console.log("Logged out");
    } catch (error) {
        console.log("error : ",error);
    }
   };

  return (
    <>
        <Navbar />
        {userDetails ? (
            <div className='w-auto h-auto mx-10 mt-10 px-5 py-2 rounded-lg bg-slate-100 font-semibold'>
                <h1 className='text-3xl text-center mb-5 text-gray-900'>Welcome <span className='text-3xl text-teal-600 rounded-lg bg-slate-100'> {userDetails.name} ✨</span></h1>
                {/* <p className='text-xl'>Name : <span className='text-pink-500'>{userDetails.name}</span></p> */}
                {/* <p className='text-xl'>Email : <span className='text-pink-500'>{userDetails.email}</span></p>
                <div className='text-center'>
                    <button onClick={handleLogout} className='mt-5 px-3 py-2 bg-blue-600 text-white rounded-lg active:scale-90 hover:bg-blue-500'>Log Out</button>
                </div> */}
            </div>
        ) : (
            <div className="flex justify-center items-center h-screen">
                <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-blue-500"></div>
            </div>
            // <div className='w-[200px] h-auto text-2xl mx-auto mt-52 px-5 py-5 rounded-lg text-pink-500'>Loading Data...</div>
        ) }
        <Hero />
        <Features />
        <Footer />
    </>
  );
};

export default Home;