import logo from '../img/logo.png';


const Footer = () => {
    return (
        <div className="footer h-[83px]  mb-2 flex items-center ">
            <div className=" w-[80%] m-auto ">
                <div className=" flex items-center justify-between ">
                    <img className="h-[71.59px] w-[71.59px]  xl:w-[135px] xl:h-[135px] " src={logo} alt="Logo" />
                    <div className=" flex ">
                    <div className=" flex flex-col mr-2">
                        <p id='FooterContact' className='text-[5px] font-inter font-bold mb-2  xl:text-[10px] text-[#012A5B] ' >CONTACT US</p>
                        <div className=" flex items-center xl:mr-[40px] ">
                            <img className="h-[8px] w-[8px]" src={logo} alt="Logo" />
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >+91 9988776654</p>
                        </div>
                        <div className=" flex items-center  ">
                            <img className="h-[8px] w-[8px]" src={logo} alt="Logo" />
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >dikshant@xyzm.com</p>
                        </div>
                        <div className=" flex items-center  ">
                            <img className="h-[8px] w-[8px]" src={logo} alt="Logo" />
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >West Virginia, USA</p>
                        </div>
                        <div className=" flex items-center  ">
                            <img className="h-[8px] w-[8px]" src={logo} alt="Logo" />
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >Sunday to Friday</p>
                        </div>
                    </div>
                    <div className=" flex flex-col xl:mr-[3rem] ">
                        <p id='FooterServices' className='text-[5px] font-inter font-bold mb-2 xl:text-[10px] text-[#012A5B] ' >OUR SERVICES</p>
                        <div className=" flex items-center  ">
                            {/* <img className="h-[8px] w-[8px]" src={logo} alt="Logo" /> */}
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >Road transport Resilience</p>
                        </div>
                        <div className=" flex items-center  ">
                            {/* <img className="h-[8px] w-[8px]" src={logo} alt="Logo" /> */}
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >Maritime transport Mastery</p>
                        </div>
                        <div className=" flex items-center  ">
                            {/* <img className="h-[8px] w-[8px]" src={logo} alt="Logo" /> */}
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px]' >Air transport Excellence</p>
                        </div>
                    </div>
                    <div className=" flex flex-col mr-2 ">
                        <p id='FooterAbout' className='text-[5px] font-inter font-bold mb-2 xl:text-[10px] text-[#012A5B] ' >ABOUT US</p>
                        <div className=" flex items-center  ">
                            {/* <img className="h-[8px] w-[8px]" src={logo} alt="Logo" /> */}
                            <p className='text-[4.77px] font-inter font-normal xl:text-[10px] ' >About</p>
                        </div>
                        
                    </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default Footer;