import React, { useState } from "react";
import { Link } from "react-router-dom";

import blog1 from '../assets/images/blog/01.jpg'
import blog2 from '../assets/images/blog/02.jpg'
import blog3 from '../assets/images/blog/03.jpg'

export default function AgencyTab(){
    const [ activeIndex, setActiveIndex ] = useState(1)
    return(
        <section className="realtive md:py-24 py-16">
            <div className="container relative">
                <div className="grid grid-cols-1 pb-6 text-center">
                    <h3 className="font-semibold text-2xl leading-normal mb-4">Accelerating Transformation through Software Solutions bringing Agility, Scalability & Growth</h3>

                    <p className="text-slate-400 mx-auto mt-6">We assist you in striking the perfect balance between tackling business challenges, meeting new demands, and speeding up your digital transformation. Our expertise lies in crafting effective software solutions that bring your ideas to life. Whether it's design, development, testing, or maintenance, we partner with you at every phase of your software creation or digital transformation process. Using a tailored agile methodology, we streamline your path to enhance business results.</p>
                </div>
                <div class="row mt-10">
                <div class="col-12">
                    <div class="statastic-wrapper">
                        <div class="statastic-block">
                            <h4 class="stats-number">
                                <span>7</span>+
                            </h4>
                            <p>
                                Years of Experience
                            </p>
                        </div>
                        <div class="statastic-block">
                            <h4 class="stats-number">
                                <span>42</span>+
                            </h4>
                            <p>
                                Talented IT Professionals
                            </p>
                        </div>
                        <div class="statastic-block">
                            <h4 class="stats-number">
                                <span>600</span>+
                            </h4>
                            <p>
                                Successful Projects
                            </p>
                        </div>
                        <div class="statastic-block">
                            <h4 class="stats-number">
                                <span>21</span>+
                            </h4>
                            <p>
                                Countries Served
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </section>
    )
}
