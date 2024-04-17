import { useState } from "react";
import map from "./../assets/F97E3234.png";
import Details from "./Details";

const Network = () => {
  return (
    <div className="p-5 mt-10 md:mt-0 md:p-[6rem] text-center flex flex-col items-center">
      <h1 className="text-orange-600 text-2xl font-bold">NETWORK</h1>
      <div className="text-3xl sm:text-5xl text-slate-900 my-5">
        <span>SHM Store</span>
        <span className="font-bold"> Capability</span>
      </div>
      <p className="w-full mt-1 sm:mt-3 text-xl sm:text-2xl sm:leading-[3rem] text-slate-600">
        Our extensive network of delivery centres across multiple location
        ensure fast and effective service.
      </p>

      <Map />
    </div>
  );
};

const Map = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <div className="w-[15rem] h-[25rem] sm:w-[40rem] sm:h-[45rem] lg:w-[60rem] lg:h-[73rem] relative">
      <img
        src={map}
        alt=""
        className="absolute w-[60rem] rounded-[1.8rem] mt-[6rem]"
      />
      <button
        onClick={() => {
          setShowDetails(!showDetails);
        }}
        className="absolute top-[450px] left-[200px]  w-4 h-4 bg-blue-500 rounded-full border-2 border-white"
      ></button>
      {showDetails ? (
        <div className="absolute top-[500px] left-[250px]">
          <Details />
        </div>
      ) : null}
    </div>
  );
};

export default Network;
