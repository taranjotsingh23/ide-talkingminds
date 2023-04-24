import Image from "next/image";

const Hero = () => {
  return (
    <>
      <div className="hero">
        {/* <img src="/hero-banner.jpg" alt="hero-banner" className="banner" /> */}
        
        <div className="hero-para" 
        // style={{marginLeft:"20%"}}
        >
          <span className="hey"> HEY! </span> <br /> You, yourself, as much as
          anybody in the entire universe, deserve your love and affection.
        </div>
        <div>
          <img src="/mentalhealth.jpeg" alt="hero-banner" 
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
