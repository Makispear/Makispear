import React from "react";

function Hero() {

  return (
    <section id="hero">
      <img src={require(`../../assets/images/herome.jpg`).default } alt="Picture of Maki smiling with A river in the back" />
      <h1 data-testid="name">Maki Aboabida</h1>
      <h2 data-testid="occupation">Full-Stack Web Developer</h2>
    </section>
  )
}

export default Hero
