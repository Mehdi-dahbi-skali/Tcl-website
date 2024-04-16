import logo from '../img/logo.png';
// import back from '../img/bg.jpg';
import back from '../img/TCLL.jpg';
import del from '../img/delete.png';
// import back2 from '../img/bg2.png';
import whatsap from '../img/whatsapp.jpg';
import { useState } from 'react';
import Nav from './Nav';

const Home = () => {

    return (
        <div className="w-full">
            <Nav />
            <div className="h-[555px] w-full flex flex-col justify-center text-center bg-cover xl:text-start  xl:items-end xl:justify-end " style={{ backgroundImage: `url(${back})`, backgroundPosition: 'bottom right' }}>
                <div className="m-auto mb-0 xl:absolute xl:left-[4.5rem] xl:mb-[4.5rem]  ">
                    <p className="font-intan font-black uppercase text-[17px] text-[#559FBB] xl:text-[60px] " >Transport Commerce</p>
                    <p className="font-intan font-black uppercase text-[17px] text-[#559FBB] xl:text-[60px] " >Logistics</p>
                </div>
                <a href="#Info" className=' m-auto mt-0 xl:mt-[470px] '>
                    <div className="flex align-middle m-auto p-5 bg-white opacity-30 text-center justify-center w-[150px] h-[19px] items-center rounded mt-2 xl:absolute xl:left-[4.5rem] xl:mb-[2.5rem] ">
                        <p className="font-inria-Sans text-[16px] text-gray-400-200 ">Discover more</p>
                    </div>
                </a>
                <div className="flex justify-center items-center w-10 rounded-[30px] h-10 bg-white absolute bottom-[1.75rem] right-3 shadow-xl  xl:w-[3.5rem] xl:h-[3.5rem]  xl:bottom-[6.75rem] ">
                    <img className="h-[22px] w-[22px] xl:h-[35px] xl:w-[35px] " src={whatsap} alt="Logo" />
                </div>
            </div>

        </div>
    );
}
// {  isactive ? ' hidden justify-center flex-col w-[17px] burger' : ' flex justify-center flex-col w-[17px] burger'}
export default Home;
