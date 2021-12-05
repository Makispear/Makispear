import React from "react";

function Nav() {
  return(
    <header>
      <nav>
        <ul>
          <li><a data-testid="home" href="index.html">Home</a></li>
          <li><a data-testid="about" href="#about">About</a></li>
          <li><a data-testid="work" href="#work">Work</a></li>
          <li><a data-testid="contact" href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
