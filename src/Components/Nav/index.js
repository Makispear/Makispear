import React, { useEffect } from "react";

function Nav(props) {
  const {
    navLinks,
    currentNavLink,
    setNavLink
  } = props;

  useEffect(() => document.title = `${currentNavLink.name} - Maki`, [currentNavLink])

  const navigation = () => {
    let prevScrollPos = window.pageYOffset;
    window.onscroll = () => {
      let currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        document.getElementsByTagName('header')[0].style.top = "0";
      } else {
        document.getElementsByTagName('header')[0].style.top = "-500px";
      }
      prevScrollPos = currentScrollPos;
    }
  }

  return (
    <header>
      <nav onScroll={navigation()}>
        <ul>
          {navLinks.map(item => {
            return (
              <li key={item.name}>
                <a data-testid={item.name.toLowerCase()} className={`${currentNavLink.name === item.name && `activeLink`}`} href={item.link} onClick={() => setNavLink(item)}>
                  {item.name}
                </a>
              </li>
            )
          })
          }
          <li>
            <a href="https://docs.google.com/document/d/1Uf9pQMBsg-6iWYdrSOwNos61fBWJh83dMwFLFFqLpOA/edit?usp=sharing" rel="noreferrer" target="_blank">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Nav
