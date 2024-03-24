import { FaTwitter, FaTelegram } from "react-icons/fa";
function Hero() {
  return (
    <section className=" pt-0  pb-[1rem] ">
      <div className="container-wrapper">
        <div className=" flex justify-between items-center flex-col sm:flex-row">
          <div className=" w-full ">
            <img src="images/hero3.png" alt="" className="h-[400px]" />
          </div>

          <div className=" max-w-4xl">
            <h1 className=" uppercase text-5xl text-[#ffb22e] font-groot-one font-bold text-center my-4">
           DogeWif Solana
            </h1>

            <p className="uppercase text-xl text-[#ffb22e] font-groot-one font-bold text-center">
            CONTRACT ADDRESS
            </p>
            <a
              href="https://solscan.io/token/4WV2aySGezXy6TkZpFHMpxcS8WLvs1reaEG8GkVLTVzu"
              target="_blank"
              className=" font-groot-two text-xs sm:text-xl text-center my-4 flex items-center justify-center bg-[#ffb22e] py-2 px-4 rounded-full "
            >
              4WV2aySGezXy6TkZpFHMpxcS8WLvs1reaEG8GkVLTVzu
            </a>

            <div className=" flex justify-center gap-4 items-center">
              <a
                href="https://www.dextools.io/app/en/solana/pair-explorer/CQkXghxSsndkQx4CoN5VhjbrtibRpoTYYUtEWyCj1YAq?t=1711267574247"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#d59055] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                DexTools
              </a>
              <a
                href="https://t.me/dogewifs"
                target="_blank"
                className="font-groot-one text-2xl uppercase text-black bg-[#d59055] border-2 border-[#000000] py-2 px-6 rounded-full"
              >
                Telegram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
