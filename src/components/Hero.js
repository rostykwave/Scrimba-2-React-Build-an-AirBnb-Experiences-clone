import React from "react";
import picture1 from "../images/hero/image 22.png";
import picture2 from "../images/hero/image 23.png";
import picture3 from "../images/hero/image 24.png";
import picture4 from "../images/hero/image 25.png";
import picture5 from "../images/hero/image 26.png";
import picture6 from "../images/hero/image 27.png";
import picture7 from "../images/hero/image 28.png";
import picture8 from "../images/hero/image 29.png";
import picture9 from "../images/hero/image 30.png";

export default function Hero() {
    return (
        <section className="hero">
          <ul className="hero__list hero--photo">
            <li className="hero__item"><img src={picture1} /></li>
            <li className="hero__item"><img src={picture2} /></li>
            <li className="hero__item"><img src={picture3} /></li>
            <li className="hero__item"><img src={picture4} /></li>
            <li className="hero__item"><img src={picture5} /></li>
            <li className="hero__item"><img src={picture6} /></li>
            <li className="hero__item"><img src={picture7} /></li>
            <li className="hero__item"><img src={picture8} /></li>
            <li className="hero__item"><img src={picture9} /></li>
            </ul>
            
            <h1 className="hero--header">Online Experiences</h1>
            <p  className="hero--text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.
            </p>
        </section>
    )
}