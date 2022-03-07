import { useState } from "react";

import { client } from "../../client";
import { images } from "../../constants";

import AppWrap from "../../wrapper/AppWrap";
import MotionWrap from "../../wrapper/MotionWrap";

import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    // const contact = {
    //   _type: "contact",
    //   name: formData.username,
    //   email: formData.email,
    //   message: formData.message,
    // };

    // client
    //   .create(contact)
    //   .then(() => {
    //     setLoading(false);
    //     setIsFormSubmitted(true);
    //   })
    //   .catch((err) => console.log(err));
  };
  return (
    <>
      <h2 className="head-text">Take a coffe and chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="email" />
          <a href="mailto:creative201347@gmail.com" className="p-text">
            creative201347@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="mobile" />
          <a href="tel:977 9840034689" className="p-text">
            977 9840034689
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              value={name}
              onChange={handleChangeInput}
              name="name"
            />
          </div>
          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your email"
              value={email}
              onChange={handleChangeInput}
              name="email"
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              name="message"
              value={message}
              onChange={handleChangeInput}
            />
          </div>

          <button type="button" className="p-text" onClick={handleSubmit}>
            {!loading ? "Send Message" : "Sending..."}
          </button>
        </div>
      ) : (
        <div>
          <h3 className="head-text">Thank you for your feedback!!</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__whitebg"
);
