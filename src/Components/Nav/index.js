import React from "react";

function Nav() {
  const navLinks = [
    {
      name: 'Home',
      link: 'index.html'
    },
    {
      name: 'About',
      link: '#about'
    },
    {
      name: 'Work',
      link: '#work'
    },
    {
      name: 'Contact',
      link: '#contact'
    }
  ]

  return(
    <header>
      <nav>
        <ul>
          {navLinks.map(item => {
            return(
              <li key={item.name}><a data-testid={item.name.toLowerCase()} href={item.link}>{item.name}</a></li>
            )
          })
          }
        </ul>
      </nav>
    </header>
  )
}

export default Nav
