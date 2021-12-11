import React from "react";

function About() {
  return (
    <section id="about">
        <h2 data-testid="section-title" className="section-title">About Me</h2>
        <div>
            <p className="underline">Hey! Welcome to my portfolio! My name is Maki (Pronounced Mekki), and I'm a Junior Full-Stack Web Developer</p>
            <p className="underline">"About me" is the section where I try to impress you a bit and give you a glimpse of why I do what I do. On July 15th, 2021 when I was 22 years old, I decided to become a web developer. Before that, I had already dropped out of college... twice. The reason behind that was I was still finding myself and my passion (It's confusing to know what you want when you're inexperienced and everything seems like a good option). I applied for architectural engineering and found out after one semester it wasn't for me. I quickly decided to switch to Physical Therapy to become a PT. I enjoyed it but the typical day of a Physical Therapist didn't appeal to me. That's also one of the downsides of being inexperienced and clueless. One Day around November 2019, my friend was sleeping over at my house, I realized he was doing a bunch of Lorem Ipsum-looking code on my computer (It was good code, but to me back then, it looked like German and Arabic combined). The Story began there! Fast Forward to today I have loved to code and create layouts, solutions, and features for people to use in their daily lives.</p>
            <p data-testid="education" className="text-tertiary">University of Connecticut certified Full-Stack Web Developer</p>
        </div>
    </section>
  )
}

export default About
