import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link } from "react-scroll";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import Pricing from "../components/pricing";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import Switcher from "../components/switcher";

import heroImg from "../assets/images/about2.jpg";
import bg from "../assets/images/bg/2.png";
import advayan from "../assets/images/advayan_color_logo.png";
import advayanwhite from "../assets/images/advayan_white.png";

import { FiMonitor } from "../assets/icons/vander";

export default function HomePage() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Aphelios Solution LLP - Software Development Partner</title>
        <meta name="google-site-verification" content="YTdwCrnCL_jKFS9VQQk8AS_DgBRg8giKnOgQE0--tV4" />
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="description" content="Aphelios Solution LLP provides comprehensive IT solutions, including Salesforce CRM consulting and custom software development for various industries." />
        <meta name="keywords" content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, UI/UX, Application Development, Mobile App, Website, eCommerce" />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Aphelios Solution LLP" />
        <link rel="canonical" href="https://www.apheliossolution.com" />
        <link rel="alternate" hrefLang="en" href="https://www.apheliossolution.com" />
      </Helmet>

      <Navbar />
      <main>
        <HeroSection setOpen={setOpen} />
        <About />
        <Services />
        <AgencyTab />
        <Cta />
        <Client />
        <Pricing />
        <div id="get-in-touch">
          <GetInTouch />
        </div>
      </main>
      <Footer />
      <Switcher />
      <ModalVideo
        channel="youtube"
        youtube={{ mute: 0, autoplay: 0 }}
        isOpen={isOpen}
        videoId="S_CGed6E610"
        onClose={() => setOpen(false)}
      />
    </>
  );
}

function HeroSection({ setOpen }) {
  return (
    <section
      className="relative flex items-center md:h-screen py-36 bg-no-repeat bg-center bg-cover"
      id="home"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container relative">
        <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center mt-6 gap-6 relative">
          <HeroContent setOpen={setOpen} />
          <HeroImage />
        </div>
      </div>
    </section>
  );
}

function HeroContent({ setOpen }) {
  return (
    <div className="lg:col-span-7 md:me-6">
      <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl mb-5">
        Reliable Custom <br />
        Software Development
        <br />
        Partner in{" "}
        <IndustryHighlight />
      </h1>
      <p className="text-slate-400 text-lg max-w-xl">
        Whether you need a robust web presence or a customized
        Salesforce platform, we deliver innovative solutions that meet
        your unique business needs.
      </p>
      <div className="relative mt-6 space-x-1">
        <Link
          to="get-in-touch"
          smooth={true}
          duration={200}
          className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white cursor-pointer"
        >
          Consult Aphelios
        </Link>
      </div>
    </div>
  );
}

function IndustryHighlight() {
  return (
    <span className="text-teal-500 font-bold textMove">
      <div className="text-container">
        {["Ecommerce", "Fintech", "Healthcare", "Travel & Hospitality", "Real Estate"].map((industry, index) => (
          <span key={index} className="mb-2" style={{ "--i": index }}>
            {industry}<br />
          </span>
        ))}
      </div>
    </span>
  );
}

function HeroImage() {
  return (
    <div className="lg:col-span-5">
      <div className="relative">
        <img
          src={heroImg}
          className="mx-auto rounded-[150px] rounded-br-2xl shadow dark:shadow-gray-700 w-[90%]"
          alt="Hero visual representation"
        />
        <div className="overflow-hidden after:content-[''] after:absolute after:h-10 after:w-10 after:bg-teal-500/20 after:top-0 after:start-0 after:-z-1 after:rounded-lg after:animate-[spin_10s_linear_infinite]"></div>
        <SalesforceFeature />
        <StrategicPartner />
      </div>
    </div>
  );
}

function SalesforceFeature() {
  return (
    <div className="absolute flex justify-between items-center bottom-16 md:-start-10 -start-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-60 m-3">
      <div className="flex items-center">
        <div className="flex items-center justify-center h-[65px] min-w-[65px] bg-teal-500/5 text-teal-500 text-center rounded-full me-3">
          <FiMonitor className="h-6 w-6" />
        </div>
        <div className="flex-1">
          <span className="text-lg font-semibold">Salesforce Solutions</span>
        </div>
      </div>
    </div>
  );
}

function StrategicPartner() {
  return (
    <div className="absolute top-16 md:-end-10 -end-5 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 w-48 m-3">
      <h5 className="text-lg font-semibold mb-3 ml-3">Strategic Partner</h5>
      <div className="flex justify-between mt-3 mb-2">
        <RouterLink target="_blank" to="https://www.advayan.com/">
          <img src={advayan} className="inline-block dark:hidden" alt="Advayan logo" />
          <img src={advayanwhite} className="hidden dark:inline-block" alt="Advayan logo" />
        </RouterLink>
      </div>
    </div>
  );
}