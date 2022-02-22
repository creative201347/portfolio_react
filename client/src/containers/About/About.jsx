import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { urlFor, client } from "../../client";
import "./About.scss";

const About = () => {
  const [abouts, setAbouts] = useState([]);
  useEffect(() => {
    const query = '*[_type == "abouts"]';
    client.fetch(query).then((data) => {
      setAbouts(data);
      console.log(data);
    });
  }, []);

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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
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
