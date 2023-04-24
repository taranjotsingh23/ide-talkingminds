import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Navbar from '../components/navbar';
import Link from 'next/link';
import { FaSpinner } from "react-icons/fa";
import { toast } from 'react-toastify';
import Image from "next/image";
import Chat from '../components/chat'
import VoiceAlanAi from "../components/voiceAlanAi";
const Profile = () => {
    const [loggedIn, setLoggedIn] = useState('')
    const [name, setName] = useState('')
    const [filename, setFileName] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [age, setAge] = useState('')
    const [loading,setLoading] = useState(false)
    const [gender, setGender] = useState('')
    const [userid,setUserId] = useState('')
    // const url = "http://localhost:5000/api/profile/updateProfile";
    
    const url = "https://talking-minds-backend.onrender.com/api/profile/updateProfile";
    
    // const url = "https://talkingminds-backend.onrender.com/api/profile/updateProfile";
    const router = useRouter()

    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem('userid')))
        setLoggedIn(localStorage.getItem('loggedIn'))
        
    }, [])

    const createUserProfile = (event) => {
        event.preventDefault();

        setLoading(true);

        var formdata = new FormData();
        formdata.append("filename", filename);
        formdata.append("mobileNumber", mobileNumber);
        formdata.append("age", age);
        formdata.append("gender", gender);
        formdata.append("userId", userid);


        var requestOptions = {
            method: 'POST',
            redirect: 'follow',
            body: formdata,
        };
        console.log(formdata);
        fetch(url, requestOptions)
            .then((response) => {
                console.log("response", response.json())
                if (response.status === 400) {
                    toast.error(
                        "Details are incorrect",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        }
                    );
                    setLoading(false)
                } else if (response.status === 200) {
                    toast.success(
                        "User Profile created successfully",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        }
                    );
                    setLoading(false)
                    router.push('/profile')
                }
            })
            .catch((error) => console.error(error));
    }
    
    
    return (
        <>  
            <div className="flex flex-row justify-around items-center w-full bg-[#1551b8] text-white text-[8px] md:text-[16px]">
                <img src="/logo.jpg" alt="logo" width={100} height={100} onClick={() => router.push("/")}
                    className="cursor-pointer" />
                <div className="navlink">
                    <Link href="/about-us" className="nav-links">
                        About
                    </Link>
                    <Link href="/selfassessment2" className="nav-links">
                        Self Assessment Tool
                    </Link>
                    <Link href="/education" className="nav-links">
                        Education
                    </Link>
                    <Link href="/vent-it-out" className="nav-links">
                        Vent It Out
                    </Link>
                    <Link href="/consult" className="nav-links">
                        Consult
                    </Link>
                    <Link
                        href="http://healthcollective.in/contact/helplines/"
                        className="nav-links"
                        target={"_blank"}
                        rel="noopener noreferrer"
                    >
                        Helpline
                    </Link>
                </div>
                {loggedIn && (
                    <>
                    <div className="button">
                        <Link href="/createprofile" style={{marginRight:
                        "10px"}}>
                        Create Profile
                        </Link>
                        <Link href="/profile" style={{marginRight:
                        "10px"}}>
                        View Profile
                        </Link>    
                        <button
                            className="login"
                            onClick={() => {
                                localStorage.removeItem("loggedIn");
                                router.reload();
                            }}
                        >
                            Log Out
                        </button>
                    </div>
                    </>
                )}
                {!loggedIn && (
                    <div className="button">
                        <button className="login" onClick={() => router.push("/login")}>
                            Log In
                        </button>
                        <button className="signup" onClick={() => router.push("/signup")}>
                            Sign Up
                        </button>
                    </div>
                )}
            </div>
            <div className="grid grid-rows-2 mt-3 border items-center w-[50%] mx-auto shadow-2xl">
                <div className="border-b">
                    <h1 className="font-epilogue text-[40px] font-bold text-[#303735] text-center">{name!=''?name:"Enter the Details"}
                    </h1>
                </div>
                <form onSubmit={createUserProfile}>
                <div>
                    
                    <h1 className="flex flex-row justify-between mx-5">
                         <>
                        <span className='mt-3'>Profile Picture:</span>
                        <span>
                        <input
                            type="file"
                            name="filename"
                            onChange={(e) => setFileName(e.target.files[0])}
                            required
                        />
                        </span>
                        </>
                    </h1>
                    <h1 className="my-3 flex flex-row justify-between mx-5">
                        
                       <>
                        <span className='mt-3'>Contact Number:</span>
                        <span>
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your mobile number"
                            name="mobileNumber"
                            value={mobileNumber}
                            onChange={(e) => setMobileNumber(e.target.value)}
                            required
                        />
                        </span>
                        </>
                        

                    </h1>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        <>
                        <span className='mt-3'>Age:</span> 
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter your age"
                            name="age"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                        </>
                        
                    </p>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        <>
                        <span >Gender:</span>
                        <span>
                        <input
                            type="radio"
                            name="gender"
                            value="male"
                            onChange={(e) => setGender(e.target.value)}
                            required
                        /> Male 
                        <input
                            className='ml-3'
                            type="radio"
                            name="gender"
                            value="female"
                            onChange={(e) => setGender(e.target.value)}
                            required
                        /> Female
                        
                        </span>
                        </>
                        
                    </p>
                   
                </div>
                <div className="flex justify-center">
                        <button
                            type="submit"
                            className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                            // disabled={showErr || showErr2}
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <span>Create Profile</span>
                            )}
                        </button>
                    </div>
                </form>
            </div>
            <Chat />
            <VoiceAlanAi />
        </>
    )
}

export default Profile