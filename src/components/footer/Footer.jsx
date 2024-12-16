import React from 'react';
import "./footer.css";
import { AiFillFacebook } from "react-icons/ai";
import { FaTwitterSquare, FaInstagramSquare } from "react-icons/fa";


const Footer = () => {
  return (
    <footer>
        <div className="footer-content">
            <p>
                &copy; 2024 your B2A-Learning Platform. All rights reserved. 
                <br/>Developed by 
                <a href="" style={{padding:"5px 10px"}}>
                  <b style={{fontSize:'18px', padding:"4px 6px"}}>
                    Team - 18
                  </b>
                </a>
            </p>
            <div className="social-links">
                <a href=""><AiFillFacebook/></a>
                <a href=""><FaTwitterSquare /></a>
                <a href=""><FaInstagramSquare /></a>
            </div>
        </div>
    </footer>
  )
}

export default Footer