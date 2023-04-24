import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const router = useRouter();
  return (
    <>
      <div className="footer">
        <img
          src="/logo-black.jpg"
          alt="logo"
          width={200}
          height={200}
          onClick={() => router.push("/")}
        />
        <div className="footlink">
          <div className="footer-links">
            <Link href="/education" className="foot-links">
              EDUCATION
            </Link>
            <Link href="/selfassessment2" className="foot-links">
              Self Assement Tool
            </Link>
            <Link href="/vent-it-out" className="foot-links">
              VENT IT OUT
            </Link>
          </div>
          <div className="footer-links">
            <Link href="/about-us" className="foot-links">
              ABOUT
            </Link>
            <Link href="#" className="foot-links">
              PRIVACY POLICY
            </Link>
            <Link href="#" className="foot-links">
              NEED TO TALK?
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
