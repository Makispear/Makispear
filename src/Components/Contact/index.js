import React from "react";
 
function Contact() {
  return (
    <section id="contact">
        <h2 className="section-title">Contact</h2>
        <ul>
            <li>
                <a target="_blank" href="https://github.com/Makispear">
                    <img  className="logos" src="assets/images/GitHub-Mark-Light-32px.png" alt="GitHub" />
                </a>
            </li>
            <li>
                <a target="_blank" href="http://www.linkedin.com/in/mekki-abo-obaida-59a48b191">
                    <img  className="logos" id="linkedIn" src="assets/images/LI-In-Bug.png" alt="LinkedIn" />
                </a>
            </li>
            <li>
                <a target="_blank" href="mailto:maki-miko@hotmail.com?subject=I Visited Your Online Portfolio!!!&body=Hi Maki! I like your Portfolio!">
                    <img  className="logos" id="outlook" src="assets/images/Outlook.com-Logo.wine.svg" alt="Outlook" />
                </a>
            </li>
            <li>
                <a target="_blank" href="https://wa.me/18607941672?text=Hey Maki! I like your online portfolio!">
                    <img  className="logos" id="whatsapp" src="assets/images/whatsapp_logo_PNG3.png" alt="Whatsapp" />
                </a>
            </li>
        </ul>
    </section>
  )
}

export default Contact
