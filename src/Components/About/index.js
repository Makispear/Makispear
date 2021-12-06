import React from "react";

function About() {
  return (
    <section id="about">
        <h2 data-testid="section-title" className="section-title">About Me</h2>
        <div>
            <p className="underline">Hey! Welcome to my portfolio! I'm a Junior Full-Stack Web Developer currently enrolled in the University Of Connecticut (Uconn) Coding Bootcamp. The bootcamp was devided into three stages:</p>
                <ul className="text-start underline">
                    <li>
                        <p className="text-tertiary">Front-End</p> 
                        <p className="indent-40">For the Front-End I got to learn HTML, CSS and JS with some other third party APIs and frameworks.</p>
                    </li>
                    <li>
                        <p className="text-tertiary">Back-End</p>
                        <p className="indent-40">The Backend is where I discovered newer technologies like Node, Express and Databases and new concepts like OOP, TDD, MVC and more.</p>
                    </li>
                    <li>
                        <p className="text-tertiary">Performance & computer science</p>
                        <p className="indent-40">The last 2 months were focused on the MERN stack and enhancements/performance and algorithmic thinking</p>
                    </li>                    
                </ul>
            <p data-testid="education">University of Connecticut certified Full-Stack Web Developer</p>
        </div>
    </section>
  )
}

export default About
