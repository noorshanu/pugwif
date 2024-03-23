import React from "react";
import { FaTwitter, FaTelegram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" w-full  relative mb-[2rem]">
    
      <div className="container-wrapper mt-8 ">
        <div className="flex justify-center flex-col sm:flex-row">
          <div className="mt-8 flex items-center justify-center gap-2">
          <p className="font-groot-one ">
                Copyright 2024 PugWif. All Rights Reserved.
              </p>

          </div>

    
        </div>
      </div>
    </footer>
  );
};

export default Footer;
