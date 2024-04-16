import logo from '../img/logo.png';
import del from '../img/delete.png';
import { useState } from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom';

const Nav = () => {
    const [isActive, setActive] = useState(false);
    const [selectedlang, setlang] = useState('eng');


    const handleClickOnNav = () => {
        setActive(!isActive);
        // window.location.href = '/';
    };

    const handeltraductionfr = () => {

        document.getElementById("NavContact").innerText = "Contact";
        document.getElementById("NavAbout").innerText = "A propos";
        document.getElementById("Navteritory").innerText = "territoire couvert";

        document.getElementById("InfoContact").innerText = "Contact";
        document.getElementById("InfoAbout").innerText = "A propos";
        document.getElementById("InfoSatisfaction").innerText = "consommateurs satisfaits ";
        document.getElementById("Infocovred").innerText = "territoire couvert";

        document.getElementById("AboutusHeader").innerText = "a propos de nous";
        document.getElementById("AboutusText").innerText = "Chez TCL, nous sommes bien plus qu'une entreprise de transport et de logistique ; nous offrons des solutions sur mesure pour chaque secteur industriel. Qu'il s'agisse d'industries telles que l'alimentation, la construction, l'automobile ou l'aérospatiale, nous comprenons parfaitement les spécificités et les exigences propres à chaque secteur. Qu'il s'agisse de transport routier, maritime ou multimodal, nous nous engageons à optimiser votre chaîne d'approvisionnement. Grâce à notre équipe dévouée, nous veillons à ce que vos expéditions bénéficient d'une gestion logistique impeccable, en visant toujours l'excellence et la fiabilité pour un service inégalé.";

        document.getElementById("ServiceTitel").innerText = "RESILIENCE DU TRANSPORT ROUTIER ";
        document.getElementById("ServiceTitell").innerText = "Maîtrise du transport maritime";
        document.getElementById("ServiceTitelll").innerText = "Transport aérien Excellence";

        document.getElementById("Servicedesc").innerText = "Nos services de transport routier redéfinissent la fiabilité sur le terrain. Grâce à une flotte de véhicules spécialisés et à notre engagement à respecter les délais de livraison, nous veillons à ce que votre cargaison franchisse les frontières sans encombre. Des routes locales aux autoroutes internationales, nous ouvrons la voie pour que vos marchandises atteignent leur destination dans les délais prévus.";
        document.getElementById("Servicedescc").innerText = "Exploitez la puissance de la mer grâce à nos solutions complètes de transport maritime. Qu'il s'agisse d'un chargement complet de conteneur (FCL) ou d'un chargement inférieur à un conteneur (LCL), nous naviguons à travers les complexités des eaux internationales pour livrer vos expéditions avec la plus grande fiabilité. Votre succès est notre voyage, et nous faisons en sorte que chaque mile nautique compte.";
        document.getElementById("Servicedesccc").innerText = "Nos services de transport aérien inégalés permettent à vos marchandises d'atteindre de nouveaux sommets. Qu'il s'agisse d'expéditions express ou de manutention spécialisée, nous veillons à ce que vos marchandises atteignent leur destination rapidement et en toute sécurité. Nos partenariats stratégiques avec les principales compagnies aériennes garantissent une portée mondiale qui correspond à vos aspirations commerciales.";

        document.getElementById("CovredTitel").innerText = "Territoire couvert";

        document.getElementById("Contactnom").innerText = "Nom complet";
        document.getElementById("Contactnomentr").innerText = "nom de l entreprise";
        document.getElementById("Contactemail").innerText = "adresse email";
        document.getElementById("Contactmsg").innerText = "message";

        document.getElementById("FooterContact").innerText="contact us";
        document.getElementById("FooterAbout").innerText="A propos";
        document.getElementById("FooterServices").innerText="NOS SERVICES";

        document.getElementById("ContactBtn").innerText="Valider";

        // document.getElementById("btnlang").innerText = "eng";
        setlang('fr');

    }

    const handeltraductionEng = () => {

        document.getElementById("NavContact").innerText = "Contact us";
        document.getElementById("NavAbout").innerText = "About us";
        document.getElementById("Navteritory").innerText = "Covered territory";

        document.getElementById("InfoContact").innerText = "CONTACT us";
        document.getElementById("InfoAbout").innerText = "About us";
        document.getElementById("InfoSatisfaction").innerText = "satisfied customers";
        document.getElementById("Infocovred").innerText = "covered territory";

        document.getElementById("AboutusHeader").innerText = "About us";
        document.getElementById("AboutusText").innerText = "At TCL, we are much more than a transport and logistics company; we offer tailored solutions for every industrial sector. Whether it's industries such as food, construction, automotive, or aerospace, we deeply understand the specificities and requirements unique to each sector. Whether it's road, maritime, or multimodal transport, we are committed to optimizing your supply chain. With a dedicated team, we ensure that your shipments benefit from impeccable logistics management, always aiming for excellence and reliability for unparalleled service.";

        document.getElementById("ServiceTitel").innerText = "Road transport Resilience ";
        document.getElementById("ServiceTitell").innerText = "Maritime transport Mastery";
        document.getElementById("ServiceTitelll").innerText = "Air transport Excellence";

        document.getElementById("Servicedesc").innerText = "Our road transport services redefine reliability on the ground With a fleet of specialized vehicles and a commitment to timely deliveries, we ensure that your cargo travels seamlessly across borders. From local routes to international highways, we pave the way for your goods to reach their destination on schedule.";
        document.getElementById("Servicedescc").innerText = "Harness the power of the sea with our comprehensive maritime transport solutions. Whether it's Full Container Load (FCL) or Less than Container Load (LCL), we navigate the complexities of international waters to deliver your shipments with utmost reliability. Your success is our voyage, and we make every nautical mile count";
        document.getElementById("Servicedesccc").innerText = "Elevate your cargo to new heights with our unrivaled air transport services From express shipments to specialized handling, we ensure that your goods reach their destination swiftly and securely. Our strategic partnerships with leading airlines guarantee a global reach that aligns with your business aspirations.";

        document.getElementById("CovredTitel").innerText = "covered territory";

        document.getElementById("Contactnom").innerText = "Full name";
        document.getElementById("Contactnomentr").innerText = "Name of the company";
        document.getElementById("Contactemail").innerText = "Your email address";
        document.getElementById("Contactmsg").innerText = "Your message";

        document.getElementById("FooterContact").innerText="contact us";
        document.getElementById("FooterAbout").innerText="ABOUT US";
        document.getElementById("FooterServices").innerText="OUR SERVICES";

        document.getElementById("ContactBtn").innerText="Submit";

        // document.getElementById("btnlang").innerText = "fr";
        setlang('eng');
    }

    const handeltraductionEsp = () => {

        document.getElementById("NavContact").innerText = "Contacto";
        document.getElementById("NavAbout").innerText = "Acerca de";
        document.getElementById("Navteritory").innerText = "territoire couvert";

        document.getElementById("InfoContact").innerText = "Contact";
        document.getElementById("InfoAbout").innerText = "Acerca de";
        document.getElementById("InfoSatisfaction").innerText = " de clientes satisfechos ";
        document.getElementById("Infocovred").innerText = "Territorio cubierto";

        document.getElementById("AboutusHeader").innerText = "Acerca de nosotros";
        document.getElementById("AboutusText").innerText = "En TCL, somos mucho más que una empresa de transporte y logística; ofrecemos soluciones personalizadas para cada sector industrial. Ya sea para industrias como la alimentaria, la construcción, la automotriz o la aeroespacial, comprendemos perfectamente las especificaciones y los requisitos específicos de cada sector. Ya sea por transporte terrestre, marítimo o multimodal, nos comprometemos a optimizar su cadena de suministro. Gracias a nuestro equipo dedicado, nos aseguramos de que sus envíos se beneficien de una gestión logística impecable, siempre buscando la excelencia y la confiabilidad para un servicio inigualable.";

        document.getElementById("ServiceTitel").innerText = "Resiliencia del transporte terrestre";
        document.getElementById("ServiceTitell").innerText = "Dominio del transporte marítimo";
        document.getElementById("ServiceTitelll").innerText = "Excelencia en el transporte aéreo";

        document.getElementById("Servicedesc").innerText = "Nuestros servicios de transporte terrestre redefinen la confiabilidad en el terreno. Gracias a una flota de vehículos especializados y nuestro compromiso de cumplir con los plazos de entrega, nos aseguramos de que su carga cruce las fronteras sin problemas. Desde carreteras locales hasta autopistas internacionales, abrimos el camino para que sus mercancías lleguen a su destino en el plazo previsto.";
        document.getElementById("Servicedescc").innerText = "Aproveche la potencia del mar gracias a nuestras soluciones completas de transporte marítimo. Ya sea un contenedor completo (FCL) o un contenedor inferior a un contenedor (LCL), navegamos a través de las complejidades de las aguas internacionales para entregar sus envíos con la mayor confiabilidad. Su éxito es nuestro viaje, y nos aseguramos de que cada milla náutica cuente.";
        document.getElementById("Servicedesccc").innerText = "Nuestros incomparables servicios de transporte aéreo permiten que sus mercancías alcancen nuevas cumbres. Ya sea para envíos urgentes o manipulación especializada, nos aseguramos de que sus mercancías lleguen a su destino de forma rápida y segura. Nuestras alianzas estratégicas con las principales aerolíneas garantizan un alcance global que se ajusta a sus aspiraciones comerciales.";

        document.getElementById("CovredTitel").innerText = "Territorio cubierto";

        document.getElementById("ContactTitel").innerText="Contáctenos";

        document.getElementById("Contactnom").innerText = "Nombre completo";
        document.getElementById("Contactnomentr").innerText = "nombre de la empresa";
        document.getElementById("Contactemail").innerText = "dirección de correo electrónico";
        document.getElementById("Contactmsg").innerText = "mensaje";

        document.getElementById("FooterContact").innerText="Contáctenos";
        document.getElementById("FooterAbout").innerText="Acerca de nosotros ";
        document.getElementById("FooterServices").innerText="Servicio";

        document.getElementById("ContactBtn").innerText="Entregar";

        // document.getElementById("btnlang").innerText = "eng";
        setlang('esp');
    }


    return (
        <div className="">
            <div className="w-full h-[50px] bg-white shadow-md flex justify-between px-2  z-30  xl:h-[70px]">
                <a href="/" style={{ textDecoration: 'none' }}>
                    <img className="h-[62px] w-[62px] xl:w-[90px] xl:h-[90px] mb-2" src={logo} alt="Logo" />
                </a>
                <div className={'flex justify-center flex-col w-[17px] burger xl:hidden'} onClick={handleClickOnNav}>
                    <div className="w-[10px] h-1 bg-[#559FBB] rounded-xl"></div>
                    <div className="w-[17px] h-1 bg-[#559FBB] rounded-xl mt-[3px] mb-[3px]"></div>
                    <div className="w-[10px] ml-auto mr-0 h-1 bg-[#559FBB] rounded-xl"></div>
                </div>
                <div className=" hidden xl:flex xl:items-center xl:justify-center xl:mr-6 ">
                    <a id='NavContact' href="/#contact" className=' font-Jaldi mx-2 text-[#012A5B] ' >Contact us</a>
                    <a id='NavAbout' href="/#about" className=' font-Jaldi mx-2 text-[#012A5B] ' >About us</a>
                    <a id='Navteritory' href="/#territory" className=' font-Jaldi mx-2 text-[#012A5B] ' >Covered territory</a>
                    <a id='NavService' href="/#services" className=' font-Jaldi mx-2 text-[#012A5B] ' >Services</a>
                    <div className=" flex ">
                        <div className={selectedlang == "eng" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionEng} className=' cursor-pointer ' >eng</p>
                        </div>
                        <div className={selectedlang == "fr" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionfr} className=' cursor-pointer ' >fr</p>
                        </div>
                        <div className={selectedlang == "esp" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionEsp} className=' cursor-pointer ' >esp</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={isActive ? 'sidenav w-full h-full bg-white absolute z-30 top-0' : 'hidden sidenav w-full h-full bg-white  top-0'} >
                <img className="h-[15px] w-[15px]  m-auto relative top-5 " onClick={handleClickOnNav} src={del} alt="Close" />
                <div className="flex flex-col justify-center items-center h-full">
                    <a href="/" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Home</a>
                    <a id='NavContact' href="/#contact" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Contact us</a>
                    <a id='NavAbout' href="/#about" className="font-popins text-[15px] text-[#012A5B] border-b w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>About us</a>
                    <a id='Navteritory' href="/#territory" className="font-popins text-[15px] text-[#012A5B] w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>Covered territory</a>
                    <a href="/#services" className="font-popins text-[15px] text-[#012A5B] w-[80%] text-center pl-2 block mt-4" onClick={handleClickOnNav}>services</a>
                    <div className=" flex w-[80%]  mt-4 justify-center ">
                        <div className={selectedlang == "eng" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionEng} className=' cursor-pointer ' >eng</p>
                        </div>
                        <div className={selectedlang == "fr" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionfr} className=' cursor-pointer ' >fr</p>
                        </div>
                        <div className={selectedlang == "esp" ? 'hidden' : 'w-[60px] h-[35px] rounded-sm bg-[#012A5B] text-white flex justify-center items-center font-Jaldi mr-2'}>
                            <p id="btnlang" onClick={handeltraductionEsp} className=' cursor-pointer ' >esp</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Nav;
