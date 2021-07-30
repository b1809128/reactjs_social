import React from "react";
import { Button } from "../Button/Button";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaGoogle,FaConnectdevelop
} from "react-icons/fa";
import "./footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-search-content">
        <p className="footer-search-content-text">
          Join to our exclusive membership to receive the latest news and trends
        </p>
        <h3>Subscribe get more courses exciting.</h3>
        <form className="footer-search-content-form" action="">
          <input
            type="text"
            placeholder="Your Email"
            className="footer-search-content-input"
          />
          <Button name="Subscribe" />
        </form>
      </div>

      <div className="footer-main-content">
        <div className="about">
          <h3 className="title">About Us</h3>
          <ul className="title-list">
            <li className="title-item">How it works </li>
            <li className="title-item">Career</li>
            <li className="title-item">Investor</li>
            <li className="title-item">Terms of Service</li>
          </ul>
        </div>
        <div className="contact">
          <h3 className="title">Contact Us</h3>
          <ul className="title-list">
            <li className="title-item">Contact </li>
            <li className="title-item">Support</li>
            <li className="title-item">Destination</li>
            
          </ul>
        </div>
        <div className="video">
          <h3 className="title">Products</h3>
          <ul className="title-list">
            <li className="title-item">React JS </li>
            <li className="title-item">Node JS</li>
            <li className="title-item">JavaScript</li>
            <li className="title-item">FullStack JavaScript</li>
          </ul>
        </div>
        <div className="social">
          <h3 className="title">Social Media</h3>
          <ul className="title-list">
            <li className="title-item">Instagram </li>
            <li className="title-item">Facebook</li>
            <li className="title-item">Youtube</li>
            <li className="title-item">Google</li>
          </ul>
        </div>
      </div>

      <div className="footer-end-content">
        <div className="footer-end-content-logo"><FaConnectdevelop/>React JS</div>
        <div className="footer-end-content-copyright">
          Copyright 2021 by QuocHuy's Developer
        </div>
        <div className="footer-end-content-social">
          <div className="footer-end-content-social-item">
            <FaFacebookSquare />
          </div>
          <div className="footer-end-content-social-item">
            <FaInstagram />
          </div>
          <div className="footer-end-content-social-item">
            <FaYoutube />
          </div>
          <div className="footer-end-content-social-item">
            <FaGoogle />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
