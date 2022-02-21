import { motion } from "framer-motion";
// import { useEffect, useState } from "react";
import { images } from "../../constants";
import "./About.scss";

const About = () => {
  const abouts = [
    {
      title: "Web Development",
      description: "Iam a Beginner Developer",
      imgUrl: images.about01,
    },
    {
      title: "Mobile Applications",
      description: "Iam a Beginner Developer",
      imgUrl: images.about02,
    },
    {
      title: "Game Development",
      description: "Iam a Beginner Developer",
      imgUrl: images.about03,
    },
    {
      title: "Graphics and Animations",
      description: "Iam a Beginner Developer",
      imgUrl: images.about04,
    },
  ];

  return (
    <div>
      <h2 className="head-text">
        I know that
        <span> Good Design</span>
        <br />
        means
        <span> Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: [0.5, 1] }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 1, type: "tween" }}
            className="app__profile-item"
            key={index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default About;
