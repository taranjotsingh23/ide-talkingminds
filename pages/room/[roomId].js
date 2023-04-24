import React from 'react';
import { useRouter } from 'next/router'
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt';
import Link from 'next/link';

const Room= () => {
    const router = useRouter();
    const {roomId} = router.query?router.query:1;
   

    const myMeeting=async (element) => {
        const appID= 2055839774;
        const serverSecret="4699247e83ac1ba5f1784f30692c85e6";
        const kitToken=ZegoUIKitPrebuilt.generateKitTokenForTest(appID, serverSecret, roomId, Date.now().toString(), "Enter Your Name Here");

        const zc=ZegoUIKitPrebuilt.create(kitToken);
        zc.joinRoom({
            container: element,
            sharedLinks: [
                {
                    name: 'Copy Link',
                    url: `https://talkingminds-meeting.vercel.app/room/${roomId}`
                }
            ],
            scenario: {
                mode: ZegoUIKitPrebuilt.OneONoneCall,
            },
        });
    };

    return (
    <div>
        <div className="myCallContainer" ref={myMeeting} style={{ width: '100vw', height: '100vh' }}/>
    </div>
    );
};

export default Room;