// import React,{useState} from "react";
// import { Link } from "react-router-dom";
// // import { Link } from 'react-scroll';


// import heroImg from "../assets/images/about2.jpg"
// import bg from '../assets/images/bg/2.png'

// import Navbar from "../components/navbar";
// import About from "../components/about";
// import Services from "../components/services";
// import AgencyTab from "../components/agencyTab";
// import Cta from "../components/cta";
// import Client from "../components/client";
// import Pricing from "../components/pricing";
import Blogs from "../components/blog";
// import GetInTouch from "../components/getInTuoch";
// import Footer from "../components/footer";
// import Switcher from "../components/switcher";

// import advayan from "../assets/images/advayan_color_logo.png"
// import advayanwhite from "../assets/images/advayan_white.png"

// import { FiMonitor } from '../assets/icons/vander'

// import ModalVideo from 'react-modal-video';
// import '../../node_modules/react-modal-video/scss/modal-video.scss';

// export default function IndexThree(){
//     let [isOpen, setOpen] = useState(false);
//     return(
//         <>
//         <Navbar/>
//         <section className="relative flex items-center md:h-screen py-36 bg-no-repeat bg-center bg-cover" id="home" style={{backgroundImage:`url(${bg})`}}>
//             <div className="container relative">
//                 <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-6 gap-6 relative">
//                     <div className="lg:col-span-7 md:me-6">
//                         <h4 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl mb-5">Reliable Custom <br/>Software Development<br/>Partner in <span className="text-teal-500 font-bold textMove">
//                             <div className="text-container">
//                                 <span className="mb-2" style={{ '--i': 0 }}>Ecommerce<br/></span>
//                                 <span className="mb-2" style={{ '--i': 1 }}>Fintech<br/></span>
//                                 <span className="mb-2" style={{ '--i': 2 }}>Healthcare<br/></span>
//                                 <span className="mb-2" style={{ '--i': 3 }}>Travel &amp; Hospitality<br/></span>
//                                 <span className="mb-2" style={{ '--i': 4 }}>Real Estate<br/></span>
//                             </div>
//                         </span></h4>
//                         <p className="text-slate-400 text-lg max-w-xl">Whether you need a robust web presence or a customized Salesforce platform, we deliver innovative solutions that meet your unique business needs.</p>
                    
//                         <div className="relative mt-6 space-x-1">
//                             <Link to="get-in-touch" smooth={true} duration={500}  className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white cursor-pointer">Consult Aphelios</Link>
//                         </div>
//                             <ModalVideo
//                                 channel="youtube"
//                                 youtube={{ mute: 0, autoplay: 0 }}
//                                 isOpen={isOpen} 
//                                 videoId="S_CGed6E610"
//                                 onClose={() => setOpen(false)} 
//                             />
//                     </div>

//                     <div className="lg:col-span-5">
//                         <div className="relative">
//                             <img src={heroImg} className="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]" alt=""/>
    
//                             <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-teal-500/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
                        
//                             <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
//                                 <div className="flex items-center">
//                                     <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
//                                         <FiMonitor className="h-6 w-6"/>
//                                     </div>
//                                     <div className="flex-1">
//                                         <span className="text-lg font-semibold">Salesforce Solutions</span>
//                                     </div>
//                                 </div>
    
//                             </div>
    
//                             <div className="absolute top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
//                                 <h5 className="text-lg font-semibold mb-3 ml-3">Strategic Partner</h5>
//                                 <div className="flex justify-between mt-3 mb-2">
//                                     <Link target="_blank" to="https://www.advayan.com/">
//                                         <img src={advayan} className="inline-block dark:hidden" alt=""/>
//                                         <img src={advayanwhite} className="hidden dark:inline-block" alt=""/>

//                                     </Link>

//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//         <About/>
//         <Services/>
//         <AgencyTab/>
//         <Cta/>
//         <Client/>
//         <Pricing/>
//         <Blogs/>
//         <GetInTouch  id="get-in-touch"/>
//         <Footer/>
//         <Switcher/>
//         </>
//     )
// }
import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import heroImg from "../assets/images/about2.jpg";
import bg from "../assets/images/bg/2.png";

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import advayan from "../assets/images/advayan_color_logo.png";
import advayanwhite from "../assets/images/advayan_white.png";

import { FiMonitor } from '../assets/icons/vander';

import ModalVideo from 'react-modal-video';
import '../../node_modules/react-modal-video/scss/modal-video.scss';

export default function IndexThree() {
    let [isOpen, setOpen] = useState(false);
    return (
        <>
            <Navbar />
            <section
                className="relative flex items-center md:h-screen py-36 bg-no-repeat bg-center bg-cover"
                id="home"
                style={{ backgroundImage: `url(${bg})` }}
            >
                <div className="container relative">
                    <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-6 gap-6 relative">
                        <div className="lg:col-span-7 md:me-6">
                            <h4 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl mb-5">
                                Reliable Custom <br />Software Development<br />Partner in <span className="text-teal-500 font-bold textMove">
                                    <div className="text-container">
                                        <span className="mb-2" style={{ '--i': 0 }}>Ecommerce<br /></span>
                                        <span className="mb-2" style={{ '--i': 1 }}>Fintech<br /></span>
                                        <span className="mb-2" style={{ '--i': 2 }}>Healthcare<br /></span>
                                        <span className="mb-2" style={{ '--i': 3 }}>Travel &amp; Hospitality<br /></span>
                                        <span className="mb-2" style={{ '--i': 4 }}>Real Estate<br /></span>
                                    </div>
                                </span>
                            </h4>
                            <p className="text-slate-400 text-lg max-w-xl">
                                Whether you need a robust web presence or a customized Salesforce platform, we deliver innovative solutions that meet your unique business needs.
                            </p>

                            <div className="relative mt-6 space-x-1">
                                <Link to="get-in-touch" smooth={true} duration={200} className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white cursor-pointer">Consult Aphelios</Link>
                            </div>
                            <ModalVideo
                                channel="youtube"
                                youtube={{ mute: 0, autoplay: 0 }}
                                isOpen={isOpen}
                                videoId="S_CGed6E610"
                                onClose={() => setOpen(false)}
                            />
                        </div>

                        <div className="lg:col-span-5">
                            <div className="relative">
                                <img src={heroImg} className="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]" alt="" />

                                <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-teal-500/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>

                                <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
                                    <div className="flex items-center">
                                        <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
                                            <FiMonitor className="h-6 w-6" />
                                        </div>
                                        <div className="flex-1">
                                            <span className="text-lg font-semibold">Salesforce Solutions</span>
                                        </div>
                                    </div>

                                </div>

                                <div className="absolute top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
                                    <h5 className="text-lg font-semibold mb-3 ml-3">Strategic Partner</h5>
                                    <div className="flex justify-between mt-3 mb-2">
                                        <RouterLink target="_blank" to="https://www.advayan.com/">
                                            <img src={advayan} className="inline-block dark:hidden" alt="" />
                                            <img src={advayanwhite} className="hidden dark:inline-block" alt="" />
                                        </RouterLink>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <About />
            <Services />
            <AgencyTab />
            <Cta />
            <Client />
            <Pricing />
            <Blogs />
            <div id="get-in-touch">
                <GetInTouch />
            </div>
            <Footer />
            <Switcher />
        </>
    );
}
