import React from "react";
import RoadmapCards from "../components/RoadmapCards";

const Intro = () => {
  return (
    <>
      <div className=" container-wrapper  px-4 pb-[3rem] ">
   
     
    

        <div className="  px-4  py-2 flex justify-center flex-col  items-center gap-6 sm:gap-2 mt-4 ">
        
          <div className=" max-w-6xl">
          <h2 className="font-groot-one text-2xl my-2 text-[#000000] text-center font-bold relative z-30 -mt-4">
          Hey there, fellow dog lovers and crypto enthusiasts! 🐶🌈⛑️ DogeWIF – the coolest dog on Solana with a rainbow hat, is all about memes, speed, and having a blast in the crypto world! Get ready for a wild ride with the cutest coins in town!
        </h2>
          
           <div className=" grid grid-cols-1 sm:grid-cols-2 items-center gap-4 mt-12">

            <div className="bg-[#ffb22e] flex justify-center items-center p-4 text-center rounded-3xl h-[120px]">
              <h2 className="font-groot-one text-3xl font-bold ">0% Sell Tax</h2>
            </div>

            <div className="bg-[#ffb22e] flex justify-center items-center p-4 text-center rounded-3xl h-[120px] ">
              <h2 className="font-groot-one text-3xl font-bold ">Mint Revoked</h2>
            </div>

            <div className="bg-[#ffb22e] flex justify-center items-center p-4 text-center rounded-3xl h-[120px] ">
              <h2 className="font-groot-one text-3xl font-bold ">0% Buy Tax</h2>
            </div>

            <div className="bg-[#ffb22e] flex justify-center items-center p-4 text-center rounded-3xl h-[120px] ">
              <h2 className="font-groot-one text-3xl font-bold ">A Whole Lotta
Supply
</h2>
            </div>



           </div>

            
          </div>
        </div>
      </div>
    </>
  );
};

export default Intro;
