import About from "../About/About";
import Banner from "../Banner/Banner";
import Service from "../Service/Service";
import WorkTime from "../WorkTime/WorkTime";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <WorkTime></WorkTime>
        </div>
    );
};

export default Home;