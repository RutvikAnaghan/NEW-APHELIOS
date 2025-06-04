import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

import bg from '../assets/images/bg/2.png'

export default function CaseStudies(){

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
                <h3 className="font-semibold text-2xl leading-normal mb-4">Case Studies</h3>
                <p className="text-slate-400 max-w-xl mx-auto">Discover how we've helped businesses overcome challenges and achieve growth through tailored, impactful solutions.</p>
           
            </div>
            <div className="CaseStudies">
  <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
    {/* AI Case Study */}
    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
      <h6 className="font-semibold mb-5 text-xl">AI-Driven Insights</h6>
      <p className="text-slate-400 mb-5">
        Leveraged machine learning to improve customer retention by 30% for a leading eCommerce client.
      </p>
      <ul className="list-none text-slate-400">
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Customer behavior prediction</span>
        </li>
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Real-time product recommendations</span>
        </li>
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Data-driven personalization</span>
        </li>
      </ul>
      <Link
       to="/about-us"
        className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
      >
        Read More
      </Link>
    </div>

    {/* Automation Case Study */}
    <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
      <h6 className="font-semibold mb-5 text-xl">Process Automation</h6>
      <p className="text-slate-400 mb-5">
        Automated key operational workflows, reducing manual tasks by 60% for a logistics provider.
      </p>
      <ul className="list-none text-slate-400">
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Task scheduling and tracking</span>
        </li>
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Automated notifications and updates</span>
        </li>
        <li className="mb-1 flex ml-0-important">
          <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
          <span>Reduced errors and faster delivery</span>
        </li>
      </ul>
      <Link
        to="/about-us"
        className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
      >
        Read More
      </Link>
    </div>

    {/* Business Growth Case Study */}
    <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 h-fit">
      <div className="p-6 bg-white dark:bg-slate-900 rounded-md">
        <h6 className="font-semibold mb-5 text-xl">Accelerated Business Growth</h6>
        <p className="text-slate-400 mb-5">
          Helped a SaaS startup triple their user base in 6 months through digital optimization and scalable infrastructure.
        </p>
        <ul className="list-none text-slate-400">
          <li className="mb-1 flex">
            <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
            <span>Scalable backend architecture</span>
          </li>
          <li className="mb-1 flex">
            <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
            <span>Enhanced user acquisition funnel</span>
          </li>
          <li className="mb-1 flex">
            <i className="mdi mdi-check-circle-outline text-teal-500 text-[20px] align-middle me-2"></i>
            <span>Optimized onboarding and retention</span>
          </li>
        </ul>
        <Link
          to="/about-us"
          className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
        >
          Read More
        </Link>
     </div>
    </div>
  </div>
</div>
        </div>
    </section>
        </>
    )
}