import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import "./Content.css";
function Content({
  lightBackground,
  lightText,
  lightDesc,
  topLine,
  headLine,
  description,
  buttonLabel,
  imgStart,
  img,
  alt,
}) {
  return (
    <>
      <div className={lightBackground ? "content-wrapper" : "content-wrapper darkBackground"} >
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
                <h1 className={lightText ? "head-line" : "head-line dark"}>
                  {headLine}
                </h1>
                <p className={lightDesc ? "description" : "description dark"}>
                  {description}
                </p>
                <Link to="/Services">
                  <Button name={buttonLabel} />
                </Link>
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

export default Content;
