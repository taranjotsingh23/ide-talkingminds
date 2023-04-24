import Link from "next/link"
import { useContext, useState, useEffect } from "react";
import { AppContext } from "../context/AppContext";
import { ethers } from "ethers";
import Image from "next/image";
let Web3 = require('web3');
// import mintAndSend from "../utils/mintAndSend";

const Meta = ()=>{
  const { account, connectWallet, error } = useContext(AppContext);
  console.log(error);
    return (
    <div className="about">

      {account ? (
          <div className="account-box">
            <p className="shadow-border">{account}</p>
          </div>
        ) : (
          <div>
            <h1 className="about-title text-[40px]">Connect To MetaMask</h1>
            <div className="flex justify-center mt-5">
              <button className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white" onClick={connectWallet}>MetaMask</button>
            </div>
          </div>
          
        )}
    </div>
    )
}
export default Meta