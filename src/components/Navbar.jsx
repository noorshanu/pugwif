import { FaTelegram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

function Navbar() {
  return (
    <nav className=" py-1 bg-[]  ">
      <div className="container-wrapper relative">
        <div className=" flex items-center justify-between gap-2">
          
          <div className=" flex items-center gap-1">
          <img src="/images/logo.png" className="max-w-[7rem] w-full " alt="" />
            <h2 className=" text-[#ffb22e] font-groot-one text-3xl font-bold">PugWif</h2>
          </div>

          <div className="flex items-center space-x-6">
            <a href="https://t.me/pugwif" target="_blank" className=" text-2xl text-[#ffb22e]">
              <FaTelegram />
            </a>
            <a href="https://twitter.com/Pug_wafi_" target="_blank" className=" text-2xl text-[#ffb22e]">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
