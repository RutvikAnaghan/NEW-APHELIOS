import React from "react";
import { clientData } from "../data/data";

import TinySlider from "tiny-slider-react";
import 'tiny-slider/dist/tiny-slider.css';

import google from "../assets/images/review/Google_2015_logo.svg"
import trustpilot from "../assets/images/review/Trustpilot_Logo_(2022).svg"
import trustpilotdark from "../assets/images/review/logo-trustpilot_white.svg"
import clutch from "../assets/images/review/clutch-co-vector-logo.svg"
import clutchWhite from "../assets/images/review/clutch-co-white.svg"
import { Helmet } from 'react-helmet';

export default function Client(){
    const settings = {
        container: '.tiny-three-item',
        controls: false,
        mouseDrag: true,
        loop: true,
        rewind: true,
        autoplay: true,
        autoplayButtonOutput: false,
        autoplayTimeout: 3000,
        navPosition: "bottom",
        speed: 400,
        gutter: 12,
        responsive: {
            992: {
                items: 3
            },

            767: {
                items: 2
            },

            320: {
                items: 1
            },
        },
      };
    return(
        <>
         <Helmet>
        <meta charSet="utf-8" />
        <title>Aphelios Solution LLP - Software Development Partner</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="title"
          content="Aphelios Solution LLP - Software Development Partner"
        />
        <meta
          name="description"
          content="At Aphelios, we are Salesforce CRM consultants and development company providing comprehensive IT solutions."
        />
        <meta
          name="keywords"
          content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, trailhead,salesforce,CRM,Development,consultant,Salesforce,salesforce,salesforcelogin,salesforceCareers,salesforce,trailhead,salesforceCertification,salesforce,trailhead,salesforceJobs,crm,sales,sales,saas,logincrm,customer service,cloud computing,what is crm,crm system,crm software,UI/UX,Designing,Application,AppDevelopment,MobileApp,Website,WebApplication,CrossPlatform,eCommerce,AngularJS,Angular,HTML,CSS,React,ReactNative,IOS,Android"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="Aphelios Solution LLP" />
        <link rel="canonical" href="https://www.apheliossolution.in" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.apheliossolution.com"
        />
      </Helmet>

        <section className="relative md:py-24 py-16" id="review">
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">What Our Users Say</h3>

                <p className="text-slate-400 max-w-xl mx-auto">Explore the experiences and feedback from our valued customers about our innovative solutions and exceptional service.</p>
            </div>

            <div className="flex align-items-center text-center jt-center-gap mt-6 mb-6" data-aos="fade-up">
                <div>
                    <a
                        target="_blank"
                        href=""
                        rel="noopener noreferrer"
                    >
                        <div className="review">
                            <img
                                src={google}
                                alt="Google Review"
                                className="aboutimage"
                                width="136"
                                height="67"
                                loading="lazy"
                                fetchpriority="low"
                            />
                        </div>
                    </a>
                </div>
                <div>
                    <div className="divider"></div>
                    <a
                        target="_blank"
                        href=""
                        rel="noopener noreferrer"
                    >
                        <div className="review review-border inline-block dark:hidden ">
                            <img
                                src={trustpilot}
                                alt="Glassdoor Review"
                                className="aboutimage"
                                width="153"
                                height="68"
                                loading="lazy"
                                fetchpriority="low"
                            />
                        </div>
                       
                    </a>
                </div>
                <div>
                    <div className="divider"></div>
                    <a
                        target="_blank"
                        href=""
                        rel="noopener noreferrer"
                    >
                        <div className="review inline-block dark:hidden">
                            <img
                                src={clutch}
                                className="aboutimage"
                                alt="Clutch Review"
                                width="136"
                                height="64"
                                loading="lazy"
                                fetchpriority="low"
                            />
                        </div>
                    </a>
                </div>
            </div>

            <div className="grid grid-cols-1 mt-12 cursor-pointer">
                <div className="tiny-three-item">
                <TinySlider settings={settings}>
                    {clientData.map((item, index)=>{
                        return(
                            <div className="tiny-slide text-center" key={index}>
                                <div className="cursor-e-resize cursor-pointer">
                                    <div className="content relative rounded shadow dark:shadow-gray-700 m-2 p-6 bg-white dark:bg-slate-900 before:content-[''] before:absolute before:start-1/2 before:-bottom-[4px] before:box-border before:border-8 before:rotate-[45deg] before:border-t-transparent before:border-e-white dark:before:border-e-slate-900 before:border-b-white dark:before:border-b-slate-900 before:border-s-transparent before:shadow-testi dark:before:shadow-gray-700 before:origin-top-left">
                                        <i className="mdi mdi-format-quote-open mdi-48px text-teal-500"></i>
                                        <p className="text-slate-400">{item.desc}</p>
                                        <ul className="list-none mb-0 text-amber-400 mt-3">
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                            <li className="inline"><i className="mdi mdi-star"></i></li>
                                        </ul>
                                    </div>
                                    
                                    <div className="text-center mt-5">
                                        <img src={item.image} className="size-14 rounded-full shadow-md dark:shadow-gray-700 mx-auto" alt=""/>
                                        <h6 className="mt-2 font-semibold">{item.name}</h6>
                                        <span className="text-slate-400 text-sm">{item.title}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </TinySlider>
                </div>
            </div>
        </div>
    </section>
        </>
    )
}