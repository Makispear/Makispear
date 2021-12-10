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

  return(
    <header>
      <nav onScroll={navigation()}>
        <ul>
          {navLinks.forEach(item => {
            return(
              <li key={item.name}>
                <a data-testid={item.name.toLowerCase()} className={`${ currentNavLink.name === item.name && `activeLink`}`} href={item.link} onClick={() => setNavLink(item)}>
                  {item.name}
                </a>
              </li>
            )
          })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav
