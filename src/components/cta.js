import React, { useState } from "react";
import "../../node_modules/react-modal-video/scss/modal-video.scss";

import sfdc from "../assets/images/techicon/sfdc/salesforce-2.svg";

import angular from "../assets/images/techicon/FE/Angular.svg";
import react from "../assets/images/techicon/FE/React.svg";
import vue from "../assets/images/techicon/FE/Vue.svg";
import next from "../assets/images/techicon/FE/Next.svg";
import nuxtJs from "../assets/images/techicon/FE/NuxtJS.svg";

import nodejs from "../assets/images/techicon/BE/NodeJS.svg";
import java from "../assets/images/techicon/BE/Java.svg";
import dotnet from "../assets/images/techicon/BE/DotNet.svg";
import php from "../assets/images/techicon/BE/PHP.svg";
import laravel from "../assets/images/techicon/BE/Laravel.svg";
import codeigniter from "../assets/images/techicon/BE/Codeigniter.svg";
import rubyonrails from "../assets/images/techicon/BE/Ruby on Rails.svg";
import nest from "../assets/images/techicon/BE/Nest.svg";

import android from "../assets/images/techicon/mobile/Android.svg";
import ios from "../assets/images/techicon/mobile/iOS.svg";
import reactnative from "../assets/images/techicon/mobile/React.svg";
import flutter from "../assets/images/techicon/mobile/Flutter.svg";

import wordpress from "../assets/images/techicon/CMS/Wordpress.svg";
// import Codeigniter from '../assets/images/techicon/CMS/Codeigniter.svg';

import mysql from "../assets/images/techicon/db/MySQL.svg";
import mssql from "../assets/images/techicon/db/MS SQL.svg";
import mongodb from "../assets/images/techicon/db/MongoDB.svg";
import sqlite from "../assets/images/techicon/db/SQLite.svg";
import postgresql from "../assets/images/techicon/db/PostgreSQL.svg";
import firebase from "../assets/images/techicon/db/Firebase.svg";
import realm from "../assets/images/techicon/db/Realm.svg";

import terraform from "../assets/images/techicon/dc/Terraform.svg";
import cicd from "../assets/images/techicon/dc/CI-CD.svg";
import aws from "../assets/images/techicon/dc/AWS.svg";
import jenkins from "../assets/images/techicon/dc/Jenkins.svg";
import kubernetes from "../assets/images/techicon/dc/Kubernetes.svg";
import docker from "../assets/images/techicon/dc/Docker.svg";

import mt from "../assets/images/techicon/pm/Microsoft Team.svg";
import jira from "../assets/images/techicon/pm/Jira.svg";
import asana from "../assets/images/techicon/pm/Asana.svg";
import slack from "../assets/images/techicon/pm/Slack_icon_2019.svg.png";
import clickup from "../assets/images/techicon/pm/ClickUp.svg";
import trello from "../assets/images/techicon/pm/Trello.svg";
import mdc from "../assets/images/techicon/pm/MondayDotCom.svg";
import pivotal from "../assets/images/techicon/pm/Pivotal.svg";

