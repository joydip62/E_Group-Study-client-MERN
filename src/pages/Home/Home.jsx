import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";
import OurTeam from "./OurTeam";

const Home = () => {
    return (
      <div>
        <div>
          <Banner />
          <AboutUs />
          <Feature />
          <FAQ />
          <OurTeam />
        </div>
      </div>
    );
};

export default Home;