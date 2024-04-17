import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import whatsapp from "./../assets/whatsapp.png";
import shm from "./../assets/ShmStore-logo-feeter.svg";
import { MdEmail } from "react-icons/md";
import facebook from "./../assets/facebook.png";
import linkedin from "./../assets/linkedin.png";
import twitter from "./../assets/twitter.png";
import youtube from "./../assets/youtube.png";
import { social_links } from "../style";

const Footer = () => {
  return (
    <div className="relative">
      <div className="flex flex-col items-center px-3 py-10 md:p-[6rem] bg-orange-500 text-white text-2xl lg:text-5xl">
        <p className="text-center">Get Your Products Delivered In</p>
        <p className="font-bold mt-5 mb-10 text-center">
          Your Preffered City Or The Next Port Of Call
        </p>
        <button className="text-2xl lg:text-3xl bg-white text-orange-500 rounded-full py-1 px-5 lg:py-3 lg:px-10 flex items-center gap-3 lg:gap-10">
          Contact Us
          <img src={whatsapp} alt="" className="w-[4rem]" />
        </button>
      </div>
      <div className=" bg-blue-950 ">
        <div className="pt-[35rem] -0 ml-[2rem] pb-[2rem] lg:ml-[30rem] p-2 lg:p-[5rem] flex flex-col justify-center lg:flex-row gap-[3rem]">
          <div className="text-white">
            <h1 className="text-4xl">Usefull links</h1>
            <hr className="w-[5rem] ml-[1rem] my-5 text-gray-600" />
            <ul className="text-3xl flex flex-col gap-5">
              <li>Blog</li>
              <li>SHM Store</li>
              <li>Register</li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-4xl">Company</h1>
            <hr className="w-[5rem] ml-[1rem] my-5 text-gray-600" />
            <ul className="text-3xl flex flex-col gap-5">
              <li>SHM Group</li>
              <li>SHM Fire Safety</li>
              <li>SHM Shipcare</li>
              <li>SHM Products</li>
            </ul>
          </div>
          <div className="text-white">
            <h1 className="text-4xl">Company</h1>
            <hr className="w-[5rem] ml-[1rem] my-5 text-gray-600" />
            <ul className="text-3xl flex flex-col gap-10">
              <li className="flex gap-10 items-center">
                <FaPhoneAlt className="text-orange-500 text-2xl  lg:text-4xl" />
                <span className="font-bold text-2xl  lg:text-4xl">
                  +91-222-378-6400
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <MdEmail className="text-orange-500 text-2xl  lg:text-4xl" />
                <span className="text-2xl  lg:text-4xl font-semibold">
                  info@theshmstore.com
                </span>
              </li>
              <li className="flex gap-10 items-center">
                <FaMapMarkerAlt className="text-orange-500 text-2xl  lg:text-4xl" />
                <span className="text-2xl  lg:text-4xl w-[43rem] ">
                  Head office BPT, Plot no. 51B, magazine street, darukhana,
                  mazagaon, Mumbai, 400010
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute p-[3rem] top-[20rem] left-2 lg:left-[5rem] bg-white w-[25rem] h-[32rem] rounded-[1.5rem] rounded-tr-[7rem]">
        <img src={shm} alt="" />
        <div className="mt-[5rem] mb-[3rem]">
          <div className="bg-gray-500 h-[0.2rem]"></div>
          {/* <div className="bg-gray-500 h-[0.2rem]"></div> */}
        </div>

        <p className="text-slate-600 text-xl text-center">
          We give your complete control of your shipments. Delivered on time
          with no hassle.
        </p>

        <div className="flex justify-center">
          <div className="flex gap-5 mt-[3rem] ">
            <img src={facebook} alt="" className={social_links} />
            <img src={linkedin} alt="" className={social_links} />
            <img src={twitter} alt="" className={social_links} />
            <img src={youtube} alt="" className={social_links} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
