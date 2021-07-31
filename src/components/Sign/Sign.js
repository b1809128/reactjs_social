import React from "react";
import "./sign.css";
import { Button } from "../Button/Button";
function Sign() {
  return (
    <>
      <div className="form-wrapper">
        <form action="" className="form-content">
          <p className="form-content-heading">CREATE ACCOUNT</p>
          <input type="text" placeholder="Your Name" className="form-input" />
          <input type="text" placeholder="Your Email" className="form-input" />
          <input type="password" placeholder="Your Password"className="form-input" />
          <input type="text" placeholder="Repeat your password" className="form-input" />
          <div className="form-checkbox">
            <input type="checkbox" />
            <p className="form-content-text">
              I agree all statements in <span className="form-content-text-underline">Terms of Service</span>
            </p>
          </div>
          <div className="form-button">
            <Button name="Sign Up" />
          </div>
          <p className="form-content-text" >
              Have already an account ? <span className="form-content-text-underline">Log in</span>
            </p>
        </form>
      </div>
    </>
  );
}

export default Sign;
