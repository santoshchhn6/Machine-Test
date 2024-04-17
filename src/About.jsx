import { Link } from "react-router-dom";
import banner from "././assets/banner-img.jpg";

const About = () => {
  return (
    <div>
      <div className="w-full max-w-[1920px] mx-auto">
        <div className="h-[1080px] flex flex-col md:flex-row">
          <LeftPanel />
          <RightPanel />
        </div>
      </div>
    </div>
  );
};

const LeftPanel = () => {
  return (
    <div className="bg-black/80 h-[inherit] flex-1 ">
      <Link to="/" className="mt-[5rem] ml-[5rem] text-white text-2xl">
        X close
      </Link>
      <div className=" w-[100%] mt-[6rem] flex justify-center items-center">
        <ul className="text-white text-4xl font-serif leading-[5rem]">
          <li>
            <span className="text-red-500">+</span> <span>Weddings</span>
          </li>
          <li>
            <span className="text-red-500">+</span>{" "}
            <span> Corporate Events</span>
          </li>
          <li>
            <span className="text-red-500">+</span> <span>Activites</span>
          </li>
          <li>
            <span className="text-red-500">+</span> <span>Accommodations</span>
          </li>
          <li>
            <span className="text-red-500">+</span> <span>Occasions</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

const RightPanel = () => {
  return (
    <div className="flex-1 h-[inherit]  relative font-serif">
      <div className="absolute w-full h-[inherit]">
        <img
          src={banner}
          alt=""
          className="absolute w-full h-[inherit] object-cover"
        />
        <div className="absolute w-full h-[inherit] bg-black/50"></div>
      </div>

      <div className="absolute w-full h-[inherit] flex text-white p-[5rem]">
        <div>
          <ul className="text-3xl leading-[5rem] ">
            <li>Home</li>
            <li>About</li>
            <li>Gallery</li>
            <li>Facilities</li>
            <li>Contact</li>
            <li>Getting Here</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="text-3xl  ">
          <p>145/3, Ashirwad Lawns, Aurangabad Highway,</p>
          <p>opposite Manjula Palace, Nandur, Nashik-422003</p>
          <p className="my-[5rem]">GET DIRECTIONS</p>
          <p>+91 9823786101</p>
          <p>info@ashirwadlawns.com</p>

          <p className="">Follow Us on</p>
        </div>
      </div>
    </div>
  );
};

export default About;
