import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* <img src="/hero-banner.jpg" alt="hero-banner" className="banner" /> */}
        
        <div className="hero-para" 
        // style={{marginLeft:"20%"}}
        >
          <span className="hey"> STATE OF MIND </span> <br /> Your mental health is everything-prioritize it. Make the time like your life depends on it, because it does. Mel Robbins"
        </div>
        <div>
          <img src="./stress.jpg.png" alt="hero-banner" 
          // style={{marginLeft:"55%", paddingTop:"5%"
          // }} 
        width={500} 
        height = {500} 
        />
        </div>
      </div>
    </>
  );
};

export default Hero;
