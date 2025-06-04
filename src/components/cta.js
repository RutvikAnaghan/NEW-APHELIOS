import React, { useState } from "react";
import { Helmet } from 'react-helmet';
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import sfdc from "../assets/images/techicon/sfdc/salesforce-2.svg";

import angular from "../assets/images/techicon/FE/Angular.svg";
import react from "../assets/images/techicon/FE/React.svg";
import vue from "../assets/images/techicon/FE/Vue.svg";
import next from "../assets/images/techicon/FE/Next.svg";
import nuxtJs from "../assets/images/techicon/FE/NuxtJS.svg";

import nodejs from "../assets/images/techicon/BE/NodeJS.svg";
import java from "../assets/images/techicon/BE/Java.svg";
import dotnet from "../assets/images/techicon/BE/DotNet.svg";
import php from "../assets/images/techicon/BE/PHP.svg";
import laravel from "../assets/images/techicon/BE/Laravel.svg";
import codeigniter from "../assets/images/techicon/BE/Codeigniter.svg";

import android from "../assets/images/techicon/mobile/Android.svg";
import ios from "../assets/images/techicon/mobile/iOS.svg";
import reactnative from "../assets/images/techicon/mobile/React.svg";
import flutter from "../assets/images/techicon/mobile/Flutter.svg";

import wordpress from "../assets/images/techicon/CMS/Wordpress.svg";
import shopify from "../assets/images/techicon/CMS/shopify.svg";
import webflow from "../assets/images/techicon/CMS/webflow-svgrepo-com.svg";
import wix from "../assets/images/techicon/CMS/wix-svgrepo-com.svg";

import openAI from "../assets/images/techicon/db/chatgpt-icon.svg";
import tensorflow from "../assets/images/techicon/db/google-tensorflow-icon.svg";
import openCV from "../assets/images/techicon/db/opencv-svgrepo-com.svg";
import chatbots from "../assets/images/techicon/db/robot-bot-icon.svg";
import copilot from "../assets/images/techicon/db/copilot-icon.svg";


import bg from '../assets/images/bg/2.png'

export default function Cta() {
  const [activeTab, setActiveTab] = useState("Salesforce"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
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
    
    <section
      className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="technologies" style={{backgroundImage:`url(${bg})`}}
    >
      <div className="container relative">
        <div className="col-12">
          <div className="technologies-wrapper" data-aos="fade-up">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Technological & Platform Expertise We Utilize
              </h3>
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
                  activeTab === "FrontEnd" ? "active" : ""
                }`}
                onClick={() => handleTabClick("FrontEnd")}
              >
                Front End
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "BackEnd" ? "active" : ""
                }`}
                onClick={() => handleTabClick("BackEnd")}
              >
                Back End
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "Mobile" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Mobile")}
              >
                Mobile
              </a>
              <a
                className={`hover-line dark:text-white ${activeTab === "CMS" ? "active" : ""}`}
                onClick={() => handleTabClick("CMS")}
              >
                CMS
              </a>
              <a
                className={`hover-line dark:text-white ${
                  activeTab === "AI & ML" ? "active" : ""
                }`}
                onClick={() => handleTabClick("AI & ML")}
              >
                AI & ML
              </a>
              <div className="animation start-hom"></div>
            </div>
            <div className="tab-content">
              {activeTab === "Salesforce" && (
                <div className="tech-list-animated">
                  <ul className="tech-list">
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Development"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Development</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Lightning"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Lightning</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Vlocity"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Vlocity</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Sales Cloud"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Sales Cloud</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Service Cloud"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Service Cloud</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Pardot"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Pardot</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Integration"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Integration</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Consulting"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Consulting</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce AppExchange"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce AppExchange</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Maintenance & Support"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Maintenance & Support</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Implementation"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Salesforce Implementation</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "FrontEnd" && (
                <div className="tech-list-animated">
                  <ul className="tech-list">
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={angular}
                            alt="Angular Front End"
                            title="Angular"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Angular</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={react}
                            alt="React Front End"
                            title="React"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title">React</div>
                      </a>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={vue}
                          alt="Vue Front End"
                          title="Vue"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">Vue</div>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={next}
                          alt="Next Front End"
                          title="Next"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">Next</div>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={nuxtJs}
                          alt="NuxtJS Front End"
                          title="NuxtJS"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">NuxtJS</div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "BackEnd" && (
                <div className="tech-list-animated"> 
                  <ul className="tech-list">
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={nodejs}
                            alt="NodeJS Back End"
                            title="NodeJS"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">NodeJS</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={java}
                            alt="Java Back End"
                            title="Java"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Java</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={dotnet}
                            alt="DotNet Back End"
                            title="DotNet"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">DotNet</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={php}
                            alt="PHP Back End"
                            title="PHP"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">PHP</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={laravel}
                            alt="Laravel Back End"
                            title="Laravel"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Laravel</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={codeigniter}
                            alt="Codeigniter Back End"
                            title="Codeigniter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Codeigniter</div>
                      </a>
                    </li>
                   
                  </ul>
                </div>
              )}
              {activeTab === "Mobile" && (
                <div className="tech-list-animated">
                  <ul className="tech-list">
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={android}
                            alt="Android Mobile"
                            title="Android"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Android</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={ios}
                            alt="iOS Mobile"
                            title="iOS"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">iOS</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={reactnative}
                            alt="React Mobile"
                            title="React"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">React</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={flutter}
                            alt="Flutter Mobile"
                            title="Flutter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Flutter</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "CMS" && (
                <div className="tech-list-animated">
                  <ul className="tech-list">
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={wordpress}
                            alt="Wordpress CMS"
                            title="Wordpress"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Wordpress</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={shopify}
                            alt="Shopify CMS"
                            title="Shopify"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Shopify</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={webflow}
                            alt="Webflow CMS"
                            title="Webflow"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Webflow</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={wix}
                            alt="Wix CMS"
                            title="Wix"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Wix</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div className="tech-icon">
                          <img
                            src={codeigniter}
                            alt="Codeigniter CMS"
                            title="Codeigniter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div className="text-slate-400 tech-title ">Codeigniter</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "AI & ML" && (
                <div className="tech-list-animated">
                  <ul className="tech-list">
                    <li>
                      <div className="tech-icon">
                        <img
                          src={openAI}
                          alt="OpenAI"
                          title="OpenAI"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">OpenAI</div>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={tensorflow}
                          alt="Tensorflow"
                          title="Tensorflow"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">Tensorflow</div>
                    </li><li>
                      <div className="tech-icon">
                        <img
                          src={openCV}
                          alt="OpenCV"
                          title="OpenCV"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">OpenCV</div>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={chatbots}
                          alt="ChatBots"
                          title="ChatBots"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">ChatBots</div>
                    </li>
                    <li>
                      <div className="tech-icon">
                        <img
                          src={copilot}
                          alt="Copilot"
                          title="Copilot"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div className="text-slate-400 tech-title ">Copilot</div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="text-center mt-10">
                <a
                className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white"
                 href="mailto:about@apheliossolution.com?subject=Developer%20Consultation&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20hire%20a%20developer%20consultation."
                >
                Hire a Developer Consultation
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
