import map from "../img/map2.png";

const Covred = () => {
    return ( 
        <div id="territory" className="mt-2 flex flex-col justify-center items-center">
            <h1  id="CovredTitel" className="font-intan font-black uppercase text-[17.69px] text-[#012A5B] text-center xl:text-[30px] " >covered territory</h1>
            <img className=" w-[80%]  xl:w-[50%] " src={map} alt="map" />
        </div>
     );
}
 
export default Covred;