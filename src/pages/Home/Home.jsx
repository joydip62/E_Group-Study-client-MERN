import AboutUs from "./AboutUs";
import Banner from "./Banner";
import FAQ from "./FAQ";
import Feature from "./Feature";

const Home = () => {
    return (
        <div>
            <div>
                <Banner />
                <AboutUs/>
                <Feature />
                <FAQ />
            </div>
        </div>
    );
};

export default Home;