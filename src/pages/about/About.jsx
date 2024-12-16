import React from 'react';
import "./about.css";
import Team from '../../components/team/Team';
import { Link } from 'react-router-dom';
;

const About = () => {

  return (
    <div className="about-container">
      <h1>About Us</h1>

      <section className="mission">
        <h2>Our Mission</h2>
        <p>
        Our mission is to provide high-quality study materials and resources to students around the world, enabling them to achieve academic success and personal growth.

We believe in the power of education to transform lives and are dedicated to creating a supportive and enriching learning environment for all our users.

Join us in our mission to make education accessible and enjoyable for everyone. Together, we can achieve great things.
        </p>
      </section>
      <Team/>

      <section className="contact">
        <h2 style={{color:"#8a4baf", textAlign:'center', marginBottom:"40px",}}>Contact Us</h2>
        <p style={{color:"#666", textAlign:'center',fontSize:"16px" ,marginBottom:"40px"}}>
          For inquiries, please email us at 
            <Link to="/contact" style={{marginLeft:"10px"}}>Contact Us</Link>
        </p>
      </section>
    </div>
  )
}

export default About