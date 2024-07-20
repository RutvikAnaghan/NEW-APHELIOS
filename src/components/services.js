import React from "react";
import { Link } from "react-router-dom";
import { servicesData } from "../data/data";
import { Helmet } from 'react-helmet';

import bg from '../assets/images/bg/2.png'

export default function Services(){
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
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="services" style={{backgroundImage:`url(${bg})`}}>
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Services we can help you with</h3>
                </div>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
            {servicesData.map((item, index) => {
                let Icon = item.icon;
                return (
                    <div className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden h-fit min-h-385" key={index}>
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                            <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                            <Link to="" className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500">{item.title}</Link>
                            <ul className="text-slate-400 mt-3">
                                {item.tech.map((tech, techIndex) => {
                                    let TechIcon = tech.icon;
                                    return (
                                        <li key={techIndex} className="flex items-center mt-2 ml-0-important group-hover:text-dark dark:group-hover:text-white">
                                            {TechIcon && <TechIcon className="mr-2"/>} {tech.name}
                                        </li>
                                    );
                                })}
                            </ul>

                        </div>

                        <div className="absolute bottom-0 -end-16">
                            <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                            <div className="mt-4">
                                <Link to="/service" className="text-teal-500">Read More <i className="mdi mdi-chevron-right align-middle"></i></Link>
                            </div>
                    </div>
                );
            })}
        </div>
            </div>
        </section>
        </>
    )
}