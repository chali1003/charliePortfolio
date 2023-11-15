import React from "react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, This is Charlie!</h1>
        <p className={styles.description}>
        Highly passionate and detail-oriented junior front-end website developer, driven by a deep interest in coding and troubleshooting complex problems. 
        With over five years of experience as a skilled senior marketing officer, I possess strong analytical and problem-solving abilities to identify trends and optimize processes. 
        Additionally, my effective communication skills actively contribute to driving business growth. 
        Eagerly seeking an entry-level position to apply my diverse skill set and wholeheartedly contribute to the company's success.
        </p>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
