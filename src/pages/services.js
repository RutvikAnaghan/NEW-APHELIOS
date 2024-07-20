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
        <section className="relative md:py-24 py-16" id="services">
          <div className="container relative mt-5">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
              <div className="md:col-span-6">
                {/* <div className="lg:me-8">
                  <div className="relative">
                    <img src={aboutImage} className="rounded-full shadow dark:shadow-gray-700" alt=""/> 

                    <div className="absolute top-1/2 -translate-y-1/2 start-0 end-0 mx-auto size-56 flex justify-center items-center bg-white dark:bg-slate-900 rounded-full shadow dark:shadow-gray-700">
                      <div className="text-center">
                        <span className="text-teal-500 text-2xl font-semibold mb-0 block">
                          <CountUp
                            className="counter-value text-6xl font-semibold"
                            start={0}
                            end={7}
                          />
                          +
                        </span>
                        <span className="font-semibold block mt-2">
                          Years <br /> Experience
                        </span>
                      </div>
                    </div>
                  </div>
                </div> */}
              </div>

              <div className="md:col-span-6">
                <div className="lg:ms-8">
                  <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">
                    Aphelios Solution
                  </h6>
                  <h3 className="font-semibold text-2xl leading-normal mb-4">
                    Salesforce Services
                  </h3>

                  <p className="text-slate-400 max-w-xl mb-6">
                    Welcome to Aphelios Solution, your trusted partner in
                    Salesforce development and migration. Our team of Salesforce
                    experts is dedicated to providing top-notch services that
                    cater to your unique business needs. Explore our
                    comprehensive range of services designed to help you
                    leverage the full potential of Salesforce.
                  </p>

                {/* <p className="text-slate-400 max-w-xl mb-6">Welcome to Aphelios Solution, your go-to partner for exceptional website development and design services. We offer a diverse range of solutions tailored to meet your specific business needs, ensuring that your online presence is not only visually appealing but also highly functional and efficient. Explore our comprehensive suite of services designed to help you build, enhance, and maintain outstanding digital solutions.
                </p> */}
                  {/* <Link to="/who-we-are" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
          id="services"
        >
          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce Development
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
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
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce Migration
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Data Migration
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Move your data to Salesforce with confidence. Our data
                    migration experts handle the entire process, from planning
                    and mapping to execution and validation, ensuring data
                    integrity and minimal disruption to your operations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce CRM
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce CRM Solutions{" "}
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Optimize your customer relationship management with our
                    Salesforce CRM solutions. We help you implement and
                    customize Salesforce CRM to align with your business
                    processes, improving customer engagement and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce Automation
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Automation
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Automate your business processes with Salesforce automation
                    tools. Our team designs and implements automated workflows
                    and processes that increase productivity, reduce errors, and
                    save time.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce Mobile App Development
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Mobile App Development
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Stay connected on the go with our Salesforce mobile app
                    development services. We create custom mobile applications
                    that provide access to Salesforce data and functionality
                    anytime, anywhere.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce App Development
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce App Development
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Develop custom Salesforce applications tailored to your
                    business needs. Our expertise in Salesforce app development
                    ensures you get solutions that enhance your operational
                    efficiency and drive business growth.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="container relative mt-5">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Salesforce Cloud Services
              </h3>
            </div>
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Cloud Services
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Leverage the power of the cloud with our Salesforce cloud
                    services. We offer comprehensive cloud solutions, including
                    setup, configuration, and management, to ensure your
                    Salesforce environment is secure, scalable, and
                    high-performing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative md:py-24 py-16" id="services">
          <div className="container relative mt-5">
            <h3 className="font-semibold text-2xl leading-normal mb-4">
              Our Mission
            </h3>

            <p className="text-slate-400 max-w-xl mb-6">
              Our mission is to empower businesses with innovative Salesforce
              solutions that drive growth, efficiency, and success. We are
              dedicated to providing high-quality, affordable services that meet
              the unique needs of our clients.
            </p>
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
