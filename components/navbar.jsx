import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import Image from "next/image";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);

  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNavbarColor);
    setLoggedIn(localStorage.getItem("loggedIn"));
  }, []);

  const router = useRouter();

  return (
    <>
      {console.log(loggedIn)}
      <div className={`${colorChange ? "navbar2" : "navbar"}`}>
        <img
          src="/logo.jpg"
          alt="logo"
          width={100}
          height={100}
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />
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
            <Link href="/profile" style={{marginRight:
                        "10px"}}>
              Profile
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
    </>
  );
};

export default Navbar;
