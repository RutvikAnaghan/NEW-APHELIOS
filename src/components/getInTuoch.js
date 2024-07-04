import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";
import { postData } from "../services/consultFormService";
import { toast } from "react-toastify";
import { Helmet } from 'react-helmet';

import bg from "../assets/images/bg/2.png";

export default function GetInTouch() {
  const initialFormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    projectDescription: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialFormState);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await postData("/formSubmissions", formData);
      toast.success("Thank you, our team will get back to you shortly");
      setFormData(initialFormState);
    } catch (error) {
      toast.error("Error: " + error);
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
          content="Aphelios, Salesforce development, CRM consulting, web development, IT services, Salesforce CRM, trailhead,salesforce,CRM,Development,consultant,Salesforce,salesforce,salesforcelogin,salesforceCareers,salesforce,trailhead,salesforceCertification,salesforce,trailhead,salesforceJobs,crm,sales,sales,saas,logincrm,customer service,cloud computing,what is crm,crm system,crm software,UI/UX,Designing,Application,AppDevelopment,MobileApp,Website,WebApplication,CrossPlatform,eCommerce,AngularJS,Angular,HTML,CSS,React,ReactNative,IOS,Android"
        />
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="revisit-after" content="3 days" />
        <meta name="author" content="Aphelios Solution LLP" />
        <link rel="canonical" href="https://www.apheliossolution.com" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.apheliossolution.com"
        />
      </Helmet> 
    <section
      className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="contact"
      style={{ backgroundImage: `url(${bg})` }}
    >
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4">
            We'd love to hear about your project!
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Want assistance implementing new strategies to kick-start your
            company's growth? Get in touch with us to discuss your problems and
            business goals. We can build a solution tailored to your needs.
          </p>
        </div>

        <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-6 contactus dark:shadow-gray-700 bg-white dark:bg-slate-900">
          <div className="lg:col-span-4 md:col-span-6 dark:bg-slate-900 ">
            <div className="contact-info rounded-md shadow p-6 back-ground-style  dark:bg-slate-900 dark:shadow-gray-700">
              <span className="font-semibold text-2xl leading-normal mb-4">
                Contact Information
              </span>
              <p className="text-slate-400 max-w-xl mx-auto mb-5">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <ul>
                <li className="ml-0-important">
                  <a
                    href="tel:+919979845155"
                    className="text-slate-400 max-w-xl mx-auto"
                  >
                    <FaPhoneAlt /> +91 99798-45155
                  </a>
                </li>
                <li className="ml-0-important">
                  <a
                    href="mailto:about@apheliossolution.com"
                    className="text-slate-400 max-w-xl mx-auto"
                  >
                    <FaEnvelope /> about@apheliossolution.com
                  </a>
                </li>
                <li className="ml-0-important">
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-400 max-w-xl mx-auto"
                  >
                    <FaSkype /> Aphelios Solution LLP
                  </a>
                </li>
              </ul>
              <p className="check-icon-p">
                <svg
                  width="50"
                  height="50"
                  viewBox="0 0 22 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="11" cy="11" r="11" fill="#16BBEF"></circle>
                  <path
                    d="M6.41797 11L9.3644 14.2083L15.1263 8.25"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
                <span className="text-slate-400 max-w-xl mx-auto mb-5">
                  We guarantee 100% security of your information. We will not
                  share the details you provide above with anyone. Your email
                  won’t be used for spamming.
                </span>
              </p>
            </div>
          </div>

          <div className="lg:col-span-8 md:col-span-6">
            <div className="lg:ms-5">
              <div className="dark:bg-slate-900 dark:shadow-gray-700 rounded-md p-6">
                <form onSubmit={handleSubmit}>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="firstName" className="font-semibold">
                        First Name
                      </label>
                      <input
                        name="firstName"
                        id="firstName"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="lastName" className="font-semibold">
                        Last Name
                      </label>
                      <input
                        name="lastName"
                        id="lastName"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">
                        Email
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="phone" className="font-semibold">
                        Phone
                      </label>
                      <input
                        name="phone"
                        id="phone"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Phone"
                        maxLength={10}
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label
                        htmlFor="projectDescription"
                        className="font-semibold"
                      >
                        Project Description
                      </label>
                      <input
                        name="projectDescription"
                        id="projectDescription"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Project Description"
                        value={formData.projectDescription}
                        onChange={handleChange}
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="message" className="font-semibold">
                        Message
                      </label>
                      <textarea
                        name="message"
                        id="message"
                        className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Message"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>
                  </div>
                  <button
                    type="submit"
                    id="submit"
                    name="send"
                    className="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white mt-2"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
