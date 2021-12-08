import React from "react";
 
function Contact() {
  const socialMedia = [
    {
      name: 'GitHub',
      src: 'github.png',
      href: 'https://github.com/Makispear',
    },
    {
      name: 'LinkedIn',
      src: 'linkedin.png',
      href: 'http://www.linkedin.com/in/mekki-abo-obaida-59a48b191'
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

  return (
    <section id="contact">
        <h2 className="section-title">Contact</h2>
        <ul>
          {
            socialMedia.map(item => {
              return (
                <li>
                    <a target="_blank" href={item.href}>
                        <img title={item.name} className="logos" id={item.name.toLowerCase()} src={require(`../../assets/images/${item.src}`).default } alt={item.name} />
                    </a>
                </li>
              )
            })
          }
        </ul>
    </section>
  )
}

export default Contact
