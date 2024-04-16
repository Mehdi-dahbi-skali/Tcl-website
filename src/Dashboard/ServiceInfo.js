import { useParams } from "react-router-dom";
import Nav from "./Nav";
import Home from "./Home";
import { useState } from "react";
import Services from "./Services";
import serviceOne from "../img/serviceOne.jpg";
import mail from "../img/mail.jpg";
import plan from "../img/plan.jpg";
import Clients from "./Clients";
import Footer from "./Footer";

const ServiceInfo = () => {
    const { id } = useParams();
    const [servecies, setservecies] = useState([
        { image: 'serviceOne', title: 'Road transport Resilience', desc: 'Our road transport services redefine reliability on the ground With a fleet of specialized vehicles and a commitment to timely deliveries, we ensure that your cargo travels seamlessly across borders. From local routes to international highways, we pave the way for your goods to reach their destination on schedule.', id: 1 },
        { image: 'serviceOne', title: 'Maritime transport Mastery', desc: 'Harness the power of the sea with our comprehensive maritime transport solutions. Whether its Full Container Load (FCL) or Less than Container Load (LCL), we navigate the complexities of international waters to deliver your shipments with utmost reliability. Your success is our voyage, and we make every nautical mile count', id: 2 },
        { image: 'serviceOne', title: 'Air transport Excellence', desc: 'Elevate your cargo to new heights with our unrivaled air transport services From express shipments to specialized handling, we ensure that your goods reach their destination swiftly and securely. Our strategic partnerships with leading airlines guarantee a global reach that aligns with your business aspirations.', id: 3 }
    ])
    const serviceId = parseInt(id);
    const service = servecies.find(serv => serv.id === serviceId);
    // alert(service.id);
    // console.log(servecies);

    return (
        <div className="w-full">
            <Nav />
            <div className="mb-2">
                {service.id === 1 ? (
                    <div>
                        <div >
                            <div className="w-full h-[281px] bg-slate-500 mb-2 " style={{ backgroundImage: `url(${serviceOne})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            </div>
                            <div className="mb-2 ml-1">
                                <h1 className="font-[intan] text-[17px] text-[#012A5B]">{service.title}</h1>
                                <p className="font-[inria sans] text-[15px] text-[#012A5B]">{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ) : service.id === 2 ? (
                    <div>
                        <div >
                            <div className="w-full h-[281px] bg-slate-500 mb-2 " style={{ backgroundImage: `url(${mail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            </div>
                            <div className="mb-2 ml-1">
                                <h1 className="font-[intan] text-[17px] text-[#012A5B]">{service.title}</h1>
                                <p className="font-[inria sans] text-[15px] text-[#012A5B]">{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ) : service.id === 3 ? (
                    <div>
                        <div >
                            <div className="w-full h-[281px] bg-slate-500 mb-2 " style={{ backgroundImage: `url(${plan})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            </div>
                            <div className="mb-2 ml-1">
                                <h1 className="font-[intan] text-[17px] text-[#012A5B]">{service.title}</h1>
                                <p className="font-[inria sans] text-[15px] text-[#012A5B]">{service.desc}</p>
                            </div>
                        </div>
                    </div>
                ) : null}
            </div>
            <Clients/>
            <Footer/>
        </div>
    );
}

export default ServiceInfo;
