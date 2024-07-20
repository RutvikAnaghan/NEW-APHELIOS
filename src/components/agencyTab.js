import React, { useState } from "react";
import { Helmet } from 'react-helmet';

export default function AgencyTab() {
  const [activeIndex, setActiveIndex] = useState(1);
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
        <link rel="canonical" href="https://www.apheliossolution.in" />
        <link
          rel="alternate"
          hrefLang="en"
          href="https://www.apheliossolution.com"
        />
      </Helmet>
    <section className="realtive md:py-24 py-16">
      <div className="container relative">
        <div className="grid grid-cols-1 pb-6 text-center">
          <h3 className="font-semibold text-2xl leading-normal mb-4 text-margin">
            Accelerating Transformation through Software Solutions bringing
            Agility, Scalability & Growth
          </h3>

          <p className="text-slate-400 mx-auto mt-6">
            We assist you in striking the perfect balance between tackling
            business challenges, meeting new demands, and speeding up your
            digital transformation. Our expertise lies in crafting effective
            software solutions that bring your ideas to life. Whether it's
            design, development, testing, or maintenance, we partner with you at
            every phase of your software creation or digital transformation
            process. Using a tailored agile methodology, we streamline your path
            to enhance business results.
          </p>
        </div>
        <div class="row mt-10">
          <div class="col-12">
            <div class="statastic-wrapper">
              <div class="statastic-block">
                <h4 class="stats-number">
                  <span>7</span>+
                </h4>
                <p className="dark:text-white">Years of Experience</p>
              </div>
              <div class="statastic-block">
                <h4 class="stats-number">
                  <span>23</span>+
                </h4>
                <p className="dark:text-white">Talented IT Professionals</p>
              </div>
              <div class="statastic-block">
                <h4 class="stats-number">
                  <span>215</span>+
                </h4>
                <p className="dark:text-white">Successful Projects</p>
              </div>
              <div class="statastic-block">
                <h4 class="stats-number">
                  <span>11</span>+
                </h4>
                <p className="dark:text-white">Countries Served</p>
              </div>
            </div>
          </div>
        </div>

       
      </div>
    </section>
    </>
  );
}
