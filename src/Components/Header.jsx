import { RiMenu5Line } from "react-icons/ri";
import banner from "./../assets/banner-img.jpg";
import logo from "./../assets/logo.png";
import bridge from "./../assets/bridge.mp4";

import { button, button2, button3 } from "../style";
import { TfiEmail } from "react-icons/tfi";
import { VscSearch } from "react-icons/vsc";
import { RxShare1, RxSpeakerLoud } from "react-icons/rx";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const Header = () => {
  return (
    <div className="w-[inherit] aspect-square  max-h-[1080px] relative">
      <Image />
      <Logo />
      <Info />
    </div>
  );
};

const Logo = () => {
  return (
    <div className="absolute w-[inherit] h-[inherit] flex justify-center p-5">
      <img
        src={logo}
        alt=""
        className=" w-full sm:w-[574px] sm:h-[90px] object-cover mt-[5rem] sm:mt-[10rem] lg:mt-[2rem]"
      />
    </div>
  );
};

const Info = () => {
  return (
    <div className="w-[inherit] h-[inherit] absolute flex flex-col justify-between">
      <TopInfo />
      <BottomInfo />
      {/* <RightButtons /> */}
    </div>
  );
};

const RightButtons = () => {
  return (
    <div className="w-[inherit] h-[inherit] absolute translate-x-[58.4rem] -translate-y-[50rem] flex items-center gap-5 -rotate-90 ">
      <button className={button3}>Enroll Now</button>
      <button className={`${button3} bg-pink-600`}>Request a Callback</button>
    </div>
  );
};

const TopInfo = () => {
  const navigate = useNavigate();
  return (
    <div className="sm:p-[2rem] flex justify-center sm:block ">
      <div className=" flex gap-3 md:justify-between   mt-[1rem] ">
        <div className="flex gap-3">
          <RiMenu5Line
            className={button}
            onClick={() => {
              navigate("/about");
            }}
          />
          <TfiEmail className={button} />
        </div>
        <div className="flex gap-3">
          <VscSearch className={button} />
          <RxShare1 className={button} />
        </div>
      </div>
    </div>
  );
};

const BottomInfo = () => {
  return (
    <div className="w-[inherit] h-[inherit] relative ">
      <div className="absolute top-[4.5rem] ml-[5rem] lg:top-[48rem] lg:ml-[30rem] md:top-[23rem] md:ml-[12rem]  flex flex-wrap lg:flex-nowrap sm:flex-col md:flex-row justify-between">
        <div className="text-white font-bold text-sm sm:text-2xl flex flex-col sm:flex-row items-center gap-1 sm:gap-[1rem] p-[2rem] ">
          <h1 className="text-lg sm:text-2xl">ANNOUNCEMENTS</h1>
          <RxSpeakerLoud className="text-yellow-500 text-2xl sm:text-5xl" />
          <div>
            <p>Addmission are open</p>
            <p>for the academic year 2021-2022 </p>
          </div>
        </div>
        <div className="flex gap-[2rem]">
          <div className="flex gap-3 mt-[4rem]">
            <MdKeyboardArrowLeft className={button2} />
            <MdKeyboardArrowRight className={button2} />
          </div>
          <div className="w-[300px] sm:w-[600px] text-blue-400 text-sm sm:text-2xl flex flex-col bg-white p-[1rem] rounded-tl-[1rem]">
            <em className=" font-bold">Empowering students</em>
            <em className="font-semibold">to create solutions</em>
            <em className=" font-bold">for tomorrow's challenge</em>
          </div>
        </div>
      </div>
    </div>
  );
};

const Image = () => {
  return (
    <div className="w-[inherit] aspect-square  max-h-[1080px] absolute top-0 left-0 rounded-bl-[5rem] sm:rounded-bl-[14rem] overflow-hidden">
      <div className="w-[inherit] aspect-square  max-h-[1080px] relative">
        <video
          src={bridge}
          autoPlay
          muted
          className="absolute top-0 left-0 w-[inherit] aspect-square  max-h-[1080px] object-cover"
        ></video>
        {/* <img
          src={banner}
          alt=""
          className="absolute w-[inherit] aspect-square  max-h-[1080px] object-cover "
        /> */}
        <div className=" absolute top-0 left-0  w-[inherit] aspect-square  max-h-[1080px]  bg-gradient-to-b from-white via-transparent  to-black from-5% via-50%  to-100%"></div>
      </div>
    </div>
  );
};

export default Header;
