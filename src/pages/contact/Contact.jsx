import React from 'react';
import "./contact.css";
import { useState } from 'react';
import { UserData } from '../../context/UserContext';
import { useNavigate } from 'react-router-dom';

const Contact = () => {

    const navigate = useNavigate();
    const {btnLoading, contactUser} = UserData();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [subject, setSubject] = useState("");
    const [name, setName] = useState("");

    const submitHandler = async(e)=>{
        e.preventDefault();
        await contactUser(name, email, subject, message, navigate);
      }

  return (
    <div className='contact-form-container'>
    <form className="contact-form" onSubmit={submitHandler}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          placeholder='Enter your name...'
          name="name"
          value={name}
          onChange={e=>setName(e.target.value)}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          placeholder='Enter your email...'
          name="email"
          value={email}
          onChange={e=>setEmail(e.target.value)}
        />
      </div>
      <div>
        <label>Subject:</label>
        <input
          type="text"
          placeholder='Enter the Subject'
          name="subject"
          value={subject}
          onChange={e=>setSubject(e.target.value)}
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          name="message"
          placeholder='Enter the message that you want to sent...'
          value={message}
          onChange={e=>setMessage(e.target.value)}
        ></textarea>
      </div>
      <button disabled={btnLoading} type="submit" className='common-btn'>
      {btnLoading? "Please Wait...": "Submit"}
      </button>
    </form>
    </div>
  );
};

export default Contact






/* <div className="about">
        <div className="about-content">
            <h2>About Us</h2>
            <p>
                We are dedicated to providing high quality online courses to help
                individuals learn and grow their desired fields. Our experienced
                instruction ensure that each course is tailored for effective learning
                and practical application. 
            </p>
        </div>
    </div>
 */

// .about{
//   padding: 80px 0;
//   text-align: center;
//   min-height: 55vh;

//   .about-content{
//       min-width: 800px;
//       margin: 0 auto;

//       h2{
//           font-size: 32px;
//           color: #8a4baf;
//           margin-bottom: 20px;
//       }

//       p{
//           font-size: 16px;
//           color: #333;
//           line-height: 1.6;
//       }
//   }
// }