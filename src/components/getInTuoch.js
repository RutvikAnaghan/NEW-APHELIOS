import React from "react";
import { FaPhoneAlt, FaEnvelope, FaSkype } from "react-icons/fa";

import bg from '../assets/images/bg/2.png'

export default function GetInTouch() {
  return (
    <section
      className="relative lg:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="contact"
      style={{backgroundImage:`url(${bg})`}}
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
              <span className="font-semibold text-2xl leading-normal mb-4">Contact Information</span>
              <p className="text-slate-400 max-w-xl mx-auto mb-5">
                Fill up the form and our Team will get back to you within 24
                hours.
              </p>
              <ul>
                <li className="ml-0-important">
                  <a href="tel:+919979845155" className="text-slate-400 max-w-xl mx-auto">
                    <FaPhoneAlt /> +91 99798-45155
                  </a>
                </li>
                <li className="ml-0-important">
                  <a href="mailto:about@apheliossolution.com" className="text-slate-400 max-w-xl mx-auto">
                    <FaEnvelope /> about@apheliossolution.com
                  </a>
                </li>
                <li className="ml-0-important">
                  <a href="" target="_blank" rel="noopener noreferrer" className="text-slate-400 max-w-xl mx-auto">
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
                <form>
                  <div className="grid lg:grid-cols-12 grid-cols-1 gap-3">
                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">
                        First Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="name" className="font-semibold">
                        Last Name:
                      </label>
                      <input
                        name="name"
                        id="name"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Name :"
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">
                        Email:
                      </label>
                      <input
                        name="email"
                        id="email"
                        type="email"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <label htmlFor="email" className="font-semibold">
                        Phone:
                      </label>
                      <input
                        name="Phone"
                        id="Phone"
                        type="text"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Email :"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="subject" className="font-semibold">
                      Project Description:
                      </label>
                      <input
                        name="subject"
                        id="subject"
                        className="mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Subject :"
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <label htmlFor="comments" className="font-semibold">
                        Comment:
                      </label>
                      <textarea
                        name="comments"
                        id="comments"
                        className="mt-2 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-100 dark:border-gray-800 focus:ring-0"
                        placeholder="Message :"
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
  );
}
