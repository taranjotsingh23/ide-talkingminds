import React,{useEffect} from 'react';
import { useRouter } from 'next/router';
  // import alanBtn from '@alan-ai/alan-sdk-web';

export const VoiceAlanAi = () => {
  const router = useRouter();
  useEffect(() => {
     const alanBtn = require("@alan-ai/alan-sdk-web");
     const updateScreen = (time) =>{
     alanBtn({
      key:"4d28e3729e4bc19df71dbb8d21187d112e956eca572e1d8b807a3e2338fdd0dc/stage",
      onCommand:({command}) => {
         if(command === "test"){
          alert("Command Run Successfully");
         }
         else if(command === "about"){
          router.push("/about-us");
         }
         else if(command === "home"){
          router.push("/");
         }
         else if(command === "self assessment tool"){
          router.push("/selfassessment2");
         }
         else if(command === "Education"){
          router.push("/education");
         }
         else if(command === "Vent It Out"){
          router.push("/vent-it-out");
         }
         
         else if(command === "consult"){
          router.push("/consult");
         }
         
      },
      bottom:"105px",
      right: "30px"
     });
    }
    requestAnimationFrame(updateScreen);
  },[]);
  return (
    <>
    </>
  );
}

export default VoiceAlanAi;