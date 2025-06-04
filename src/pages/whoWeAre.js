import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";

import bg from "../assets/images/bg/2.png";
import herobg from "../assets/images/sfbg5.png";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import Switcher from "../components/switcher";
import GetInTouch from "../components/getInTuoch";
import sf from "../assets/images/techicon/about/salesforce.png";
import Certifiedexp from "../assets/images/techicon/about/Certified-Salesforce-Experts.png";
import Affordable from "../assets/images/techicon/about/Affordable-Salesforce-Service.png";
import Custom from "../assets/images/techicon/about/Custom-Salesforce-Solutions.png";
import Experienced from "../assets/images/techicon/about/Experienced-Salesforce-Developers.png";
import Leading from "../assets/images/techicon/about/Leading-Salesforce-Development-Company.png";
import Professional from "../assets/images/techicon/about/Professional-Salesforce-Implementation.png";
import Reliable from "../assets/images/techicon/about/Reliable-Salesforce-Migration.png";
import Trusted from "../assets/images/techicon/about/Trusted-Salesforce-Partner.png";

import CountUp from "react-countup";

export default function WhoWeAre() {
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
        <section
          className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
          id="about"
          style={{ backgroundImage: `url(${herobg})` }}
        >
          <div className="container relative">
            <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
              <div className="md:col-span-9">
                <div className="lg:ms-8">
                  <h6 className="text-teal-500 text-sm font-semibold uppercase mb-2">
                    Aphelios Solution
                  </h6>
                  <h3 className="font-semibold text-2xl leading-normal mb-4">
                    Best Salesforce Developers at Your Service
                  </h3>

                  <p className="max-w-xl mb-6">
                    At Aphelios Solution, we are committed to delivering
                    top-notch Salesforce development and Salesforce migration
                    services. Our team of expert Salesforce developers is
                    recognized as the best in the industry, ensuring your
                    business maximizes the full potential of the Salesforce
                    platform. With our certified Salesforce experts, you can
                    trust us to provide tailored solutions that drive
                    efficiency, growth, and success.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5 cursor-pointer"
                  >
                    Get Started Today
                  </Link>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="lg:me-8">
                  <div className="relative">
                    {/* <img src={apheliosLogo} alt=""/> */}

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
            </div>
          </div>
        </section>
        <section
          className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
          id="about"
          style={{ backgroundImage: `url(${bg})` }}
        >
          <div className="container relative">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                About Aphelios Solution
              </h3>

              <p className="text-slate-400 mb-6">
                Aphelios Solution is a premier IT service provider specializing
                in a wide range of services including Salesforce Development,
                Website Development, Mobile App Development, Web Design, CMS &
                Ecommerce Development, and Payment and Shipping API Integration
                Solutions. Our mission is to empower businesses by offering
                innovative and customized solutions that enhance operational
                efficiency and drive digital transformation. With a team of
                skilled professionals and a commitment to excellence, Aphelios
                Solution stands out as a trusted partner in delivering top-tier
                IT solutions tailored to your unique business needs.
              </p>
            </div>
          </div>
          <div className="container relative">
            <div className="Salesforce">
              <div className="mt-6 space-y-6 ">
                <div className="flex justify-start mar-r onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={sf}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Top Salesforce Consultants
                        </h6>
                        <p className="text-slate-400 mb-6">
                          As top Salesforce consultants, we offer expert
                          guidance and innovative solutions tailored to your
                          unique business needs. Our consultants work closely
                          with you to understand your challenges and deliver
                          solutions that drive growth and efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mar-l onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Certifiedexp}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Certified Salesforce Experts
                        </h6>
                        <p className="text-slate-400 mb-6">
                          Our team of certified Salesforce experts possesses
                          extensive knowledge and experience in Salesforce
                          development and migration. We stay updated with the
                          latest Salesforce advancements to provide cutting-edge
                          solutions that keep your business ahead of the curve.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mar-r onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Experienced}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Experienced Salesforce Developers
                        </h6>
                        <p className="text-slate-400 mb-6">
                          With years of experience under our belt, our
                          experienced Salesforce developers are adept at
                          creating custom solutions that enhance your Salesforce
                          platform. From Apex programming to Visualforce
                          development, we deliver high-quality services that
                          meet your specific requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mar-l onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Leading}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Leading Salesforce Development Company
                        </h6>
                        <p className="text-slate-400 mb-6">
                          Aphelios Solution is a leading Salesforce development
                          company committed to delivering top-notch services
                          that drive business success. Our comprehensive suite
                          of Salesforce services covers everything from
                          development to implementation, ensuring a seamless
                          experience for our clients.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mar-r onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Affordable}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Affordable Salesforce Services
                        </h6>
                        <p className="text-slate-400 mb-6">
                          We believe that quality Salesforce services should be
                          accessible to all businesses. That’s why we offer
                          affordable Salesforce services that provide
                          exceptional value without compromising on quality. Our
                          competitive pricing ensures you get the best ROI from
                          your Salesforce investment.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mar-l onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Reliable}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Reliable Salesforce Migration
                        </h6>
                        <p className="text-slate-400 mb-6">
                          When it comes to Salesforce migration, reliability is
                          key. Our reliable Salesforce migration services ensure
                          a smooth transition with minimal disruption to your
                          business operations. We handle the entire process,
                          from data migration to system integration, ensuring
                          data integrity and accuracy.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mar-r onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Professional}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Professional Salesforce Implementation
                        </h6>

                        <p className="text-slate-400 mb-6">
                          Our professional Salesforce implementation services
                          are designed to align with your business goals. From
                          initial planning to final execution, we ensure that
                          your Salesforce platform is set up for success,
                          providing you with the tools you need to drive
                          business growth.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-end mar-l onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Custom}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Custom Salesforce Solutions
                        </h6>
                        <p className="text-slate-400 mb-6">
                          Every business is unique, and so are its needs. Our
                          custom Salesforce solutions are tailored to meet your
                          specific requirements, enhancing your business
                          processes and performance. Whether it’s custom app
                          development or specialized integrations, we deliver
                          solutions that work for you.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex justify-start mar-r onhover">
                  <div className="group p-6 relative overflow-hidden shadow dark:shadow-gray-700 bg-white dark:bg-slate-900 rounded-md w-full md:w-1/2">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                      <div className="md:col-span-3">
                        <img
                          src={Trusted}
                          className="text-lg font-medium max-w"
                          alt=""
                        />
                      </div>
                      <div className="md:col-span-9">
                        <h6 className="font-semibold mb-5 text-xl">
                          Trusted Salesforce Partner
                        </h6>
                        <p className="text-slate-400 mb-6">
                          At Aphelios Solution, we pride ourselves on being a
                          trusted Salesforce partner. Our commitment to
                          excellence and client satisfaction has earned us the
                          trust of businesses across various industries. We work
                          diligently to ensure that your Salesforce platform is
                          optimized for success.
                        </p>
                      </div>
                    </div>
                  </div>
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
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Our Mission
              </h3>

              <p className="text-slate-400 mb-6">
                At Aphelios Solution, our mission is to empower businesses with
                cutting-edge technology solutions that drive growth, enhance
                efficiency, and transform digital experiences. As a leading IT
                service provider, we are committed to delivering excellence
                across various sectors, ensuring our clients stay ahead in a
                competitive landscape.
              </p>
            </div>
          </div>

          <div className="container relative">
            <div className="grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 mt-6 gap-6">
              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">
                    Salesforce Development
                  </h6>
                  <p className="text-slate-400 mb-5">
                    We specialize in Salesforce Development, providing
                    innovative solutions that cater to your unique business
                    needs. Our Certified Salesforce Experts excel in Salesforce
                    Lightning, Salesforce Vlocity, Salesforce Sales Cloud, and
                    Salesforce Service Cloud. As Top Salesforce Consultants, we
                    offer unparalleled guidance and support, ensuring your
                    Salesforce platform is optimized for success.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">
                    Website Development
                  </h6>
                  <p className="text-slate-400 mb-5">
                    Our Website Development services are designed to create
                    robust, scalable, and high-performing web applications. We
                    offer Laravel Development, Node JS Development, .NET
                    Development, and Python Development. Our Expert Developers
                    leverage the latest technologies to deliver custom solutions
                    that align with your business objectives.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">
                    Mobile App Development
                  </h6>
                  <p className="text-slate-400 mb-5">
                    In the realm of Mobile App Development, we provide
                    comprehensive services for iOS App Development, Android App
                    Development, React Native App Development, and Flutter App
                    Development. Our Best Mobile App Developers are adept at
                    creating intuitive and user-friendly apps that enhance your
                    digital presence.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">Web Design</h6>
                  <p className="text-slate-400 mb-5">
                    Our Web Design team excels in creating visually stunning and
                    responsive websites. We offer Responsive Website Design,
                    Angular & AngularJS Development, ReactJs Development, and
                    Bootstrap solutions. Our Expert Web Designers ensure that
                    your website is not only aesthetically pleasing but also
                    functional and user-centric.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">
                    CMS & Ecommerce Development
                  </h6>
                  <p className="text-slate-400 mb-5">
                    At Aphelios Solution, we provide top-notch CMS & Ecommerce
                    Development services. Our expertise includes Shopify
                    Development, WordPress Development, Magento Development, and
                    Opencart Development. We also offer Custom Development
                    tailored to your specific needs, ensuring seamless and
                    efficient online shopping experiences.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
                </div>
              </div>

              <div className="group p-[1px] relative overflow-hidden shadow dark:shadow-gray-700 rounded-md bg-gradient-to-tr from-teal-500 to-teal-700 onhover">
                <div className="p-6 bg-white dark:bg-slate-900 rounded-md min-vh-100">
                  <h6 className="font-semibold mb-5 text-xl">
                    Payment and Shipping API Integration Solutions
                  </h6>
                  <p className="text-slate-400 mb-5">
                    We understand the importance of smooth transactions and
                    logistics. Our Payment and Shipping API Integration
                    Solutions include Amazon API Integration, Google Pay
                    Integration, PayPal API Integration, WooCommerce
                    Integration, and eBay API Integration. Our Best Developers
                    ensure that your payment and shipping processes are
                    efficient and reliable.
                  </p>
                  <Link
                    to="mailto:about@apheliossolution.com?subject=Custom%20requirements%20service&body=Hello,%0D%0A%0D%0AI%20would%20like%20to%20book%20a%20Custom%20service."
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500/5 hover:bg-teal-500 text-teal-500 hover:text-white w-full mt-5"
                  >
                    Talk to us
                  </Link>
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
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Commitment to Excellence
              </h3>

              <p className="text-slate-400 mb-6">
                At Aphelios Solution, we pride ourselves on being a Trusted IT
                Partner for businesses across various industries. Our commitment
                to excellence, innovation, and client satisfaction drives us to
                deliver Top IT Service Solutions that not only meet but exceed
                expectations. Whether you need Custom IT Solutions, Expert IT
                Developers, or Leading IT Development Services, we are here to
                help your business thrive.
              </p>
            </div>
          </div>
        </section>
        <div id="get-in-touch">
          <GetInTouch />
        </div>
      </main>
      <Footer />
      {/* <Switcher /> */}
      <Navbar />
    </>
  );
}
