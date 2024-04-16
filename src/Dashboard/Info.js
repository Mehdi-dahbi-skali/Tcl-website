import info from "../img/infoaboutuss.jpg";
import infoaboutus from "../img/infoaboutus.jpg";
import rev from "../img/rev.jpg";
import services from "../img/services.jpg";
import client from "../img/clients.jpg";
import world from "../img/world.jpg";


const Info = () => {
    return (
        <div id="Info" className=" flex justify-center mt-5 mb-5 ">
            <div className="w-fit h-fit flex justify-between   ">
                <a href="/#contact">
                    <div className="w-[62.55px] h-[127.67px]  text-center  bg-cover flex items-end justify-center mr-2 xl:w-[244px] xl:h-[485px] " style={{ backgroundImage: `url(${info})` }} >
                        <div className="w-full h-full  bg-[#012A5B] opacity-40  top-[-12px]  "></div>
                        <p  id="InfoContact" className="text-white font-[intan] text-[7.69px] mb-3 absolute xl:text-[30px] " > CONTACT US </p>
                    </div>
                </a>
                <div className="w-fit h-full   flex flex-col justify-between xl:ml-2  xl:mr-2 ">
                    <a href="#about">
                        <div className="w-[142.54px] h-[60.25px]  flex items-end bg-cover xl:mb-2 xl:w-[556px] xl:h-[235px] " style={{ backgroundImage: `url(${infoaboutus})` }}>
                            <div className="w-full h-full relative bg-[#012A5B] opacity-40  z-10"></div>
                            <p id="InfoAbout" className="text-white font-[intan] text-[7.69px] ml-2 z-20 absolute xl:text-[30px] xl:mb-2 xl:ml-3" >About us </p>
                        </div>
                    </a>
                    <div className="w-full h-fit  flex justify-between mt-2">
                        <div className="w-[67.68px] h-[60.25px] flex flex-col items-center justify-center bg-cover text-center xl:w-[264px] xl:h-[235px] " style={{ backgroundImage: `url(${rev})` }}>
                            <div className="w-full h-full relative bg-[#012A5B] opacity-40  z-10"></div>
                            <p className="text-white font-[intan] text-[20px]  z-20 absolute  xl:text-[100px]" >90%</p>
                            <p id="InfoSatisfaction" className="text-white font-[intan] text-[3.61px]  z-20 absolute mt-7 xl:text-[16px] xl:mt-[7.75rem] " >satisfied customers</p>
                        </div>
                        <a href="#services">
                            <div className="w-[67.68px] h-[60.25px]  flex items-end justify-center bg-cover text-center xl:w-[264px] xl:h-[235px] " style={{ backgroundImage: `url(${services})` }}>
                                <div className="w-full h-full relative bg-[#012A5B] opacity-40  z-10"></div>
                                <p className="text-white font-[intan] text-[7.69px]  z-20 absolute mb-3 xl:text-[30px] xl:mb-5 " >services</p>
                            </div>
                        </a>
                    </div>
                </div>
                <div className="w-[62.55px] h-[127.67px]  flex flex-col justify-between  ml-2 xl:w-[244px] xl:h-[485px]  ">
                    <div className="w-full mb-2 h-[235px] flex flex-col items-center justify-center bg-cover text-center  xl:h-[235px] " style={{ backgroundImage: `url(${client})` }}>
                        <div className="w-full h-full relative bg-[#012A5B] opacity-40  z-10"></div>
                        <p className="text-white font-[intan] text-[20px]  z-20 absolute  xl:text-[75px]" >+120</p>
                        <p className="text-white font-[intan] text-[4.61px]  z-20 absolute mt-7 xl:text-[25px] xl:mt-[7.75rem] " >clients</p>
                    </div>
                    
                    <div className="w-full h-[235px] flex flex-col items-center justify-center bg-cover text-center xl:h-[235px] " style={{ backgroundImage: `url(${world})` }}>
                        <div className="w-full h-full relative bg-[#012A5B] opacity-40  z-10"></div>
                        <p id="Infocovred" className="text-white font-[intan] text-[4.61px]  z-20 absolute mt-7 xl:text-[18px] xl:mt-[7.75rem] " >covered territory</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Info;