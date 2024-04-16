import serviceOne from "../img/serviceOne.jpg";
import mail from "../img/mail.jpg";
import plan from "../img/plan.jpg";
import React from 'react';
import { useState } from "react";


const ServiceGig = (props) => {
    let imag = props.image;
    let titel = props.title;
    let desc = props.desc;
    let id = props.id;
    const [card, setCard] = useState(0);

    const handelServiceInfo = (number) => {
        setCard(number);
        // alert(card);
    };


    return (
        <div className="mt-2 mb-2 mx-2">
            {id === 1 ? (
                // <Link to={`/service/${id}`} style={{ textDecoration: 'none' }}>
                <div>
                    <div >
                        <div className="w-[84.87px] h-fit  rounded-md flex flex-col  xl:w-[290px]  xl:mt-2  " style={{ backgroundImage: `url(${serviceOne})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            <div className="" onClick={() => { handelServiceInfo(1) }} >
                                <div className="w-full h-[98px] flex justify-center items-end xl:h-[373px] ">
                                    <p id="ServiceTitel" className="font-intan font-black uppercase text-[4px] text-white xl:text-[14px] xl:mb-2 mb-2 ">{titel}</p>
                                </div>
                                <div className={card === 1 ? 'block ' : 'hidden'}>
                                    <div className={'bg-white text-center pt-1 rounded-b-md pb-1 shadow-md px-1'}>
                                        <p id="Servicedesc" className="font-inria-sans text-[3.31px] text-black xl:text-[13px]  ">{desc}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : id === 2 ? (
                // <Link to={`/service/${id}`} style={{ textDecoration: 'none' }}>
                <div>
                    <div >
                        <div className="w-[84.87px] h-fit  rounded-md flex flex-col  xl:w-[290px]  xl:mt-2  " style={{ backgroundImage: `url(${mail})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            <div className="" onClick={() => { handelServiceInfo(2) }} >
                                <div className="w-full h-[98px] flex justify-center items-end xl:h-[373px] ">
                                    <p id="ServiceTitell" className="font-[intan] text-[4.33px] text-white xl:text-[14px] xl:mb-2 mb-2 ">{titel}</p>
                                </div>
                                <div className={card === 2 ? 'flex bg-white text-center pt-1 rounded-b-md pb-1 shadow-md px-1  ' : ' hidden '}>
                                    <p id="Servicedescc" className="font-[inria sans] text-[4px] text-black xl:text-[13px]  ">{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : id === 3 ? (
                // <Link to={`/service/${id}`} style={{ textDecoration: 'none' }}>
                <div>
                    <div >
                        <div className="w-[84.87px] h-fit  rounded-md flex flex-col  xl:w-[290px]  xl:mt-2  " style={{ backgroundImage: `url(${plan})`, backgroundSize: 'cover', backgroundPosition: 'center' }}  >
                            <div className="" onClick={() => { handelServiceInfo(3) }} >
                                <div className="w-full h-[98px] flex justify-center items-end xl:h-[373px] ">
                                    <p id="ServiceTitelll" className="font-[intan] text-[4.33px] text-white xl:text-[14px] xl:mb-2 mb-2 ">{titel}</p>
                                </div>
                                <div className={card === 3 ? 'bg-white text-center pt-1 rounded-b-md pb-1 shadow-md px-1  ' : ' hidden '}>
                                    <p id="Servicedesccc" className="font-[inria sans] text-[4px] text-black xl:text-[13px]  ">{desc}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            ) : null}
        </div>

    );
}

export default ServiceGig;