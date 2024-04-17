import insight from "./../assets/Insights.jpg";

const Insight = () => {
  return (
    <div className="p-5 mt-10 md:mt-0 md:p-[6rem] text-center flex flex-col items-center">
      <h1 className="text-orange-600 text-2xl font-bold">INSIGHTS</h1>
      <div className="text-3xl sm:text-5xl text-slate-900 my-5">
        <span>SHM Store</span>
        <span className="font-bold"> Marketplace Insights</span>
      </div>
      <p className="w-full mt-1 sm:mt-3 text-xl sm:text-2xl sm:leading-[3rem] text-slate-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>

      <img
        src={insight}
        alt=""
        className="w-[100rem] rounded-[1.8rem] mt-3 sm:mt-[6rem]"
      />
    </div>
  );
};

export default Insight;
