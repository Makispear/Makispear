import React, { useState } from 'react';
import { validateEmail } from '../../utils/helpers'
 
function Contact() {

  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const { name, email, message } = formState;
  const [emailError, setEmailError] = useState('');
  const [nameError, setNameError] = useState('');
  const [messageError, setMessageError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formState);
  }

  const handleChange = (e) => {
    if (e.target.name === 'name') {
      // isValid conditional statement
        if (!e.target.value.trim().length) {
          setNameError(`Name is required.`);
        } else {
          setNameError('');
        }
    }

    if (e.target.name === 'message') {
      // isValid conditional statement
        if (!e.target.value.trim().length) {
          setMessageError(`Message is required.`);
        } else {
          setMessageError('');
        }
    }

    if (e.target.name === 'email') {
      const isValid = validateEmail(e.target.value.trim());

      if (!e.target.value.trim().length) {
        setEmailError(`Email is required.`);
      } else {
        setEmailError('');
        if (!isValid) {
          setEmailError('Your email is invalid.');
        }
      }
      if (!emailError) {
        setFormState({ ...formState, [e.target.name]: e.target.value });
      }
    } 
    
  }


  return (
    <section id="contact">
        <h2 className="section-title">Contact</h2>
        <form id='contactForm' className="contact-form" onSubmit={handleSubmit}>
          <div>
          {nameError && (
            <div>
              <p className="error-text">{nameError}</p>
            </div>
          )}
            <label htmlFor="name" defaultValue={name}>Name:</label>
            <input name="name"onBlur={handleChange} onChange={handleChange} />
          </div>
          <div>
          {emailError && (
            <div>
              <p className="error-text">{emailError}</p>
            </div>
          )}
            <label htmlFor="email" defaultValue={email}>Email:</label>
            <input name="email" onBlur={handleChange} onChange={handleChange} />
          </div>
          <div>
          {messageError && (
            <div>
              <p className="error-text">{messageError}</p>
            </div>
          )}
            <label htmlFor="message" defaultValue={message}>Message:</label>
            <textarea name="message" onBlur={handleChange} onChange={handleChange} />
          </div>
          
          <button className='btn' type="submit">Submit</button>
        </form>
    </section>
  )
}

export default Contact
