// src/Status.js
import React from "react";
import { Link } from "react-router-dom";

const Status = () => {
    return (
        <section className="page_404">
        <div className="container">
        <div className="row justify-content-center">
        <div className="col-md-5">
            <div className="message-box _success _status">
                 <i className="fa fa-times-circle" aria-hidden="true"></i>
                <h2> Your payment under verification </h2>
         <p>  Your payment status is being verified. Please wait... </p> 
                <p>  Kindly share a screenshot on Whatsapp for our records.</p> 
     
        </div> 
    </div> 
</div> 

        </div>
    </section>
    );
};

export default Status;
