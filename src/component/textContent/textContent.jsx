import React from "react";
import "./text-content.css";

const TextContent = ({ heading, text }) => {
  return (
    <section className="text-content-container">
      <div className="text-content-heading">{heading}</div>
      <div className="text-content-text">{text}</div>
    </section>
  );
};

export default TextContent;
