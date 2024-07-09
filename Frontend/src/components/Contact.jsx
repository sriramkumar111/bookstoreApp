import React from 'react';
import '../styles/Contact.css';
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className="container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-description">
          Have a question, suggestion, or just want to say hello? We'd love to hear from you! Reach out to us using the information below, or fill out the contact form and we'll get back to you as soon as possible.
        </p>
        
        <div className="contact-info">
          <h3>Contact Information</h3>
          <p><strong>Address:</strong> 123 Book Nook Lane, Downtown City, 45678</p>
          <p><strong>Phone:</strong> (123) 456-7890</p>
          <p><strong>Email:</strong> contact@thebooknook.com</p>
        </div>
        
        <div className="contact-form">
          <h3>Send Us a Message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
