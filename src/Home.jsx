import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Insight from "./Components/Insight";
import Network from "./Components/Network";

const Home = () => {
  return (
    <div>
      <div className="w-full max-w-[1920px] mx-auto">
        <Header />
        <Insight />
        <Network />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
