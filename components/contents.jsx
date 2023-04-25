import Link from "next/link";
import Image from "next/image";

const Content = () => {
  return (
    <>
      <div className="content">
        <div className="content-box mood">
          <img src="./mood1.jpg.png" alt="mood" width={500} height={500} />
          <div>
            <h1 className="text-[30px] italic">Self Assessment Tool</h1>
            <p>
              An AI driven bot that uses Cognitive Behavioral Therapy (CBT)
              technique to help users access their mental health and identify
              areas that may need attention. It “makes you feel heard”.
              It&apos;s self-help tools help you reframe your issues and see
              them in a different light.
            </p>
            <Link href="/selfassessment2" className="hover:underline">
              Try Now!
            </Link>
          </div>
        </div>
        <div className="content-box mental-education">
          <img
            src="./mental-education1.jpg.png"
            alt="mental-education"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-[30px] italic">Education</h1>
            <p>
              Helps you to understand and get a deeper in-sight on various
              Mental-health topics like Anxiety, Depression, Addiction,
              Personality Disorder, etc in a unique way through story-telling.
            </p>
            <Link href="/education" className="hover:underline">
              Learn More
            </Link>
          </div>
        </div>
        <div className="content-box vent-out">
          <img src="./vent-out.jpg.png" alt="vent-out" width={500} height={500} />
          <div>
            <h1 className="text-[30px] italic">Vent It Out!</h1>
            <p>
              It is a safe and supportive space for people to share their
              thoughts, feelings, and experiences related to mental health.
              Whether you&apos;re looking for a place to vent your frustrations,
              seek support from others, or simply connect with others who
              understand what you&apos;re going through, you are welcome here.
            </p>
            <Link href="/vent-it-out" className="mt-4 hover:underline">
              Join Now!
            </Link>
          </div>
        </div>
        <div className="content-box mental-education p-10">
          <img
            src="/mental-consult.jpg"
            alt="mental-consult"
            width={500}
            height={500}
          />
          <div>
            <h1 className="text-[30px] italic">Consult</h1>
            <p>
            At our mental health consultancy, we offer counseling therapy sessions with licensed and verified experts who are committed to providing a safe, confidential and non-judgmental space for clients to discuss their mental health concerns.
            </p>
            <Link href="/consult" className="hover:underline">
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
