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
    
    const [employment,setEmployment] = useState("")
    const [mentallyIll,setMentallyIll] = useState("")
    const [education,setEducation] = useState("")
    const [own_computer,setOwn_computer] = useState("")
    const [hospitalized,setHospitalized] = useState("")
    const [hospitalized1,setHospitalized1] = useState("")
    const [legally_disabled,setLegally_disabled] = useState("")
    const [internet,setInternet] = useState("")
    const [live_parents,setLive_parents] = useState("")
    const [resume_gap,setResume_gap] = useState("")
    const [total_gap,setTotal_gap] = useState("")
    const [income,setIncome] = useState("")
    const [unemployed,setUnemployed] = useState(0)
    const [read_out_work_school,setRead_out_work_school] = useState("")
    const [income_social_welfare,setIncome_social_welfare] = useState("")
    const [food_stamps,setFood_stamps] = useState("")
    const [section_8,setSection_8] = useState("")
    const [hospitalized_times,setHospitalized_times] = useState("")
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
        console.log(education);
    }, [education])
    
    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        setUserId(JSON.parse(localStorage.getItem('userid')))
    }, [])
    const url = "http://localhost:5000/api/assessment/selfassessment1";
    const router = useRouter();
    const handleSubmit = (e)=>{
      e.preventDefault();
      setLoading(true);
      setUnemployed(Math.floor(Math.random() * 2));
      const data = {
        employment ,
        mentallyIll ,
        education ,
        own_computer ,
        hospitalized ,
        hospitalized1 ,
        legally_disabled ,
        internet ,
        live_parents ,
        resume_gap ,
        total_gap ,
        income ,
        unemployed ,
        read_out_work_school ,
        income_social_welfare ,
        food_stamps ,
        section_8 ,
        hospitalized_times,
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
                  setEducation("")
                  setEmployment("")
                  setFood_stamps("")
                  setGender("")
                  setHospitalized("")
                  setHospitalized1("")
                  setHospitalized_times("")
                  setIncome("")
                  setIncome_social_welfare("")
                  setInternet("")
                  setLack_concentration("")
                  setLegally_disabled("")
                  setLive_parents("")
                  setMentallyIll("")
                  setMood_swings("")
                  setObsessive_thinking("")
                  setOwn_computer("")
                  setPanic_attacks("")
                  setRead_out_work_school("")
                  setResume_gap("")
                  setSection_8("")
                  setTiredness("")
                  setTotal_gap("")
                  setUnemployed("")
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
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5 education">
                         <>
                        <span className='mt-3'>Education:</span>
                        <span className="mt-3">

                        <select  className='ml-3 form-check form-check-inline' name="education" id="education" onChange={(e) => setEducation(e.target.value)} required>
                            <option value="5">Completed Masters</option>
                            <option value="7">Completed Phd</option>
                            <option value="3">Completed Undergraduate</option>
                            <option value="1">High School or GED</option>
                            <option value="0">Pursuing highschool</option>
                            <option value="6">Pursuing Phd</option>
                            <option value="2">Pursuing Undergraduate</option>
                            <option value="4">Pursuing Masters</option>
                        </select>
                        
                        {/* <input
                            type="radio"
                            name="education"
                            className='ml-3 form-check form-check-inline'
                            value="5"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                            placeholder=""
                        /> 
                        <span className="eduInputText"></span>
                        

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="7"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Completed Phd

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="3"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Completed Undergraduate

                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> High School or GED
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing highschool
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="6"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Phd
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="2"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Undergraduate
                        
                        <input
                            type="radio"
                            name="education"
                            className='ml-3'
                            value="4"
                            onChange={(e) => setEducation(e.target.value)}
                            required
                        /> Pursuing Masters
                         */}
                        </span>
                        </>
                    </h1>
                   

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I am currently employed at least part-time</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="employment"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setEmployment(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="employment"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setEmployment(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I identify as having a mental illness</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="mentallyIll"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setMentallyIll(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="mentallyIll"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setMentallyIll(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I have my own computer separate from a smart phone</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="own_computer"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setOwn_computer(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="own_computer"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setOwn_computer(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>

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
                        <span className='mt-3'>How many days were you hospitalized for your mental illness?</span>
                        <span className="mt-3">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter days"
                            name="hospitalized1"
                            value={hospitalized1}
                            onChange={(e) => setHospitalized1(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>

                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I am legally disabled</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="legally_disabled"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setLegally_disabled(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="legally_disabled"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setLegally_disabled(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I have my regular access to the internet</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="internet"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setInternet(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="internet"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setInternet(e.target.value)}
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
                        <span className='mt-3'>I have a gap in my resume</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="resume_gap"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setResume_gap(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="resume_gap"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setResume_gap(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Total length of any gaps in my resume in months.</span>
                        <span className="mt-3">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter months"
                            name="total_gap"
                            value={total_gap}
                            onChange={(e) => setTotal_gap(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>
                    

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Annual income in USD</span>
                        <span className="mt-3">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter income"
                            name="income"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>

                    {/* <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I am unemployed</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="unemployed"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setUnemployed(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="unemployed"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setUnemployed(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1> */}

                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I read outside of work and school</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="read_out_work_school"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setRead_out_work_school(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="read_out_work_school"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setRead_out_work_school(e.target.value)}
                            required
                        /> No
                        </span>
                        </>
                    </h1>
                    
                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>Annual income from social welfare programs by govt.                         
                            <div class="tooltip">
                                <Image src={infoImage} height={15} width={15} />
                                <span class="tooltiptext">Annual family income of less than Rs 1,00,000 from all sources (including rent, interest/dividends on savings & investments, earnings from farm</span>
                            </div>
                        </span>

                        <span className="mt-3">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter income"
                            name="income_social_welfare"
                            value={income_social_welfare}
                            onChange={(e) => setIncome_social_welfare(e.target.value)}
                            required
                        />
                        </span>
                        </>
                    </h1>


                    <h1 className="flex flex-row justify-between mx-5 mt-5">
                         <>
                        <span className='mt-3'>I receive food benefit from govt.</span>
                        <span className="mt-3">
                        <input
                            type="radio"
                            name="food_stamps"
                            className='ml-3'
                            value="1"
                            onChange={(e) => setFood_stamps(e.target.value)}
                            required
                        /> Yes

                        <input
                            type="radio"
                            name="food_stamps"
                            className='ml-3'
                            value="0"
                            onChange={(e) => setFood_stamps(e.target.value)}
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
                        <span className='mt-3'>How many times were you hospitalized for your mental illness</span>
                        <span className="mt-3">
                        <input
                            type="text"
                            className="border rounded px-4 py-2"
                            placeholder="Enter the number"
                            name="hospitalized_times"
                            value={hospitalized_times}
                            onChange={(e) => setHospitalized_times(e.target.value)}
                            required
                        />
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
                {/* <h1>FEATURE COMING SOON ...</h1>
                <Link href={'https://github.com/ayushtyagi14/shebuilds/tree/main/chatbot'} className='text-[25px] text-blue-300 hover:underline'>
                    Check out the GitHub Code!
                </Link> */}
            {/* </div> */}

                
         
            <Footer />
            <Chat />
        </>
    )
}

export default SelfAssessment;