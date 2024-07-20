import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";
import aboutImage from "../assets/images/about.jpg";
import CountUp from "react-countup";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Aphelios Solution LLP - Software Development Partner</title>
        <meta
          name="google-site-verification"
          content="YTdwCrnCL_jKFS9VQQk8AS_DgBRg8giKnOgQE0--tV4"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
        <meta
          name="description"
          content="Aphelios Solution LLP provides comprehensive IT solutions, including Salesforce CRM consulting and custom software development for various industries."
        />
        <meta
          name="keywords"
          content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, UI/UX, Application Development, Mobile App, Website, eCommerce"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Aphelios Solution LLP" />
        <link rel="canonical" href="https://www.apheliossolution.in" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.apheliossolution.com"
        />
      </Helmet>
      <main>
        <section className="relative md:py-24 py-16" id="industries">
          <div className="container relative">
          <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Industry Solutions
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                {/* <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Lightning Development
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Harness the power of Salesforce Lightning to create dynamic
                    and responsive applications. Our experienced developers
                    specialize in building Lightning components and applications
                    that enhance user experience and streamline business
                    processes.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Apex Development
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Unlock the full potential of Salesforce with custom Apex
                    development. Our team delivers robust and scalable solutions
                    tailored to your specific requirements, ensuring seamless
                    integration and enhanced functionality.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Visualforce Development
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Enhance your Salesforce applications with custom Visualforce
                    pages. We design and develop Visualforce solutions that
                    provide a personalized user interface and improve overall
                    application performance.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce API Integration{" "}
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Integrate Salesforce with your existing systems seamlessly
                    using our API integration services. We ensure smooth data
                    flow and synchronization across platforms, enhancing
                    operational efficiency and data accuracy.
                  </p>
                </div> */}

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Healthcare</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Transform patient care and streamline healthcare operations with Salesforce for Healthcare. Our solutions enable healthcare providers to manage patient records, schedule appointments, and track patient interactions efficiently. We help you implement HIPAA-compliant systems that improve patient engagement and care coordination.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Finance</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Enhance financial services with Salesforce for Finance. Our customized solutions help financial institutions manage customer relationships, streamline operations, and ensure compliance with industry regulations. From wealth management to loan processing, we provide tools that drive efficiency and growth.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Retail</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Revolutionize the retail experience with Salesforce for Retail. Our services help retailers manage customer data, optimize supply chains, and create personalized marketing campaigns. We enable seamless integration with e-commerce platforms, providing a unified view of customer interactions across all channels.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Education</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Empower educational institutions with Salesforce for Education. We provide solutions for managing student information, admissions, and alumni relations. Our services help educational institutions enhance student engagement, streamline administrative processes, and improve communication with stakeholders.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Non-Profits</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Maximize impact and efficiency with Salesforce for Non-Profits. Our solutions help non-profit organizations manage donor relationships, track fundraising activities, and measure program outcomes. We provide tools that enable better resource allocation and improved stakeholder engagement.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Real Estate</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Optimize property management and sales with Salesforce for Real Estate. Our customized solutions help real estate professionals manage listings, track leads, and streamline transactions. We provide tools that enhance client relationships and improve operational efficiency.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Manufacturing</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Drive operational excellence with Salesforce for Manufacturing. Our solutions help manufacturers manage supply chains, track production processes, and optimize inventory. We enable real-time visibility into operations, improving decision-making and productivity.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Logistics</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Enhance logistics and supply chain management with Salesforce for Logistics. Our services help logistics companies manage transportation, track shipments, and optimize routes. We provide tools that improve operational efficiency and customer satisfaction.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Telecom</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Transform telecommunications with Salesforce for Telecom. Our solutions help telecom companies manage customer interactions, track service requests, and optimize network performance. We enable seamless integration with billing systems and provide tools for better customer service.
  </p>
</div>

<div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
  <h6 className="font-semibold mb-5 text-xl">Salesforce for Insurance</h6>
  <p className="text-slate-400 max-w-xl mb-6">
    Streamline insurance processes with Salesforce for Insurance. Our customized solutions help insurance companies manage policies, track claims, and improve customer interactions. We provide tools that enhance operational efficiency and ensure compliance with industry regulations.
  </p>
</div>

              </div>
            </div>
          </div>
        </section>

        <div id="get-in-touch">
          <GetInTouch />
        </div>
      </main>
      <Footer />
      <Switcher />
      <Navbar />
    </>
  );
}
