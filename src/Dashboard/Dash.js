import AboutUs from "./AboutUs";
import Clients from "./Clients";
import Contact from "./Contact";
import Covred from "./Covred";
import Footer from "./Footer";
import Home from "./Home";
import Info from "./Info";
import Services from "./Services";
import Video from "./Video";

const Dash = () => {
    return ( 
        <div className="dashboard w-full">
            <Home/>
            <Info/>
            <AboutUs/>
            <Services/>
            <Covred/>
            <Video/>
            <Contact/>
            <Clients/>
            <Footer/>
        </div>
     );
}
 
export default Dash;