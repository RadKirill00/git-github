import React from "react";
import "./MyLinks.css";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const MyLinks = () => {
  return (
    <>
      <div className="container">
        <a href="" className="container__link-github">
          <AiFillGithub className="link-github-icon" />
        </a>
        <a href="" className="container__link-instagram">
          <AiFillInstagram className="link-instagram-icon" />
        </a>
      </div>
    </>
  );
};

export default MyLinks;
