import React, { useState } from "react";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";
import herobg from "../assets/images/sfbg5.png";
import {
  SalesforceData,
  WebDevelopmentData,
  MobileAppDevelopmentData,
  WebDesignData,
  CMS_EcommerceData,
  PaymentShippingAPIData,
} from "../data/data";

export default function Services() {
  const [activeTab, setActiveTab] = useState("Salesforce"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
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
        <section
          className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
          id="services"
          style={{  backgroundImage: `url(${herobg})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center', }}
        >
          <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
              <div className="md:col-span-9">
                <div className="lg:ms-8">
                  <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">
                    Aphelios Solution
                  </h6>
                  <h3 className="font-semibold text-2xl leading-normal mb-4">
                    Transform Your Business with Cutting-Edge Technology
                    Solutions
                  </h3>

                  <p className="max-w-xl mb-6">
                    At Aphelios Solution, we provide a comprehensive range of
                    technology services designed to elevate your business
                    operations. Our expert team specializes in delivering
                    top-notch solutions across various domains, ensuring that
                    your business stays ahead in a competitive landscape.
                    Explore our offerings to discover how we can help you
                    achieve your goals.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5 cursor-pointer"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
              {/* <div className="md:col-span-3">
                <div className="lg:me-8">
                  <div className="relative">
                    <img src={sfimg} alt="" />
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        <section className="relative md:py-24 py-16" id="industries">
          <div className="navDiv text-center">
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "Salesforce" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Salesforce")}
            >
              Salesforce Development
            </a>
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "Web" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Web")}
            >
              Website Development
            </a>
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "Mobile" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Mobile")}
            >
              Mobile App Development
            </a>
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "Design" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Design")}
            >
              Design
            </a>
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "CMS" ? "active" : ""
              }`}
              onClick={() => handleTabClick("CMS")}
            >
              CMS & Ecommerce Development
            </a>
            <a
              className={`hover-line dark:text-white cursor-pointer ${
                activeTab === "Payment" ? "active" : ""
              }`}
              onClick={() => handleTabClick("Payment")}
            >
              Payment and shipping API integration solutions
            </a>
            <div className="animation start-hom"></div>
          </div>

          <div className="tab-content">
            {activeTab === "Salesforce" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {SalesforceData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === "Web" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {WebDevelopmentData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
            {activeTab === "Mobile" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {MobileAppDevelopmentData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "Design" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {WebDesignData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "CMS" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {CMS_EcommerceData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === "Payment" && (
              <div className="container relative">
                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 grid-cols-1 gap-6 mt-6">
                  {PaymentShippingAPIData.map((item, index) => {
                    let Icon = item.icon;
                    return (
                      <div
                        className="group rounded-md shadow dark:shadow-gray-700 relative bg-white dark:bg-slate-900 p-6 overflow-hidden min-h-385"
                        key={index}
                      >
                        <div className="flex items-center justify-center size-14 -rotate-45 bg-gradient-to-r from-transparent to-teal-500/10 text-teal-500 text-center rounded-full group-hover:bg-teal-500/10 duration-500">
                          <Icon className="size-6 rotate-45" />
                        </div>

                        <div className="content mt-6 relative z-1">
                          <Link
                            to=""
                            className="title text-lg font-semibold hover:text-teal-500 dark:text-teal-500"
                          >
                            {item.title}
                          </Link>
                          <p className="text-slate-400 mt-3">{item.desc}</p>
                        </div>

                        <div className="absolute bottom-0 -end-16">
                          <Icon className="size-48 text-teal-500 opacity-[0.04] dark:opacity-[0.04] group-hover:opacity-10 duration-500" />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
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
