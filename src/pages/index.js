import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Link, Element } from "react-scroll";
import { Helmet } from "react-helmet";
import ModalVideo from "react-modal-video";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import Navbar from "../components/navbar";
import About from "../components/about";
import Services from "../components/services";
import AgencyTab from "../components/agencyTab";
import Cta from "../components/cta";
import Client from "../components/client";
import CaseStudies from "../components/caseStudies";
import GetInTouch from "../components/getInTuoch";
import Footer from "../components/footer";
import WhyAphelios from "../components/whyAphelios";

import bg from "../assets/images/bg/2.png";

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
          content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, UI/UX, Application Development, Mobile App, Website, eCommerce, Salesforce development
,Salesforce migration
,Salesforce consulting
,Salesforce implementation
,Salesforce integration
,Salesforce customization
,Salesforce managed services
,Salesforce support
,Salesforce solutions
,Salesforce experts
,Salesforce Lightning development
,Salesforce Apex development
,Salesforce Visualforce development
,Salesforce API integration
,Salesforce data migration
,Salesforce CRM
,Salesforce automation
,Salesforce mobile app development
,Salesforce app development
,Salesforce cloud services
,Salesforce for healthcare
,Salesforce for finance
,Salesforce for retail
,Salesforce for education
,Salesforce for non-profits
,Salesforce for real estate
,Salesforce for manufacturing
,Salesforce for logistics
,Salesforce for telecom
,Salesforce for insurance
,Best Salesforce developers
,Top Salesforce consultants
,Certified Salesforce experts
,Experienced Salesforce developers
,Leading Salesforce development company
,Affordable Salesforce services
,Reliable Salesforce migration
,Professional Salesforce implementation
,Custom Salesforce solutions
,Trusted Salesforce partner
,Salesforce development in india
,Salesforce migration services in india
,Salesforce consultants in india
,Salesforce development in surat
,Salesforce migration services in surat
,Salesforce consultants in surat
,Salesforce development in Gujarat
,Salesforce migration services in Gujarat
,Salesforce consultants in Gujarat
,Salesforce experts near me
,Local Salesforce development company
,How to migrate to Salesforce
,Benefits of Salesforce development
,Custom Salesforce app development
,Salesforce integration best practices
,Top Salesforce migration tools
,Salesforce development trends
,Choosing the right Salesforce consultant
,Salesforce CRM customization
,Salesforce Lightning migration
,Salesforce data migration strategies"
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

<Navbar />
      <main>
        <Element name="home">
          <HeroSection />
        </Element>
        <Element name="about">
          <About />
        </Element>
        <Element name="services">
          <Services />
        </Element>
        <AgencyTab />
        <Cta />
        <Client />
        {/* <Element name="pricing"> */}
          <CaseStudies />
        {/* </Element> */}
        <Element name="blog">
          <WhyAphelios />
        </Element>
        <Element name="get-in-touch">
          <GetInTouch />
        </Element>
      </main>
      <Footer />
      {/* <Switcher /> */}
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
        <div className="flex justify-center mt-6 relative">
          <HeroContent setOpen={setOpen} />
        </div>
      </div>
    </section>
  );
}


function HeroContent({ setOpen }) {
  return (
    <div className="text-center max-w-3xl">
      <h1 className="font-semibold lg:leading-normal leading-normal tracking-wide text-4xl mb-5">
      Empowering Your Business Through Innovative AI Solutions
      </h1>
      <p className="text-slate-400 text-lg max-w-xl mx-auto">
      We specialize in building custom software solutions powered by AI that help businesses automate processes, build trust, and achieve lasting growth.
      </p>
      <div className="relative mt-6">
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