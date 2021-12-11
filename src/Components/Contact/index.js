import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
 
function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  const handleChange = (e) => {

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value);
      // isValid conditional statement
      if (!isValid) {
        setErrorMessage('Your email is invalid.');
      } else {
        if (!e.target.value.length) {
          setErrorMessage(`${e.target.name} is required.`);
        } else {
          setErrorMessage('');
        }
      }
    } 
    if (!errorMessage) {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }


  return (
    <section id="contact">
        <h2 className="section-title">Contact</h2>
        <form id='contactForm' className="contact-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" defaultValue={name}>Name:</label>
            <input name="name"onBlur={handleChange} />
          </div>
          <div>
          {errorMessage && (
            <div>
              <p className="error-text">{errorMessage}</p>
            </div>
          )}
            <label htmlFor="email" defaultValue={email}>Email:</label>
            <input name="email" onBlur={handleChange} />
          </div>
          <div>
            <label htmlFor="message" defaultValue={message}>Message:</label>
            <textarea name="message" onBlur={handleChange} />
          </div>
          
          <button className='btn' type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Contact
