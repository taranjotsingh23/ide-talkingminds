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
            <div className="my-20">
                <h3 className="text-center mb-10 text-[40px] font-bold">Counselling Therapy Sessions With Licensed & Verified Experts</h3>
                <p className="text-center w-[80%] mx-auto">
                    Highly qualified team of some of the best names in psychology who deliver improved well-being to you. Carefully vetted through a rigorous selection process. Trained and experienced in all psychotherapy techniques.
                </p>
                <p className="text-center w-[80%] mx-auto my-5">
                At our mental health consultancy, we offer counseling therapy sessions with licensed and verified experts who are committed to providing a safe, confidential and non-judgmental space for clients to discuss their mental health concerns.
                </p>
                <HomeNumber />
                <Meta />

            </div>
            <Footer />
            <Chat />
            <VoiceAlanAi />
        </>
    )
}

export default Consult;
