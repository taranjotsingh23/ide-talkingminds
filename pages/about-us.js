import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

import Chat from '../components/chat'
import VoiceAlanAi from "../components/voiceAlanAi";
const About = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        setLoggedIn(localStorage.getItem('loggedIn'));
    }, [])

    const router = useRouter();

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
            <div>
                <h1 className="text-center text-[40px] font-bold mt-10">OUR VISION</h1>
                <p className="text-center w-[80%] mx-auto">
                    Our vision is to create a comprehensive and accessible resource for people seeking information and support for mental health issues. Our website will provide reliable and up-to-date information about different mental health conditions, including symptoms, causes, and treatment options.
                    <br />
                    <br />
                    We will also offer a self assessment bot that allows people to assess their own mental health and determine if they may benefit from seeking professional help. The bot will provide personalized recommendations based on the user&apos;s responses, including information about local resources and how to access them.
                    <br />
                    <br />
                    In addition to the self assessment bot, our website will also offer support groups for people who are looking for a safe and supportive community to connect with others who understand what they&apos;re going through. These groups will be moderated by trained professionals and will provide a space for people to share their experiences, offer support to one another, and seek guidance from mental health professionals.
                    <br />
                    <br />
                    Overall, our vision is to create a website that is a trusted and reliable resource for anyone seeking information and support for mental health issues. We hope to empower people to take charge of their own mental health and find the support and resources they need to live their best lives.
                </p>
            </div>
            <h1 className="text-center text-[40px] font-bold mt-10">OUR TEAM</h1>
            <div className="grid lg:grid-cols-2 items-center lg:w-[70%] md:w-[50%] my-20 mx-auto">
                {/* <div className="border mx-5 p-5 flex flex-col items-center w-[350px] h-[430px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/sukhbir.jpg" alt="Sukhbir Singh" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Sukhbir Singh</h1>
                    <p className="font-bold">ML AI</p>
                    
                </div>
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px] h-[430px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/harjas.jpeg" alt="harjas" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Harjas Kaur</h1>
                    <p className="font-bold">Frontend developer</p>
                </div> */}
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px] h-[430px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/ripu1.png" alt="Ripudaman Singh" width={300} height={900} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Ripudaman Singh</h1>
                    <p className="font-bold">FrontEnd, ML Developer</p>
                </div>
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px] h-[430px] mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/taranjot.jpg" alt="Taranjot Singh" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Taranjot Singh</h1>
                    <p className="font-bold">BackEnd, Web 3.0 Developer</p>
                </div>
            </div>
            <Footer />
            <Chat />
            
            <VoiceAlanAi />
        </>
    )
}

export default About
