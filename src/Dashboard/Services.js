// Services.js
import { useState } from "react";
import ServiceGig from "./ServiceGig";

const Services = () => {
    const [servecies, setservecies] = useState([
        { image: 'serviceOne', title: 'Road transport Resilience', desc: 'Our road transport services redefine reliability on the ground With a fleet of specialized vehicles and a commitment to timely deliveries, we ensure that your cargo travels seamlessly across borders. From local routes to international highways, we pave the way for your goods to reach their destination on schedule.', id: 1 },
        { image: 'serviceOne', title: 'Maritime transport Mastery', desc: 'Harness the power of the sea with our comprehensive maritime transport solutions. Whether its Full Container Load (FCL) or Less than Container Load (LCL), we navigate the complexities of international waters to deliver your shipments with utmost reliability. Your success is our voyage, and we make every nautical mile count', id: 2 },
        { image: 'serviceOne', title: 'Air transport Excellence', desc: 'Elevate your cargo to new heights with our unrivaled air transport services From express shipments to specialized handling, we ensure that your goods reach their destination swiftly and securely. Our strategic partnerships with leading airlines guarantee a global reach that aligns with your business aspirations.', id: 3 }
      ])
    return (
        <div id="services" className="services w-[100%] m-auto flex justify-center  xl:w-[80%] xl:justify-center xl:mt-[3rem] ">
            <div className="">
                <h1 className="font-intan font-black uppercase text-[15.41px] text-[#012A5B]  xl:text-[60.48px]  xl:mb-[-5px] ">Services</h1>
                <h1 className="font-inter font-semibold text-[6.37px] text-[#012A5B] xl:text-[15px] ">OUR SERVICES FOR CLIENTS</h1>
                <div className="flex justify-center w-full">
                    {servecies.map(serv =>(
                        <ServiceGig  id={serv.id} image = {serv.image} title = {serv.title} desc = {serv.desc} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Services;
