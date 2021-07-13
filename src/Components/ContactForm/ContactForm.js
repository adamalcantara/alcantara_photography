import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import "./ContactForm.css"

function ContactForm() {
  const [state, handleSubmit] = useForm("moqyndap");
  if (state.succeeded) {
      return <p id="thankYou">Thanks for reaching out to us! We will be in touch shortly</p>;
  }
  return (
      <form onSubmit={handleSubmit} id="form">
          <p id="contactHeader">Please use the form below to contact us. We look forward to hearing from you!</p>
      <label htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email" 
        name="email"
        placeholder="Email Address"
      />
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <br></br>
      <label htmlFor="message">
        Message
      </label>
      <textarea
        id="message"
        name="message"
        placeholder="Enter your message here."
      />
      <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <button type="submit" disabled={state.submitting} id="submitBtn">
        Submit
      </button>
    </form>
  );
}

export default ContactForm;