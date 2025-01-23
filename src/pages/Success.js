// src/Success.js
import React from "react";
import { Link } from "react-router-dom";

const Success = () => {
    return (
        <section className="page_404">
            <div className="container">
        <div className="row justify-content-center">
            <div className="col-md-5">
                <div className="message-box _success">
                     <i className="fa fa-check-circle" aria-hidden="true"></i>
                    <h2> Your payment was successful </h2>
                   <p> Thank you for your payment. <br/>
                   Kindly share a screenshot on Whatsapp for our records. </p>      
            </div> 
        </div> 
    </div> 
    </div> 
        </section>
    );
};

export default Success;
