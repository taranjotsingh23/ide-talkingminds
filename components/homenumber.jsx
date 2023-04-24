import React, { useState, useCallback, useContext } from 'react';
import { useRouter } from 'next/router';
import Modal from 'react-modal'
import { AppContext } from '../context/AppContext';
import Web3 from 'web3';
import { ToastContainer, toast } from 'react-toastify';
import Image from "next/image";

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const HomeNumber = () => {

    const [value, setValue] = useState("");
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [dt, setDt] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);

    const { account, connectWallet, error } = useContext(AppContext);


    // const sendToast = () => {
    //   toast.info('🦄 Wow so easy!', {
    //     position: "top-center",
    //     autoClose: 5000,
    //     hideProgressBar: false,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true,
    //     progress: undefined,
    //     theme: "light",
    //     });
      
    // }

    const sendToast2 = () => {
      toast.success('🦄 Success, Please Check Your Email', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
        closeModal();
    }

    const payViaMetamask = async () => {
      const abc = "0x" + Number(Web3.utils.toWei("0.001", "ether")).toString(16);
      console.log(abc)
      await ethereum
      .request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: account,
            to: '0x23652313a54a063bCa8DcE470C5E31C6d27f78F2',
            value: abc,
            // gasPrice: '0x09184e72a000',
            // gas: '0x2710',
            // chainId: '80001'
          },
        ],
      })
      .then((txHash) => console.log(txHash))
      //.then(() => sendToast())
      .then(() => sendToast2())
      .then(() => sendRoomEmail())
      .catch((error) => console.error(error));
    }

    const payViaRazorpay = () => {
      console.log("ABC")
    }

    function openModal() {
      setIsOpen(true);
    }
  
    function closeModal() {
      setIsOpen(false);
    }

    const router=useRouter()

    const handleJoinRoom=useCallback(() => {
       router.push(`/room/${value}`)
    }, [router, value])

    // const handleCallPayment = () => {

    // }
    
    const sendRoomEmail = async() => {
      //async function welcomeEmail() {
    
        const img =
          "https://res.cloudinary.com/dwwcryioj/image/upload/v1680380063/logo-black.png";
        const length = 12;
        const chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
        var meetResult = '';
        for (var i = length; i > 0; --i) meetResult += chars[Math.floor(Math.random() * chars.length)];
        
        console.log("Sending");
        let finalData = {
          name,
          email,
          img,
          dt,
          meetResult
        };
        const response = await fetch("/api/welcome", {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(finalData),
        });
        console.log(response);

        // console.log(Date.now())

        // const duration = Date.now() + 5.5 * 60 * 60 * 1000;
        // const date = Date(Date.now()).slice(4,15);
        //   var milliseconds = Math.floor((duration % 1000) / 100),
        //     seconds = Math.floor((duration / 1000) % 60),
        //     minutes = Math.floor((duration / (1000 * 60)) % 60),
        //     hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
        
        //   hours = (hours < 10) ? "0" + hours : hours;
        //   minutes = (minutes < 10) ? "0" + minutes : minutes;
        //   seconds = (seconds < 10) ? "0" + seconds : seconds;
        
        //   console.log(hours + ": 00");

       
        // console.log(dt);
    }

    return (
    <>
    <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
    <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button onClick={closeModal} className='rightClose'><b>x</b></button>
        <h2>₹499</h2>
        <div className="flex justify-center mt-5">
          <button onClick={payViaRazorpay} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Pay via Razorpay</button>
        </div>
        {/* <h2 className='ethTitle'>0.005 ETH</h2> */}
        <h2 className='ethTitle'>0.001 ETH</h2>
        <div className="flex justify-center mt-5">
          {account ? (
            <button onClick={payViaMetamask} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Pay via Metamask</button>
          ) : (
            <button className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white" onClick={connectWallet}>Connect Metamask</button>
          )}
        </div>
      </Modal>
    <div className="about aboutCall">
      <div className='callForm text-center'>
        <h1 className="about-title text-[30px]">Schedule a One-on-One Call</h1>
        <form className='roomCodeForm'>
          <div className='flex justify-center items-center'>
            <div><label>Name: </label></div>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" placeholder="Enter Your Name" className="border rounded px-4 py-2 mt-5" required/>
          </div>
          <div className='flex justify-center items-center'>
            <div><label>Email: </label></div>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Enter Your Email ID" className="border rounded px-4 py-2 mt-5" required/>
          </div>
          <div className='flex justify-center items-center'>
            <div><label>Date & Time: </label></div>
            <input value={dt} onChange={(e) => setDt(e.target.value)} type="datetime-local" className="border rounded px-4 py-2 mt-5" required></input>
          </div>
          
          <div className="flex justify-center pt-5">
             <button type="button" onClick={openModal} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Submit</button>
          </div>

        </form>
      </div>
      {/* <div className='callJoin'>
        <h1 className="about-title text-[30px]">One on One Video Call</h1>
        <input value={value} onChange={(e) => setValue(e.target.value)} type="text" placeholder="Enter Room Code" className="border rounded px-4 py-2 mt-5"/>
        <div className="flex justify-center mt-5">
          <button onClick={handleJoinRoom} className="py-1 px-7 mb-3 text-white font-bold bg-[#1551b8] border rounded hover:text-[#1551b8] hover:bg-white">Join</button>
        </div>
      </div> */}
      
    </div>
    
  </>
  );
};

export default HomeNumber;