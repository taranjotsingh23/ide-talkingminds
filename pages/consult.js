import Footer from "../components/footer";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Link from "next/link";
import Meta from "../components/meta";
import HomeNumber from "../components/homenumber";
import Image from "next/image";
import Chat from '../components/chat'
import VoiceAlanAi from "../components/voiceAlanAi";
const Consult = () => {

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

            <h1 className="text-center text-[40px] font-bold mt-10">OUR CONSULTANTS</h1>
            <div className="grid lg:grid-cols-2 items-center lg:w-[70%] md:w-[50%] my-20 mx-auto">
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px]  h-[680px]  mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/photo1.jpg" alt="shailaja" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Dr. Shailaja Pokhriyal (PhD)</h1>
                    <p className="mt-2">M.Phil- Medical & Social Psychology, PhD - Psychology</p>
                    <p className="mt-2">Clinical Psychologist</p>
                    <p className="mt-2">14 Years Experience Overall  (13 years as specialist)</p>
                    <Link href="/consultSection"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Consult</button></Link>
                </div>
        
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px]  h-[680px]  mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/photo2.jpeg" alt="shailaja" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Ms. Ashita Mahendru</h1>
                    <p className="mt-2">M.Phil - Clinical Psychology, MA - Psychology, BA - Psychology</p>
                    <p className="mt-2">Clinical Psychologist, Counselling Psychologist, Psychologist</p>
                    <p className="mt-2">11 Years Experience Overall  (10 years as specialist)</p>
                    <Link href="/consultSection"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Consult</button></Link>
                </div>
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px]  h-[680px]  mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/photo3.jpg" alt="shailaja" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Ms. Neelima Dhawan</h1>
                    <p className="mt-2">Professional Diploma in Clinical Psychology, MA - Clinical Psychology</p>
                    <p className="mt-2">Clinical Psychologist, Psychologist</p>
                    <p className="mt-2">6 Years Experience Overall  (5 years as specialist)</p>
                    <Link href="/consultSection"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Consult</button></Link>
                </div>
                <div className="border mx-5 p-5 flex flex-col items-center w-[350px]  h-[680px]  mb-10 bg-[#f1f5fb] shadow-xl text-[#1551b8] rounded-xl">
                    <img src="/photo4.jpg" alt="shailaja" width={300} height={300} className='rounded-2xl' />
                    <h1 className="text-[25px] mt-5">Dr. Sarika Boora (PhD)</h1>
                    <p className="mt-2">PhD - Psychology, PGD in Rehabilitation Psychology</p>
                    <p className="mt-2">Counselling Psychologist, Clinical Psychologist</p>
                    <p className="mt-2">15 Years Experience Overall  (12 years as specialist</p>
                    <Link href="/consultSection"><button className="bg-green-500 px-10 py-3 mt-5 font-bold rounded-lg text-white hover:bg-green-800">Consult</button></Link>
                </div>
            </div>        



            <Footer />
            <Chat />
            <VoiceAlanAi />
        </>
    )
}

export default Consult;
