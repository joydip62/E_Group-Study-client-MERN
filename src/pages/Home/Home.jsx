import AboutUs from "./AboutUs";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
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
                <ContactUs/>
        </div>
      </div>
    );
};

export default Home;