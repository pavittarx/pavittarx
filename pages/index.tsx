import { useState } from "react";
import { motion } from "framer-motion";

import Layout from "@/_layouts/main";
import styles from "@/_assets/scss/home.module.scss";

import GithubIcon from "@/_assets/icons/github.svg";
import LinkedInIcon from "@/_assets/icons/linkedin.svg";
import MailIcon from "@/_assets/icons/mail.svg";

const SocialIcons = () => {
  const [isEmailHovered, setIsEmailHovered] = useState(false);

  const socials = [
    {
      text: "Github",
      icon: <GithubIcon />,
      link: "https://github.com/pavittarx",
    },
    {
      text: "LinkedIn",
      icon: <LinkedInIcon />,
      link: "https://linkedin.com/in/pavittarx",
    },
    {
      text: "pavittarx@gmail.com",
      icon: <MailIcon />,
      link: "mailto: pavittarx@gmail.com",
      showText: true,
    },
  ];

  const initial = {
    opacity: 0,
    x: -100,
  };

  const animate = {
    opacity: 1,
    x: 0,
  };

  return (
    <div className={styles["social-icons-ctr"]}>
      {socials &&
        socials.map((social, index) => {
          return (
            <motion.div
              key={"social-icons" + index}
              className={styles["social-icon"]}
              onClick={() => window.open(social.link, "_blank")}
              onMouseEnter={() => (index == 2 ? setIsEmailHovered(true) : null)}
              onMouseLeave={() => {
                setIsEmailHovered(false);
              }}
            >
              <span className={styles.icon}>{social.icon} </span>
              {social.showText && isEmailHovered && (
                <motion.span
                  initial={initial}
                  animate={animate}
                  className={styles["icon-text-ctr"]}
                >
                  {social.text}
                </motion.span>
              )}
            </motion.div>
          );
        })}
    </div>
  );
};

const Home = () => {
  return (
    <Layout title="Pavittar Singh">
      <div className={styles["main-ctr"]}>
        <div className={styles["top-ctr"]}>
          <div className={styles.heading}>Hey there, I'm Pavittar.</div>
          <div className={styles.text}>
            I develop web apps. I write my apps in{" "}
            <b> React, Express, Nodejs, MongoDb, and Firebase. </b>
          </div>
          <SocialIcons />
        </div>
      </div>
    </Layout>
  );
};

export default Home;
