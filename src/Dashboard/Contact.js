import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
    const [isActive, setActive] = useState(false);
    const form = useRef();
 

    const sendEmail = (e) => {
        e.preventDefault();

        const nm = document.getElementsByName("name")[0].value;
        const em = document.getElementsByName("email")[0].value;
        const cop = document.getElementsByName("company")[0].value;
        const msg = document.getElementsByName("msg")[0].value;



        if (nm.length >= 5 && em.length >= 5 && cop.length >= 5 && msg.length >= 5) {
            console.log("All values are at least 5 characters long.");
            console.log(nm, em, cop, msg);

            emailjs
                .sendForm('service_83znkde', 'template_l6lq9je', form.current, {
                    publicKey: 'IHRq-y2ACyIhJ50tN',
                })
                .then(
                    () => {
                        console.log('SUCCESS!');
                        e.target.reset();
                    },
                    (error) => {
                        console.log('FAILED...', error.text);
                    },
                );


        } else {
            setActive(true);
            console.log("One or more values are less than 5 characters long.");
        }


    };

    return (
        <div id="contact" className="contact mt-2 mb-2 ">
            <h1 id="ContactTitel" className="font-intan font-black uppercase text-[14.27px] text-[#012A5B] text-center xl:text-[60.48px]  " >contact us</h1>
            {isActive == true && <p className="font-popins  text-[8px] text-red-500 text-center " > One or more values are less than 5 characters long. </p>}
            <form ref={form} onSubmit={sendEmail} >
                <div className=" flex  flex-col items-center justify-center mt-2 ">
                    <div className=" flex  ">
                        <div className=" flex flex-col justify-start items-start mr-1 ">
                            <p id="Contactnom" className="text-[8px] font-popins  text-gray-500 xl:text-[20.94px] " >Full name</p>
                            <input name="name" type="text" className="w-[88.36px] h-[20.29px] border rounded xl:w-[255px] xl:h-[40px] font-popins text-[8px] outline-none pl-1 " />
                        </div>
                        <div className=" flex flex-col justify-start items-start ">
                            <p id="Contactnomentr" className="text-[8px] font-popins text-gray-500 xl:text-[20.94px] " >Name of the company</p>
                            <input name="company" type="text" className="w-[88.36px] h-[20.29px] border rounded xl:w-[255px] xl:h-[40px] font-popins text-[8px] outline-none pl-1 " />
                        </div>
                    </div>
                    <div className=" flex  ">
                        <div className=" mt-2 flex flex-col justify-start items-start mr-1 ">
                            <p id="Contactemail" className="text-[8px] font-popins text-gray-500 xl:text-[20.94px]" >Your email address</p>
                            <input name="email" type="email" className="w-[172.96px] h-[20.29px] border rounded xl:w-[515px] xl:h-[40px] text-[8px] outline-none pl-1  " />
                        </div>
                    </div>
                    <div className=" flex  ">
                        <div className=" mt-2 flex flex-col justify-start items-start mr-1 ">
                            <p id="Contactmsg" className="text-[8px] font-popins text-gray-500 xl:text-[20.94px] " >Your email address</p>
                            <textarea name="msg" type="text" className="w-[172.96px] h-[75.51px] border rounded xl:w-[515px] xl:h-[175px] text-[8px] outline-none pl-1  " />
                        </div>
                    </div>
                    <button id="ContactBtn" className=" text-[8px] bg-[#012A5B] text-white font-popins w-[70.34px] h-[15.67px] rounded-md mt-3 shadow-md xl:text-[15px] xl:w-[100px] xl:h-[35px] " >Valider</button>
                </div>
            </form>
            <script src="https://smtpjs.com/v3/smtp.js" ></script>

        </div>
    );
}

export default Contact;