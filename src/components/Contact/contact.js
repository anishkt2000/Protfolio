import React, { useRef, useState } from "react";
import "./contact.css";
import LinkedInIcon from "../../assets/linkedin.png";
import TwitterIcon from "../../assets/twitter.png";
import GitHubIcon from "../../assets/github.png";
import InstagramIcon from "../../assets/instagram.png";
import emailjs from "@emailjs/browser";
import { message } from "antd";
import Leading from "../../assets/Leading.png.png"
import Swift from "../../assets/Swift.png"
import codeclause from "../../assets/codeclause.png"
const Contact = () => {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    emailjs
      .sendForm(
        "service_1wmvn6m",
        "template_4k002bf",
        form.current,
        "GYoPyEL27xdXnRdSc"
      )
      .then(
        (result) => {
          message.success("Message sent successfully");
          setIsLoading(false);
        },
        (error) => {
          console.log(error.text);
          message.error(error);
          setIsLoading(false);
        }
      );
  };
  return (
    <section id="contactPage">
      <div id="clients">
        <h1 className="contactPageTitle">My Experience</h1>
        <p className="clientDesc">
          As a software developer, I provide innovative solutions by designing
          and coding software applications tailored to meet specific business
          needs. With expertise in various technologies, I deliver high-quality
          software that enhances efficiency and user experiences.
        </p>
        <div className="clientImgs">
           <img src={Swift} alt="swift" className="clientImg" />
          <img src={codeclause} alt="codeclause" className="clientImg" /> 
          <img src={Leading} alt="Leading" className="clientImg" />
        
        </div>
      </div>
      <div id="contact">
        <h1 className="contactPageTiitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss any work oppurtunities
        </span>
        <form className="contactForm" ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            className="name"
            placeholder="Your Name"
            name="your_name"
          />
          <input
            type="email"
            className="email"
            placeholder="Your Email"
            name="your_email"
          />
          <textarea
            className="msg"
            name="message"
            rows="5"
            placeholder="Your Message"
          />
          <button type="submit" value="send" className="submitBtn">
            {isLoading ? "Sending..." : "Send"}
          </button>
          <div className="links">
            <a
              href="https://www.linkedin.com/in/anishkt20/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={LinkedInIcon} alt="LinkedInIcon" className="link" />
            </a>
            <a
              href="https://twitter.com/anishkt20"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={TwitterIcon} alt="TwitterIcon" className="link" />
            </a>
            <a
              href="https://github.com/anishkt2000"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={GitHubIcon} alt="GitHubIcon" className="link" />
            </a>
            <a
              href="https://www.instagram.com/kr.an.25/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={InstagramIcon} alt="InstagramIcon" className="link" />
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
