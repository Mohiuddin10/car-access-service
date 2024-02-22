import About from "../About/About";
import Banner from "../Banner/Banner";
import Products from "../Products/Products";
import Service from "../Service/Service";
import Team from "../Team/Team";
import WorkTime from "../WorkTime/WorkTime";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <About></About>
            <Service></Service>
            <WorkTime></WorkTime>
            <Products></Products>
            <Team></Team>
        </div>
    );
};

export default Home;