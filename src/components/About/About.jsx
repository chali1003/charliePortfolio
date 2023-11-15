import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>ALL ABOUT ME</h2>
      <div className={styles.content}>
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/info.png")} alt="Info Icon" />
            <div className={styles.aboutItemText}>
              <h3>About Me</h3>
              <p>
              Finished "CLAP@JC x Generation " - Front-end Web Developer Program
              5 years + experiences across traditional and digital  marketing management<br></br>
              Worked in F&B, hospitality and digital marketing agency<br></br>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/qa.png")} alt="Q&A Icon" />
            <div className={styles.aboutItemText}>
              <h3>What is being a junior developer means to me?</h3>
              <p>
              As a junior developer, I'm dedicated to learning and growing. Working with experienced developers will refine my craft. 
              I'm eager to contribute to software development teams, drawing on my marketing experience in communication, data analysis, and project management. 
              Excited to apply my skills in creating innovative software solutions.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/question.png")} alt="Question Icon" />
            <div className={styles.aboutItemText}>
              <h3>Why do I think I would be a good fit for your company?</h3>
              <p>
              Experienced marketer with expertise in marketing and technology. Skilled in front-end development tools, facilitating effective communication with developers. 
              Extensive experience in developing and implementing successful marketing strategies across industries. 
              I can assist front-end developer companies in creating robust marketing plans aligned with business objectives, target audience, and market trends.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
