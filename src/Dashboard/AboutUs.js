import info from "../img/info.jpg";

const AboutUs = () => {
    return (
        <div id="about" className="aboutus flex justify-between mb-3 w-fit m-auto xl:mt-[5rem] ">
            <img className="w-[110px] h-[175px]  xl:w-[350px] mr-[2rem] xl:h-auto " src={info} alt="Logo" />
            {/* <div className=" w-[110px] h-[175px] bg-cyan-300 xl:w-[445px] xl:h-[550px] mr-5 ">
            
            </div> */}
            <div className="flex flex-col w-[140px] xl:ml-2 xl:w-[535px] xl:h-auto ">
                <h1 id="AboutusHeader" className="font-intan font-black text-[13px] text-[#012A5B]  xl:text-[50px] mb-2 " >ABOUT US</h1>
                <p id="AboutusText" className="font-Jaldi text-[6.15px] xl:text-[15px] " >At TCL, we are much more than a transport and logistics company; we offer tailored solutions for every industrial sector. Whether it's industries such as food, construction, automotive, or aerospace, we deeply understand the specificities and requirements unique to each sector. Whether it's road, maritime, or multimodal transport, we are committed to optimizing your supply chain. With a dedicated team, we ensure that your shipments benefit from impeccable logistics management, always aiming for excellence and reliability for unparalleled service.</p>

            </div>
        </div>
    );
}

export default AboutUs;