import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';
// import { LockClosedIcon } from '@heroicons/react/solid'

import Chat from '../components/chat'

import VoiceAlanAi from "../components/voiceAlanAi";
const MoodTracker = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [symptom,setSymptom] = useState("");
    const [live,setLive] = useState("")
    const [exercise,setExercise] = useState("")
    const [smoke,setSmoke] = useState("")
    const [scale,setScale] = useState("")
    const [loading,setLoading] = useState(false)
    const [userId,setUserId] = useState("")
    const [message,setMessage] = useState("")
    const [score,setScore] = useState(0)
    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        setUserId(JSON.parse(localStorage.getItem('userid')))
    }, [])
    const url = "http://localhost:5000/api/assessment/selfassessment";
    
    
    // const url = "https://talkingminds-backend.onrender.com/api/assessment/selfassessment";
    const router = useRouter();
    const handleSubmit = (e)=>{
      e.preventDefault();
      setLoading(true);

      const data = {
          scale,
          exercise,
          symptom,
          live,
          smoke,
          userId
      }

      var requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      };

      fetch(url, requestOptions)
          .then((response) => {
              // console.log("response", response.json())
              return response.json();
          })
          .then((data)=>{
              if (data.resCode === 400) {
                  toast.error(
                      "Data is incorrect",
                      {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 2000,
                      }
                  );
                  setLoading(false)
              } else if (data.resCode === 200) {
                  toast.success(
                      "Details submitted successfully",
                      {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 2000,
                      }
                  );
                  
                  setScore(data.score);
                  setMessage(data.message);
                  console.log(data)
                  setLoading(false)
                  
              }
              console.log(data);
              
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
            {/* <div className="my-40 text-center text-[50px] font-bold"> */}
           


               

              <form onSubmit={handleSubmit}>
                <div>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Current Symptoms:</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="Depressed Mood"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> Depressed Mood

                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="Excessive Worry"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> Excessive Worry
                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="Sleep Pattern Disturbance"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> Sleep Pattern Disturbance
                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="Increased Irritability"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> Increased Irritability
                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="Attention Deficiency"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> Attention Deficiency
                        <input
                            type="radio"
                            name="dm"
                            className='ml-3'
                            value="None of the Above"
                            onChange={(e) => setSymptom(e.target.value)}
                            required
                        /> None of the Above
                        </span>
                        </>
                    </h1>
                   

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Have you ever had feelings or thoughts that you didn&apos;t want to live?</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="live"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setLive(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="live"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setLive(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Do you exercise regularly?</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="ex"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setExercise(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="ex"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setExercise(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Have you ever smoked cigarettes?</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="smoke"
                            className='ml-3'
                            value="Yes"
                            onChange={(e) => setSmoke(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="smoke"
                            className='ml-3'
                            value="No"
                            onChange={(e) => setSmoke(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>On a scale of 1 to 10, (ten being strongest) how strong is your desire to kill yourself currently?</span>
                        <span className="mt-3">
                        <input
                            type="number"
                            className="border rounded px-4 py-2"
                            placeholder="Enter scale (1-10)"
                            name="scale"
                            value={scale}
                            onChange={(e) => setScale(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>
                    
                    
                   
                </div>
                <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="py-1 px-7  mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                            // disabled={showErr || showErr2}
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <span>Evaluate Mental Health Score</span>
                            )}
                        </button>
                        
                    </div>
                </form>
                <div className="flex justify-center mt-5 mb-5">
                <span>
                          {score!=""?
                            <>
                              <h1 className="text-center">Your mental health score is: {score}</h1>
                              <h4 className="text-center">Message for you: {message}</h4>
                            </>
                          :
                          <>
                          </>
                          }
                        </span>
                </div>
                {/* <h1>FEATURE COMING SOON ...</h1>
                <Link href={'https://github.com/ayushtyagi14/shebuilds/tree/main/chatbot'} className='text-[25px] text-blue-300 hover:underline'>
                    Check out the GitHub Code!
                </Link> */}
            {/* </div> */}

                
         
            <Footer />
            <Chat />
            <VoiceAlanAi />
        </>
    )
}

export default MoodTracker;
