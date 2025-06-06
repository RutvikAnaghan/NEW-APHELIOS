import React from "react";
import { Link } from "react-router-dom";
import logoLight from '../assets/images/logo-light.png'
import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail} from '../assets/icons/vander'
import { Helmet } from 'react-helmet';

export default function Footer(){
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

        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container relative text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center footer-logo">
                            <Link to="#" className="text-[22px] focus:outline-none">
                                <img src={logoLight} className="mx-auto md:me-auto md:ms-0 aboutimage" alt=""/>
                            </Link>
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()} Aphelios. Design & Develop with <i className="mdi mdi-heart text-red-600"></i> by <Link to="https://shreethemes.in/" target="_blank" className="text-reset">Aphelios Solution LLP</Link>.</p>
                        </div>

                        <ul className="lg:col-span-4 list-none md:text-end text-center mt-6 md:mt-0">
                            <li className="inline"><Link to="" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiDribbble className="size-4 align-middle" title="dribbble"/></Link></li>
                            <li className="inline"><Link to="" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiLinkedin className="size-4 align-middle" title="Linkedin"/></Link></li>
                            <li className="inline"><Link to="" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiFacebook className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link to="" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiInstagram className="size-4 align-middle" title="instagram"/></Link></li>
                            <li className="inline"><Link to="" target="_blank" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiTwitter className="size-4 align-middle" title="twitter"/></Link></li>
                            <li className="inline"><Link to="" className="size-8 inline-flex justify-center items-center border border-gray-800 rounded-md hover:border-teal-500 dark:hover:border-teal-500 hover:bg-teal-500 dark:hover:bg-teal-500"><FiMail className="size-4 align-middle" title="email"/></Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
        </>
    )
}