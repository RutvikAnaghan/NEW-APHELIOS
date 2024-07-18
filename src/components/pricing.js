import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import bg from '../assets/images/bg/2.png'

export default function Pricing(){

    const [activeTab, setActiveTab] = useState("Salesforce"); // Default active tab

    const handleTabClick = (tabId) => {
      setActiveTab(tabId);
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
        <section className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800" id="pricing" style={{backgroundImage:`url(${bg})`}}>
        <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
                <h3 className="font-semibold text-2xl leading-normal mb-4">Packages</h3>
            </div>

            <div className="navDiv text-center">
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "Salesforce" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Salesforce")}
              >
                Salesforce
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "WebDesign" ? "active" : ""
                }`}
                onClick={() => handleTabClick("WebDesign")}
              >
                Web Design
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "WebDevelopment" ? "active" : ""
                }`}
                onClick={() => handleTabClick("WebDevelopment")}
              >
                Web Development
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "MobileAppDesign" ? "active" : ""
                }`}
                onClick={() => handleTabClick("MobileAppDesign")}
              >
                Mobile App Design
              </a>
              <a
                className={`hover-line dark:text-white ${activeTab === "MobileAppDevelopment" ? "active" : ""}`}
                onClick={() => handleTabClick("MobileAppDevelopment")}
              >
                Mobile App Development
              </a>
              <a
                className={`hover-line dark:text-white ${activeTab === "FbInstaPaidAds" ? "active" : ""}`}
                onClick={() => handleTabClick("FbInstaPaidAds")}
              >
                FB & INSTA PAID ADS
              </a>
              <div className="animation start-hom"></div>
            </div>
            {activeTab === "Salesforce" && (
            <div className="Salesforce">
                <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                    {/* <div></div> */}
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Salesforce</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">25-35</span>
                            <span className="text-lg font-medium self-end mb-1">/hr</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Sales cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Service cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Marketing cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Commerce cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Insurance cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Comunication cloud development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>MuleSoft integration</span></li>


                        </ul>
                        <Link to="/get-in-touch" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        {/* <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p> */}
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service." className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

            {activeTab === "WebDesign" && (
            <div className="WebDesign">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Basic</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">79</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Homepage (Landing page)Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 Page</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>


                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Standard</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">139</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Homepage + 3 Pages Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>4 Page</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>6 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>

                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Premium</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">249</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Homepage + 5 Pages Design</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>6 Page</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Unlimited Revisions</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>

                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                            {/* <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p> */}
                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

            {activeTab === "WebDevelopment" && (
            <div className="WebDevelopment">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Wordpress</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">250</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 7 pages simple website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Simple functional</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>For E commerce + $200</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Shopify</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">499</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 7 pages eCommerce website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Products & Content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Ecommerce features</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Payment integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customize</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        {/* <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div> */}
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Magento</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">599</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 pages eCommerce website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Products & Content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Ecommerce features</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Payment integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customize</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                            {/* <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p> */}
                        </div>
                    </div>

                   

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Node.Js</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">20</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>functional website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Admin penal Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Mobile responsive</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">React.Js</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">18</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>100% Accurate design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom component</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert Figma/XD/PSD to React</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>


                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">.NET</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">20</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>functional website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Admin penal Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Mobile responsive</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Angular</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">18</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>100% Accurate design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom component</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert Figma/XD/PSD to Angular</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>


                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Laravel</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">17</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>functional website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Admin penal Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Mobile responsive</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>


                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Python</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">20</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>functional website</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Admin penal Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Mobile responsive</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Vue.js</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">20</span>
                                <span className="text-lg font-medium self-end mb-1">/hr</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Design & Development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image & content upload</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>100% Accurate design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive Design</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Design customise</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom component</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert Figma/XD/PSD to Vue</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 month free support</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

            {activeTab === "MobileAppDesign" && (
            <div className="MobileAppDesign">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Basic</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">99</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 Screens</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image Format - JPG</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Elements - Fonts & Assets</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Prototype</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>


                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Standard</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">199</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>8 Screens</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image Format - JPG</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Elements - Fonts & Assets</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Prototype</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>

                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Premium</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">299</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>14 Screens</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PSD/ XD/ Figma</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Image Format - JPG</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Source Files</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Elements - Fonts & Assets</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Prototype</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>

                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

            {activeTab === "MobileAppDevelopment" && (
            <div className="MobileAppDevelopment">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Android App</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">399 - 999</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 15 Screens functional app</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert design PSD/ XD/ Figma to Android</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 15 Backend API integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Neat & Clean development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive for all Android Device</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Deliver Source file</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 to 8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Submit on Play-store</span></li>

                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">iOS App</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">399 - 999</span>
                            <span className="text-lg font-medium self-end mb-1">/mo</span>
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>4 to 14 Screens functional app</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert design PSD/ XD/ Figma to iOS</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>4 to 12 Backend API integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Neat & Clean development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive for all iOS Device</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Deliver Source file</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 to 8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Submit on App store</span></li>

                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Reactnative App</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">499 - 999</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 12 Screens functional app</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert design PSD/ XD/ Figma to App</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 12 Backend API integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Neat & Clean development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive for all iOS & Android Device</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Deliver Source file</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 to 8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Submit on Play-store & App Store</span></li>

                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                        </div>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Flutter App</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">499 - 999</span>
                                <span className="text-lg font-medium self-end mb-1">/mo</span>
                            </div>

                            <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 12 Screens functional app</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Convert design PSD/ XD/ Figma to App</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 to 12 Backend API integration</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Neat & Clean development</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Responsive for all iOS & Android Device</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Deliver Source file</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 to 8 Revisions</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Delivery Based on requirement</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Submit on Play-store & App Store</span></li>

                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

            {activeTab === "FbInstaPaidAds" && (
            <div className="FbInstaPaidAds">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-6 gap-6">
                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Basic</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">60</span>
                            {/* <span className="text-lg font-medium self-end mb-1">/</span> */}
                        </div>

                        <ul className="list-none text-slate-400">
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Setup- FB+IG Page</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Ads account</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Verify Domain</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Pixel setup</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 Days Delivery</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Online store promotion</span></li>

                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <h6 className="font-semibold mb-5 text-xl">Standard</h6>

                        <div className="flex mb-5">
                            <span className="text-lg font-medium">$</span>
                            <span className="price text-5xl h6 font-semibold mb-0">90</span>
                            {/* <span className="text-lg font-medium self-end mb-1">/mo</span> */}
                        </div>

                        <ul className="list-none text-slate-400">
                        <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>1 Ads and Campaign setup</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Target Audience setup</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Standard Content</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 Days Delivery</span></li>
                            <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Online store promotion</span></li>
                        </ul>
                        <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>
                    </div>

                    <div className="group relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                        <div className="bg-gradient-to-tr from-teal-500 to-teal-700 text-white py-2 px-6 h6 text-lg font-medium">Popular</div>
                        <div className="p-6">
                            <h6 className="font-semibold mb-5 text-xl">Premium</h6>

                            <div className="flex mb-5">
                                <span className="text-lg font-medium">$</span>
                                <span className="price text-5xl h6 font-semibold mb-0">170</span>
                                {/* <span className="text-lg font-medium self-end mb-1">/mo</span> */}
                            </div>

                            <ul className="list-none text-slate-400">
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>8 Days Management</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>3 Ads & Campaign setup</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Target Audience setup</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>PRO Content</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>5 Days Delivery</span></li>
                                <li className="mb-1 flex ml-0-important"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Online store promotion</span></li>

                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Consult Aphelios</Link>

                            {/* <p className="text-sm text-slate-400 mt-1.5"><span className="text-red-600">*</span>T&C Apply</p> */}
                        </div>
                    </div>

                    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
                        <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
                            <h6 className="font-semibold mb-5 text-xl">Custom</h6>

                            <p className="text-slate-400 mb-5">Pricing plan will be as per client or company requirements</p>

                            <ul className="list-none">
                                <li className="mb-1 font-medium flex"><i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i> <span>Custom Pricing</span></li>
                            </ul>
                            <Link to="" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5">Talk to us</Link>
                        </div>
                    </div>
                </div>
            </div>)}

        </div>
    </section>
        </>
    )
}