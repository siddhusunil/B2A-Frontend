import React from 'react';
import './home.css';
import { useNavigate } from 'react-router-dom';
import Testimonials from '../../components/testimonials/Testimonials';

const Home = () => {
  const navigate = useNavigate()
  return (
    <div>
      <div className="home">
        <div className="home-content">
          <h1>Welcome to our B2A Learning Platform</h1>
          <p>Welcome to B2A, where learning meets innovation! 
            Explore a vast library of courses designed to empower you with knowledge and skills for today’s world. 
            Whether you’re looking to advance your career, pick up a new hobby, or dive into a passion project, we’ve got you covered. 
            Join our community of learners and take the next step in your educational journey—anytime, anywhere!</p>
          <button onClick={()=>navigate("/about")} className='common-btn-2'>Learn More...</button>
          <button onClick={()=>navigate("/courses")} className='common-btn-1'>Get Started</button>
        </div>
      </div>
      <Testimonials/>
    </div>
  );
};

export default Home;