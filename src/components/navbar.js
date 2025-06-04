    import React, { useState, useEffect } from "react";
    import { Link as RouterLink, useLocation } from "react-router-dom";
    import { Link as ScrollLink, scroller } from "react-scroll";
    import { Helmet } from "react-helmet";
    import logoDark from "../assets/images/logo-dark.png";
    import logoLight from "../assets/images/logo-light.png";
    
    export default function Navbar() {
      const [scroll, setScroll] = useState(false);
      const [menu, setMenu] = useState(false);
      const location = useLocation();
    
      useEffect(() => {
        const handleScroll = () => {
          setScroll(window.scrollY > 50);
        };
    
        window.addEventListener("scroll", handleScroll);
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    
      useEffect(() => {
        // Close menu on route change
        setMenu(false);
      }, [location]);
    
      const handleScrollLinkClick = (to) => {
        if (location.pathname !== "/") {
          // Navigate to home page first if not already there
          window.location.href = `/${to}`;
        } else {
          // Scroll to section if already on home page
          scroller.scrollTo(to, {
            smooth: true,
            duration: 1000,
          });
        }
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
              content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, trailhead, salesforce, CRM, Development, consultant, Salesforce, salesforce, salesforcelogin, salesforceCareers, salesforce, trailhead, salesforceCertification, salesforce, trailhead, salesforceJobs, crm, sales, sales, saas, logincrm, customer service, cloud computing, what is crm, crm system, crm software, UI/UX, Designing, Application, AppDevelopment, MobileApp, Website, WebApplication, CrossPlatform, eCommerce, AngularJS, Angular, HTML, CSS, React, ReactNative, IOS, Android"
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
          <nav className={`navbar ${scroll ? "is-sticky" : ""}`} id="navbar">
            <div className="container relative flex flex-wrap items-center justify-between">
              <RouterLink className="navbar-brand md:me-8" to="/">
                <img src={logoDark} className="inline-block dark:hidden aboutimage" alt="" />
                <img src={logoLight} className="hidden dark:inline-block aboutimage" alt="" />
              </RouterLink>
    
              <div className="nav-icons flex items-center lg_992:order-2 ms-auto md:ms-8">
                <button
                  data-collapse="menu-collapse"
                  type="button"
                  className="collapse-btn inline-flex items-center ms-2 text-dark dark:text-white lg_992:hidden"
                  onClick={() => setMenu(!menu)}
                >
                  <span className="sr-only">Navigation Menu</span>
                  <i className="mdi mdi-menu text-[24px]"></i>
                </button>
              </div>
    
              <div
                className={`navigation lg_992:order-1 lg_992:flex ms-auto ${
                  menu ? "" : "hidden"
                }`}
                id="menu-collapse"
              >
                <ul className="navbar-nav" id="navbar-navlist">
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="home"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      Home
                    </ScrollLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="about"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      About
                    </ScrollLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="services"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      Services
                    </ScrollLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <RouterLink className="nav-link" to="/industries">
                      Industries
                    </RouterLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="pricing"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      Case Studies
                    </ScrollLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="why-aphelios"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      Why Aphelios
                    </ScrollLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                  <RouterLink className="nav-link" to="/blog-page">
                      Blogs
                    </RouterLink>
                  </li>
                  <li className="nav-item ms-0 cursor-pointer">
                    <ScrollLink
                      className="nav-link"
                      to="get-in-touch"
                      smooth={true}
                      duration={1000}
                      spy={true}
                      activeclassName="active"
                      onClick={() => handleScrollLinkClick("")}
                    >
                      Contact us
                    </ScrollLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </>
      );
    }
    