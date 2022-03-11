import React, { useState } from 'react';
import './assets/CSS/styles.css';
import Nav from './Components/Nav';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import About from './Components/About';
import Contact from './Components/Contact';
import Work from './Components/Work';

function App() {
  const [navLinks] = useState([
    {
      name: 'Maki A.',
      link: '#home',
    },
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Portfolio',
      link: '#work'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]);

  const socialMedia = [
    {
      name: 'GitHub',
      src: 'github.png',
      href: 'https://github.com/Makispear',
    },
    {
      name: 'LinkedIn',
      src: 'linkedin.png',
      href: 'https://www.linkedin.com/in/makiaboabida/'
    },
    {
      name: 'Outlook',
      src: 'outlook.svg',
      href: 'mailto:maki-miko@hotmail.com?subject=I Visited Your Online Portfolio!!!&body=Hi Maki! I like your Portfolio!'
    },
    {
      name: 'Whatsapp',
      src: 'whatsapp.png',
      href: 'https://wa.me/18607941672?text=Hey Maki! I like your online portfolio!'
    }
  ]

  const [currentNavLink, setNavLink] = useState(navLinks[0]);

  return (
    <div>
      <Nav
        navLinks={navLinks}
        currentNavLink={currentNavLink}
        setNavLink={setNavLink}
      />
      <>
        <main>
          {
            currentNavLink.name === 'Maki A.' && (
              <Hero />
            )
          }
          {
            currentNavLink.name === 'About' && (
              <About />
            )
          }
          {
            currentNavLink.name === 'Portfolio' && (
              <Work />
            )
          }
          {
            currentNavLink.name === 'Contact' && (
              <Contact />
            )
          }
        </main>
      </>
      <Footer
        socialMedia={socialMedia}
      />
    </div>
  );
}

export default App;
