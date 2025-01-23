// src/Fail.js
import React from "react";
import { Link } from "react-router-dom";
// import "../assets/css/NotFoundPage.css";
import { Helmet } from "react-helmet";

export default function Fail() {
  return (
    <section className="page_404">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="message-box _success _failed">
              <i className="fa fa-times-circle" aria-hidden="true"></i>
              <h2> Your payment failed </h2>
              <p> Try again later </p>
              <p> Kindly share a screenshot on Whatsapp for our records. </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};