export default function Cta() {
  const [activeTab, setActiveTab] = useState("Salesforce"); // Default active tab

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };
  return (
    <section
      className="relative md:py-24 py-16 bg-slate-50 dark:bg-slate-800"
      id="technologies"
    >
      <div className="container relative">
        <div className="col-12">
          <div className="technologies-wrapper" data-aos="fade-up">
            <div className="grid grid-cols-1 pb-6 text-center">
              <h3 className="font-semibold text-2xl leading-normal mb-4">
                Technological & Platform Expertise We Utilize
              </h3>
            </div>

            <div className="navDiv text-center">
              <a
                className={`hover-line ${
                  activeTab === "Salesforce" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Salesforce")}
              >
                Salesforce
              </a>
              <a
                className={`hover-line ${
                  activeTab === "FrontEnd" ? "active" : ""
                }`}
                onClick={() => handleTabClick("FrontEnd")}
              >
                Front End
              </a>
              <a
                className={`hover-line ${
                  activeTab === "BackEnd" ? "active" : ""
                }`}
                onClick={() => handleTabClick("BackEnd")}
              >
                Back End
              </a>
              <a
                className={`hover-line ${
                  activeTab === "Mobile" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Mobile")}
              >
                Mobile
              </a>
              <a
                className={`hover-line ${activeTab === "CMS" ? "active" : ""}`}
                onClick={() => handleTabClick("CMS")}
              >
                CMS
              </a>
              <a
                className={`hover-line ${
                  activeTab === "Database" ? "active" : ""
                }`}
                onClick={() => handleTabClick("Database")}
              >
                Database
              </a>
              <a
                className={`hover-line ${
                  activeTab === "DevOps" ? "active" : ""
                }`}
                onClick={() => handleTabClick("DevOps")}
              >
                DevOps and Cloud
              </a>
              <a
                className={`hover-line ${
                  activeTab === "ProjectManagement" ? "active" : ""
                }`}
                onClick={() => handleTabClick("ProjectManagement")}
              >
                Project Management
              </a>
              <div className="animation start-hom"></div>
            </div>
            <div className="tab-content">
              {activeTab === "Salesforce" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Development"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Development</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Lightning"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Lightning</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Vlocity"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Vlocity</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Sales Cloud"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Sales Cloud</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Service Cloud"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Service Cloud</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Pardot"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Pardot</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Integration"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Integration</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Consulting"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Consulting</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce AppExchange"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce AppExchange</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Maintenance & Support"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Maintenance & Support</div>
                      </a>
                    </li>

                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={sfdc}
                            alt="Salesforce"
                            title="Salesforce Implementation"
                            width="90"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Salesforce Implementation</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "FrontEnd" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={angular}
                            alt="Angular Front End"
                            title="Angular"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Angular</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={react}
                            alt="React Front End"
                            title="React"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">React</div>
                      </a>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={vue}
                          alt="Vue Front End"
                          title="Vue"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Vue</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={next}
                          alt="Next Front End"
                          title="Next"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Next</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={nuxtJs}
                          alt="NuxtJS Front End"
                          title="NuxtJS"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">NuxtJS</div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "BackEnd" && (
                <div className="tech-list-animated"> 
                  <ul class="tech-list">
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={nodejs}
                            alt="NodeJS Back End"
                            title="NodeJS"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">NodeJS</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={java}
                            alt="Java Back End"
                            title="Java"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Java</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={dotnet}
                            alt="DotNet Back End"
                            title="DotNet"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">DotNet</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={php}
                            alt="PHP Back End"
                            title="PHP"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">PHP</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={laravel}
                            alt="Laravel Back End"
                            title="Laravel"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Laravel</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={codeigniter}
                            alt="Codeigniter Back End"
                            title="Codeigniter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Codeigniter</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={rubyonrails}
                            alt="Ruby on Rails Back End"
                            title="Ruby on Rails"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Ruby on Rails</div>
                      </a>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={nest}
                          alt="Nest Back End"
                          title="Nest"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Nest</div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "Mobile" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={android}
                            alt="Android Mobile"
                            title="Android"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Android</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={ios}
                            alt="iOS Mobile"
                            title="iOS"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">iOS</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={reactnative}
                            alt="React Mobile"
                            title="React"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">React</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={flutter}
                            alt="Flutter Mobile"
                            title="Flutter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Flutter</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "CMS" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={wordpress}
                            alt="Wordpress CMS"
                            title="Wordpress"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Wordpress</div>
                      </a>
                    </li>
                    <li>
                      <a>
                        <div class="tech-icon">
                          <img
                            src={codeigniter}
                            alt="Codeigniter CMS"
                            title="Codeigniter"
                            width="130"
                            height="90"
                            loading="lazy"
                            fetchpriority="low"
                          />
                        </div>
                        <div class="tech-title">Codeigniter</div>
                      </a>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "Database" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <div class="tech-icon">
                        <img
                          src={mysql}
                          alt="MySQL Database"
                          title="MySQL"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">MySQL</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={mssql}
                          alt="MS SQL Database"
                          title="MS SQL"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">MS SQL</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={mongodb}
                          alt="MongoDB Database"
                          title="MongoDB"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">MongoDB</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={sqlite}
                          alt="SQLite Database"
                          title="SQLite"
                          width="110"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">SQLite</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={postgresql}
                          alt="PostgreSQL Database"
                          title="PostgreSQL"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">PostgreSQL</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={firebase}
                          alt="Firebase Database"
                          title="Firebase"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Firebase</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={realm}
                          alt="Realm Database"
                          title="Realm"
                          width="110"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Realm</div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "DevOps" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <div class="tech-icon">
                        <img
                          src={terraform}
                          alt="Terraform DevOps and Cloud"
                          title="Terraform"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Terraform</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={cicd}
                          alt="CI-CD DevOps and Cloud"
                          title="CI-CD"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">CI-CD</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={aws}
                          alt="AWS DevOps and Cloud"
                          title="AWS"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">AWS</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={jenkins}
                          alt="Jenkins DevOps and Cloud"
                          title="Jenkins"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Jenkins</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={kubernetes}
                          alt="Kubernetes DevOps and Cloud"
                          title="Kubernetes"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Kubernetes</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={docker}
                          alt="Docker DevOps and Cloud"
                          title="Docker"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Docker</div>
                    </li>
                  </ul>
                </div>
              )}
              {activeTab === "ProjectManagement" && (
                <div className="tech-list-animated">
                  <ul class="tech-list">
                    <li>
                      <div class="tech-icon">
                        <img
                          src={mt}
                          alt="Microsoft Team Project Management"
                          title="Microsoft Team"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Microsoft Team</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={jira}
                          alt="Jira Project Management"
                          title="Jira"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Jira</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={asana}
                          alt="Asana Project Management"
                          title="Asana"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Asana</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={slack}
                          alt="Slack Project Management"
                          title="Slack"
                          width="60"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Slack</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={clickup}
                          alt="ClickUp Project Management"
                          title="ClickUp"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">ClickUp</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={trello}
                          alt="Trello Project Management"
                          title="Trello"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Trello</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={mdc}
                          alt="MondayDotCom Project Management"
                          title="MondayDotCom"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">MondayDotCom</div>
                    </li>
                    <li>
                      <div class="tech-icon">
                        <img
                          src={pivotal}
                          alt="Pivotal Project Management"
                          title="Pivotal"
                          width="130"
                          height="90"
                          loading="lazy"
                          fetchpriority="low"
                        />
                      </div>
                      <div class="tech-title">Pivotal</div>
                    </li>
                  </ul>
                </div>
              )}
            </div>
            <div className="text-center mt-10">
                <a
                class="h-10 px-6 tracking-wide inline-flex items-center justify-center font-medium rounded-md bg-teal-500 text-white"
                href="/"
                >
                Book a Developer Consultation
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
