import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FaSpinner } from "react-icons/fa";
import { toast } from "react-toastify";
import Image from "next/image";
import infoImage from "../assets/infoIcon.png"
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
const SelfAssessment = () => {

    const [loggedIn, setLoggedIn] = useState(false)
    const [loading,setLoading] = useState(false)
    const [userId,setUserId] = useState("")
    const [message,setMessage] = useState("")
    const [hospitalized,setHospitalized] = useState("")
    const [live_parents,setLive_parents] = useState("")
    const [section_8,setSection_8] = useState("")
    const [lack_concentration,setLack_concentration] = useState("")
    const [anxiety,setAnxiety] = useState("")
    const [depression,setDepression] = useState("")
    const [obsessive_thinking,setObsessive_thinking] = useState("")
    const [mood_swings,setMood_swings] = useState("")
    const [panic_attacks,setPanic_attacks] = useState("")
    const [compulsive_behavior,setCompulsive_behavior] = useState("")
    const [tiredness,setTiredness] = useState("")
    const [age,setAge] = useState("")
    const [gender,setGender] = useState("")
    
    
    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        setUserId(JSON.parse(localStorage.getItem('userid')))
    }, [])
    const url = "http://localhost:5000/api/assessment/selfassessment2";
    const router = useRouter();
    const handleSubmit = (e)=>{
      e.preventDefault();
      setLoading(true);
      const data = {
        hospitalized ,
        live_parents ,
        section_8 ,
        lack_concentration ,
        anxiety ,
        depression ,
        obsessive_thinking ,
        mood_swings ,
        panic_attacks ,
        compulsive_behavior ,
        tiredness ,
        age ,
        gender,
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
                      "Details processed successfully",
                      {
                          position: toast.POSITION.TOP_CENTER,
                          autoClose: 2000,
                      }
                  );
                  
                  setMessage(data.message);
                  console.log(data)
                  setLoading(false)             
                  setAge("")
                  setAnxiety("")
                  setCompulsive_behavior("")
                  setDepression("")
                  setGender("")
                  setHospitalized("")
                  setLack_concentration("")
                  setLive_parents("")
                  setMood_swings("")
                  setObsessive_thinking("")
                  setPanic_attacks("")
                  setSection_8("")
                  setTiredness("")
                }
              console.log(data);
              
          })
          .catch((error) => console.error(error));
    }
    return (
        <>
            <div className="flex flex-row justify-around items-center w-full bg-[darkgreen] text-white text-[8px] md:text-[16px] h-20">
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
           


               

              <form onSubmit={handleSubmit} className='assessmentForm'>
                <div>
                    
                                       
                 
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I have been hospitalized before for my mental illness</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="hospitalized"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setHospitalized(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="hospitalized"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setHospitalized(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I live with my parents</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="live_parents"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setLive_parents(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="live_parents"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setLive_parents(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Do you live on rent?</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="section_8"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setSection_8(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="section_8"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setSection_8(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Lack of concentration</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="lack_concentration"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setLack_concentration(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="lack_concentration"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setLack_concentration(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Anxiety</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="anxiety"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setAnxiety(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="anxiety"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setAnxiety(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Depression</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="depression"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setDepression(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="depression"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setDepression(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    {/* Obsessive thinking */}

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Obsessive thinking</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="obsessive_thinking"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setObsessive_thinking(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="obsessive_thinking"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setObsessive_thinking(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Mood swings</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="mood_swings"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setMood_swings(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="mood_swings"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setMood_swings(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Panic attacks</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="panic_attacks"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setPanic_attacks(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="panic_attacks"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setPanic_attacks(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Compulsive behavior</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="compulsive_behavior"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setCompulsive_behavior(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="compulsive_behavior"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setCompulsive_behavior(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Tiredness</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="tiredness"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setTiredness(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="tiredness"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setTiredness(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Age</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="age"
                            className='ml-3'
                            value="65"
                            onChange={(e) => setAge(e.target.value)}
                            required
                        /> {">60"}

                        <input
                            type="radio"
                            name="age"
                            className='ml-3'
                            value="52"
                            onChange={(e) => setAge(e.target.value)}
                            required
                        /> 45-60
                        <input
                            type="radio"
                            name="age"
                            className='ml-3'
                            value="37"
                            onChange={(e) => setAge(e.target.value)}
                            required
                        /> 30-44
                        <input
                            type="radio"
                            name="age"
                            className='ml-3'
                            value="23"
                            onChange={(e) => setAge(e.target.value)}
                            required
                        /> 18-29
                        </span>
                        </>
                    </h1>

                    

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Gender</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="gender"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setGender(e.target.value)}
                            required
                        /> Male

                        <input
                            type="radio"
                            name="gender"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setGender(e.target.value)}
                            required
                        /> Female
                        </span>
                        </>
                    </h1>


                </div>
                <div className="flex justify-center mt-5">
                        <button
                            type="submit"
                            className="py-4 px-7 mt-5  mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white"
                            // disabled={showErr || showErr2}
                        >
                            {loading ? (
                                <FaSpinner className="animate-spin" />
                            ) : (
                                <div>Evaluate Mental Health State</div>
                            )}
                        </button>
                        
                    </div>
                </form>
                <div className="flex justify-center mt-5 mb-5">
                <span>
                          {message!=""?
                            <>
                              <h4 className="text-center">Message for you: {message}</h4>
                            </>
                          :
                          <>
                          </>
                          }
                        </span>
                </div>

            <Footer />
            <Chat />
        </>
    )
}

export default SelfAssessment;