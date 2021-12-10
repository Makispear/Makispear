import React from "react";
 
function Contact() {

  return (
    <section id="contact">
        <h2 className="section-title">Contact</h2>
        <form className="contact-form">
          <div>
            <label for="name">Name:</label>
            <input id="name"></input>
          </div>
          <div>
            <label for="email">Email</label>
            <input id="email"></input>
          </div>
          <div>
            <label for="message">Message</label>
            <textarea id="message" />
          </div>
        </form>
    </section>
  )
}

export default Contact
