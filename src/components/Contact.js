import React from "react";
import "../styles/Contact.css";
import GitHubIcon from "../icons/GitHubIcon";
import LinkedInIcon from "../icons/LinkedInIcon";

function Contact() {
  return (
    <section id="contact" className="section contact-section">
      <p className="contact-number">04. What's Next?</p>
      <h2 className="contact-title">Don't be a stranger.</h2>
      <p className="contact-description">
        My inbox is always open. Whether you have a question or just want to say
        hi, I'll try my best to get back to you!
      </p>
      <a href="mailto:sabreyes01@gmail.com" className="btn-outline btn-large">
        Say Hello
      </a>

      <div className="contact-social">
        <a
          href="https://github.com/sabrinaspage"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <GitHubIcon width={24} height={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/sab-reyes/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <LinkedInIcon width={24} height={24} />
        </a>
      </div>
    </section>
  );
}

export default Contact;
