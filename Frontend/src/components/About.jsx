import React from 'react';
import '../styles/About.css';
import { Link } from "react-router-dom";


const About = () => {
  return (
    <section id="about" className="about-section">
      <div className="container">
        <h2 className="section-title">About The Book Nook</h2>
        <p className="section-description">
          Welcome to The Book Nook, your haven for all things literary! Nestled in the heart of downtown, The Book Nook is a cozy, independent bookstore that caters to book lovers of all ages and tastes. Our carefully curated selection includes everything from the latest bestsellers and timeless classics to hidden gems and local authors.
        </p>
        <p className="section-description">
          At The Book Nook, we believe in the power of stories to inspire, educate, and entertain. Our knowledgeable and passionate staff are always on hand to offer personalized recommendations, whether you’re searching for a gripping thriller, a heartwarming romance, or an enlightening non-fiction read.
        </p>
        <p className="section-description">
          Beyond just books, The Book Nook is a community hub. Join us for our regular events, including author signings, book clubs, and children's story hours. Enjoy a cup of coffee from our in-store café as you browse, or find a quiet corner to dive into your new favorite read.
        </p>
        <p className="section-description">
          Come discover your next great adventure at The Book Nook, where every book is a new journey waiting to be explored.
        </p>
      </div>
      <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
    </section>
  );
};

export default About;
