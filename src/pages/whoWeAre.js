import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import bg from "../assets/images/bg/2.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";
import aboutImage from "../assets/images/about.jpg";
import CountUp from "react-countup";

export default function HomePage() {
  const [isOpen, setOpen] = useState(false);

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
        <section className="relative md:py-24 py-16" id="about">
          <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
              <div className="md:col-span-6">
                <div className="lg:me-8">
                  <div className="relative">
                    {/* <img src={aboutImage} className="rounded-full shadow dark:shadow-gray-700" alt=""/> */}

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
                </div>
              </div>

              <div className="md:col-span-6">
                <div className="lg:ms-8">
                  <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">
                    Aphelios Solution
                  </h6>
                  <h3 className="font-semibold text-2xl leading-normal mb-4">
                    Best Salesforce Developers at Your Service
                  </h3>

                  <p className="text-slate-400 max-w-xl mb-6">
                    At Aphelios Solution, we are dedicated to providing
                    exceptional Salesforce development and migration services.
                    Our team is composed of some of the best Salesforce
                    developers in the industry, ensuring that your business
                    leverages the full potential of the Salesforce platform.
                  </p>

                  {/* <Link to="/who-we-are" className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white">Read More <i className="mdi mdi-chevron-right align-middle ms-0.5"></i></Link> */}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
          id="about"
        >
          <div className="container relative">
            {/* style={{ backgroundImage: `url(${bg})` }}
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Packages
              </h3>
            </div> */}
            <div className="Salesforce">
              <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Top Salesforce Consultants
                  </h6>

                  {/* <div className="flex mb-5">
                    <span className="text-lg font-medium">$</span>
                    <span className="price text-5xl h6 font-semibold mb-0">
                      25-35
                    </span>
                    <span className="text-lg font-medium self-end mb-1">
                      /hr
                    </span>
                  </div> */}

                  <p className="text-slate-400 max-w-xl mb-6">
                    As top Salesforce consultants, we offer expert guidance and
                    innovative solutions tailored to your unique business needs.
                    Our consultants work closely with you to understand your
                    challenges and deliver solutions that drive growth and
                    efficiency.{" "}
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Certified Salesforce Experts
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Our team of certified Salesforce experts possesses extensive
                    knowledge and experience in Salesforce development and
                    migration. We stay updated with the latest Salesforce
                    advancements to provide cutting-edge solutions that keep
                    your business ahead of the curve.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Experienced Salesforce Developers
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    With years of experience under our belt, our experienced
                    Salesforce developers are adept at creating custom solutions
                    that enhance your Salesforce platform. From Apex programming
                    to Visualforce development, we deliver high-quality services
                    that meet your specific requirements.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Leading Salesforce Development Company
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Aphelios Solution is a leading Salesforce development
                    company committed to delivering top-notch services that
                    drive business success. Our comprehensive suite of
                    Salesforce services covers everything from development to
                    implementation, ensuring a seamless experience for our
                    clients.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Affordable Salesforce Services
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    We believe that quality Salesforce services should be
                    accessible to all businesses. That’s why we offer affordable
                    Salesforce services that provide exceptional value without
                    compromising on quality. Our competitive pricing ensures you
                    get the best ROI from your Salesforce investment.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Reliable Salesforce Migration
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    When it comes to Salesforce migration, reliability is key.
                    Our reliable Salesforce migration services ensure a smooth
                    transition with minimal disruption to your business
                    operations. We handle the entire process, from data
                    migration to system integration, ensuring data integrity and
                    accuracy.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Professional Salesforce Implementation
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Our professional Salesforce implementation services are
                    designed to align with your business goals. From initial
                    planning to final execution, we ensure that your Salesforce
                    platform is set up for success, providing you with the tools
                    you need to drive business growth.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Custom Salesforce Solutions
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    Every business is unique, and so are its needs. Our custom
                    Salesforce solutions are tailored to meet your specific
                    requirements, enhancing your business processes and
                    performance. Whether it’s custom app development or
                    specialized integrations, we deliver solutions that work for
                    you.
                  </p>
                </div>

                <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md">
                  <h6 className="font-semibold mb-5 text-xl">
                    Trusted Salesforce Partner
                  </h6>
                  <p className="text-slate-400 max-w-xl mb-6">
                    At Aphelios Solution, we pride ourselves on being a trusted
                    Salesforce partner. Our commitment to excellence and client
                    satisfaction has earned us the trust of businesses across
                    various industries. We work diligently to ensure that your
                    Salesforce platform is optimized for success.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative md:py-24 py-16" id="about">
          <div className="container relative">
          {/* <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">
                    Aphelios Solution
                  </h6> */}
                  <h3 className="font-semibold text-2xl leading-normal mb-4">
                  Our Mission
                  </h3>

                  <p className="text-slate-400 max-w-xl mb-6">
                  Our mission is to empower businesses with innovative Salesforce solutions that drive growth, efficiency, and success. We are dedicated to providing high-quality, affordable services that meet the unique needs of our clients.
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
