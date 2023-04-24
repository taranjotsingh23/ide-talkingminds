import React from 'react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from "next/image";
import { FaSpinner } from 'react-icons/fa';
import { toast } from 'react-toastify';

import Chat from '../components/chat'

import VoiceAlanAi from "../components/voiceAlanAi";
const UserProfile = () => {
    const [loggedIn, setLoggedIn] = useState('')
    const [ngoDetail, setNgoDetail] = useState({})
    const [ngoId, setNgoId] = useState('')
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [mobileNumber, setMobileNumber] = useState('')
    const [age, setAge] = useState('')
    const [gender, setGender] = useState('')
    const [ratings, setRatings] = useState('')
    const [authToken, setAuthToken] = useState('')
    const [userId,setUserId] = useState('')
    const [profilePictureURL,setprofilePictureURL] = useState('')
    const [updateDetails,setUpdateDetails] = useState(false)
    const [loading,setLoading] = useState(false)
    // const url = "http://localhost:5000/api/profile/getProfile/"+userId;
    // const url1 = "http://localhost:5000/api/profile/changeProfile";
    const url = "https://talking-minds-backend.onrender.com/api/profile/getProfile/"+userId;
    const url1 = "https://talking-minds-backend.onrender.com/api/profile/changeProfile";


    // https://talkingminds-backend.onrender.com/
    
    // const url = "https://talkingminds-backend.onrender.com/api/profile/getProfile/"+userId;
    // const url1 = "https://talkingminds-backend.onrender.com/api/profile/changeProfile";
    
    const router = useRouter()

    const userDetails = async () => {

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        fetch(url, requestOptions)
            .then(response => response.text())
            .then(result => {
                const data = JSON.parse(result);
                console.log(data);
                setAuthToken(localStorage.setItem("authToken", data.authToken))
                setName(data.name)
                setEmail(data.email)
                setMobileNumber(data.mobileNumber)
                setAge(data.age)
                setGender(data.gender)
                setprofilePictureURL(data.profilePictureURL);
            })
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        setUserId(JSON.parse(localStorage.getItem('userid')))
        setLoggedIn(localStorage.getItem('loggedIn'))
    }, [])

    useEffect(() => {
        if (loggedIn?.length > 0) {
            userDetails()
        }
    }, [loggedIn])
    
    const handleUpdate = (event)=>{
        event.preventDefault();
        setLoading(true);

        const data = {
            mobileNumber,
            age,
            gender,
            name,
            userId
        }
       
        var requestOptions = {
            method: 'PUT',
            redirect: 'follow',
            body: JSON.stringify(data),
        };
        console.log(data);
        fetch(url1, requestOptions)
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
                        "User Profile updated successfully",
                        {
                            position: toast.POSITION.TOP_CENTER,
                            autoClose: 2000,
                        }
                    );
                    setLoading(false)
                    router.push('/')
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
            {/* grid-rows-2 */}
            <div className="grid mt-3 border items-center w-[50%] mx-auto shadow-2xl">
                <div className="border-b pb-5">
                    <h1 className="font-epilogue text-[40px] font-bold text-[#303735] text-center mb-5">{name}
                    </h1>
                    <div className='flex justify-center'>
                    <img src={profilePictureURL} alt={name} width={200} height={200} className='rounded-2xl' />
                    </div>
                </div>
                {updateDetails===false?
                <div className='mt-5 pt-5 pb-5 mb-5'>
                    <h1 className="flex flex-row justify-between mx-5">
                        
                        <>
                            <span>Email:</span>
                            <span>
                            {email}
                            </span>
                        </>
                        
                        
                    </h1>
                    <h1 className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>Contact Number:</span>
                            {mobileNumber}
                        </>
                        

                    </h1>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>Age:</span>
                            {age}
                        </>
                        
                    </p>
                    <p className="my-3 flex flex-row justify-between mx-5">
                        
                        
                        <>
                            <span>Gender:</span>
                            {gender}
                        </>
                        
                        
                    </p>
                    <div className="flex justify-center">
                    
                    <button
                            className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                            onClick = {()=>setUpdateDetails(true)}
                        >
                                <span>Edit Profile</span>
                    </button>
                    
                    </div>
                </div>
                :
                <form onSubmit={handleUpdate} className="mt-5 pt-5 pb-5 mb-5">
                <div>
                <h1 className="my-3 flex flex-row justify-between mx-5">
                        
                        <>
                         <span className='mt-3'>Name:</span>
                         <span>
                         <input
                             type="text"
                             className="border rounded px-4 py-2"
                             placeholder="Enter your name"
                             name="name"
                             value={name}
                             onChange={(e) => setName(e.target.value)}
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
                            onClick = {handleUpdate}
                        >
                            {loading ? (
                            <FaSpinner className="animate-spin" />
                        ) : (
                                <span>Update Profile</span>
                            )}
                    </button>
                    </div>
                </form>
                }
            </div>
            <Chat />
            <VoiceAlanAi />
        </>
    )
}

export default UserProfile