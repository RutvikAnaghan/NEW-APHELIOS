import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from 'react-helmet';

export default function WhyAphelios(){
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
      <section className="relative md:py-24 py-16 bg-white" id="why-aphelios">
  <div className="container relative">
    <div className="grid grid-cols-1 pb-6 text-center">
      <h3 className="font-semibold text-2xl leading-normal mb-4">Why Choose Aphelios Solutions LLP?</h3>
      <p className="text-slate-400 max-w-xl mx-auto">
        Discover the power of Aphelios Solutions LLP – delivering excellence through innovative strategies, flexible models, cutting-edge technologies, and unwavering commitment.
      </p>
    </div>

    <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-10 gap-6">
      <div className="border rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full">
            <i className="mdi mdi-brain text-teal-600 text-2xl"></i>
          </div>
        </div>
        <h5 className="text-lg font-semibold mb-2">Expertise & Innovation</h5>
        <p className="text-slate-500 text-sm">
          Our expert team combines deep industry knowledge with continuous innovation to turn your vision into reality.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full">
            <i className="mdi mdi-sync text-teal-600 text-2xl"></i>
          </div>
        </div>
        <h5 className="text-lg font-semibold mb-2">Flexible Engagement Model</h5>
        <p className="text-slate-500 text-sm">
          We tailor our engagement to your project's needs and timelines, ensuring effective collaboration and efficiency.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full">
            <i className="mdi mdi-flash-outline text-teal-600 text-2xl"></i>
          </div>
        </div>
        <h5 className="text-lg font-semibold mb-2">Cutting-Edge Technologies</h5>
        <p className="text-slate-500 text-sm">
          We leverage the latest technology stacks to help you stay competitive and ahead of the innovation curve.
        </p>
      </div>

      <div className="border rounded-xl p-6 text-center hover:shadow-lg transition duration-300">
        <div className="flex justify-center mb-4">
          <div className="bg-teal-100 p-3 rounded-full">
            <i className="mdi mdi-clipboard-check-outline text-teal-600 text-2xl"></i>
          </div>
        </div>
        <h5 className="text-lg font-semibold mb-2">Transparency & Commitment</h5>
        <p className="text-slate-500 text-sm">
          We uphold a transparent and reliable work culture, embedding trust and accountability in every project.
        </p>
      </div>
    </div>
  </div>
</section>

      
        </>
    );
};