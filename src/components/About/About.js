import React from "react";
import {
  FaFacebookSquare,
  FaInstagram,
  FaYoutube,
  FaGoogle,
  FaConnectdevelop,
} from "react-icons/fa";
import "./about.css";
function About({
  lightBackground,
  lightText,
  lightDesc,
  topLine,
  description,
  directory,
  email,
  imgStart,
  img,
  alt,
}) {
  return (
    <>
      <div
        className={
          lightBackground ? "content-wrapper" : "content-wrapper darkBackground"
        }
      >
        <div
          className={
            lightBackground ? "home-section" : "home-section darkBackground"
          }
        >
          <div
            className="row home-section-row"
            style={{
              display: "flex",
              flexDirection: imgStart === "start" ? "row-reverse" : "row",
            }}
          >
            <div className="col">
              <div className="home-section-text-wrapper">
                <div className="top-line">{topLine}</div>
                <p className={lightDesc ? "description" : "description dark"}>
                  {description}
                </p>
                <h3 className={lightText ? "title" : "title dark"}>
                  CEO and Founder: {directory}
                </h3>
                <h4 className={lightText ? "description" : "description dark"}>
                  Email: {email}
                </h4>
                <div className={lightText ? "contact" : "contact dark"}>
                  <div className="social">
                    <FaFacebookSquare/>
                  </div>
                  <div className="social">
                    <FaInstagram />
                  </div>
                  <div className="social">
                    <FaYoutube />
                  </div>
                  <div className="social">
                    <FaGoogle />
                  </div>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="home-section-image-wrapper">
                <img src={img} alt={alt} className="home-section-image" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
