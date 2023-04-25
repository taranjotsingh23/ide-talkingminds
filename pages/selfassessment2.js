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
    // const [userId,setUserId] = useState("")
    const [message,setMessage] = useState("")
    const [hospitalized,setHospitalized] = useState(0)
    const [live_parents,setLive_parents] = useState(0)
    const [section_8,setSection_8] = useState(0)
    const [lack_concentration,setLack_concentration] = useState(0)
    const [anxiety,setAnxiety] = useState(0)
    const [depression,setDepression] = useState(0)
    const [obsessive_thinking,setObsessive_thinking] = useState(0)
    const [mood_swings,setMood_swings] = useState(0)
    const [panic_attacks,setPanic_attacks] = useState(0)
    const [compulsive_behavior,setCompulsive_behavior] = useState(0)
    const [tiredness,setTiredness] = useState(0)
    const [age,setAge] = useState(0)
    const [gender,setGender] = useState(0)
    
    const [currentQuestion,setCurrentQuestion] = useState(0)
    const [showResults,setShowResults] = useState(false);


    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
        // setUserId(JSON.parse(localStorage.getItem('userid')))
    }, [])
    // const url = "http://localhost:5000/api/assessment/selfassessment2";
    
    const url = "https://talking-minds-backend.onrender.com/api/assessment/selfassessment2";
    const router = useRouter();

    const questions = [
        {
          text: "Age",
          options: [
            { id: 0, text: "18-29", value: 23},
            { id: 1, text: "30-44", value: 37},
            { id: 2, text: "45-60", value: 52},
            { id: 3, text: ">60", value: 65},
          ],
        },
        {
          text: "Gender",
          options: [
            { id: 0, text: "Male", value:1 },
            { id: 1, text: "Female", value:0 }
          ],
        },
        {
          text: "Do you feel Tiredness?",
          options: [
            { id: 0, text: "Yes", value:1 },
            { id: 1, text: "No", value:0 },
          ],
        },
        {
            text: "Do you suffer from Compulsive behavior?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
              text: "Do you get Panic attacks?",
              options: [
                { id: 0, text: "Yes", value:1 },
                { id: 1, text: "No", value:0 },
              ],
            },
            
        {
            text: "Do you suffer from Mood Swings?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you suffer from Obsessive thinking?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you suffer from Depression?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you suffer from Anxiety?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you suffer from Lack of Concentration?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you live on Rent?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Do you live with your parents?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ],
          },
          {
            text: "Have you been hospitalized before for any mental illness?",
            options: [
              { id: 0, text: "Yes", value:1 },
              { id: 1, text: "No", value:0 },
            ]
          }
      ];
    

      const optionClicked = async(option) => {
        // Increment the score
        if (currentQuestion===0) {
          setAge(option.value);
        }

        else if (currentQuestion===1) {
            setGender(option.value);
        }

        else if (currentQuestion===2) {
            setTiredness(option.value);
        }

        else if (currentQuestion===3) {
            setCompulsive_behavior(option.value);
        }

        else if (currentQuestion===4) {
            setPanic_attacks(option.value);
        }

        else if (currentQuestion===5) {
            setMood_swings(option.value);
        }

        else if (currentQuestion===6) {
            setObsessive_thinking(option.value);
        }

        else if (currentQuestion===7) {
            setDepression(option.value);
        }

        else if (currentQuestion===8) {
            setAnxiety(option.value);
        }


        else if (currentQuestion===9) {
            setLack_concentration(option.value);
        }

        else if (currentQuestion===10) {
            setSection_8(option.value);
        }
        
        else if (currentQuestion===11) {
            setLive_parents(option.value);
        }

        else if (currentQuestion===12) {
            await setHospitalized(option.value);
            // console.log("hospitalized:",hospitalized);
        }
        console.log(currentQuestion);
        if (currentQuestion + 1 < questions.length) {
          setCurrentQuestion(currentQuestion + 1);
        } else {
          setShowResults(true);
        //   console.log("///////////////",hospitalized)
          // handleSubmit();
          setMessage("We're here for you. Please Contact Us for a Free Consultation session with our Expert");
        }

      };



    const handleSubmit = ()=>{
    //   e.preventDefault();
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
        gender
      }

      var requestOptions = {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      };
      console.log(data);
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
                //   resetQuiz();
                }
              console.log(data);
              
          })
          .catch((error) => console.error(error));
    }

    function resetQuiz(){
                     
        setAge(0)
        setAnxiety(0)
        setCompulsive_behavior(0)
        setDepression(0)
        setGender(0)
        setHospitalized(0)
        setLack_concentration(0)
        setLive_parents(0)
        setMood_swings(0)
        setObsessive_thinking(0)
        setPanic_attacks(0)
        setSection_8(0)
        setTiredness(0)
        setCurrentQuestion(0);
        setShowResults(false);

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
                    
            <div className="quizassesment text-center mt-10">
                {!showResults?
                <>
                <h1 className="text-4xl font-extrabold">Self Assessment Quiz</h1>
                <div className="question-card mt-20 bg-red-50 p-10 w-[60%] m-auto rounded-2xl shadow-2xl">
                    <h2 className="text-3xl font-bold dark:text-white text-blue-500 m-8">Question {currentQuestion+1} out of {questions.length}</h2>
                    <h3 className="text-2xl font-bold dark:text-white  m-5 h-20">{questions[currentQuestion].text}</h3>
                    <ul className="list-quiz">
                        {
                            questions[currentQuestion].options.map((option,index)=>{
                                return <li key={index} onClick={()=>{optionClicked(option)}}>{option.text}</li>
                            })
                        }
                    </ul>
                </div>
                </>:
                <>
                {loading?
                <div className="flex justify-center">
                <span><FaSpinner className="animate-spin" size={70}/></span>
                </div>:
                <div className="final-results question-card mt-20 bg-red-50 p-10 w-[60%] m-auto rounded-2xl shadow-2xl">
                    <h1 className="text-3xl font-extrabold text-blue-500">Message for you</h1>
                    <h2 className="text-xl font-bold dark:text-white mt-5">{message}</h2>
                    {message==="We're here for you. Please Contact Us for a Free Consultation session with our Expert"?
                    
                    <Link href="/consult"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Consult</button></Link>
                    :
                    <Link href="/vent-it-out"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Vent It Out</button></Link>
                    }
                    <button className="bg-red-500 px-10 py-3 mt-5 ms-3 font-bold rounded-lg text-white hover:bg-red-800" onClick={()=>{resetQuiz()}}>Reset Quiz</button>
                </div>}
                </>
                }   
            </div>

            
            

               

                {/* <div className="flex justify-center mt-5 mb-5">
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
                </div> */}

            <Footer />
            <Chat />
        </>
    )
}

export default SelfAssessment;