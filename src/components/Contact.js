import React from "react";
import "../styles/Contact.css";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="contact-number">04. What's Next?</p>
      <h2 className="contact-title">Don't be a stranger.</h2>
      <p className="contact-description">
        My inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:sabreyes01@gmail.com" className="btn-outline btn-large">Say Hello</a>
    </section>
  );
}

export default Contact;

