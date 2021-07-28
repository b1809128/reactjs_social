import React from "react";
import "./button.css";

export const Button = (name) => {
  return <button className="btn">{name.name}</button>;
};
