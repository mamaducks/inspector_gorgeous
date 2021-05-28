import React, { useState } from "react";

const ContactForm = () => {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const { name, email, message } = e.target.elements;

    fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    // eslint-disable-next-line no-restricted-globals
    location.href = 'mailto:blah@fff.com'

    name.value = email.value = message.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea id="message" required />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
