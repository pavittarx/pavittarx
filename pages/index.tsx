import { ReactPropTypes, useState } from "react";
import { motion } from "framer-motion";
import { gql, createClient } from "@urql/core";

import { NextPageContext } from "next";
import dynamic from "next/dynamic";

import Layout from "@/_layouts/main";
import styles from "@/_assets/scss/home.module.scss";
import {BlogType} from "@/types/home";

import GithubIcon from "@/_assets/icons/github.svg";
import LinkedInIcon from "@/_assets/icons/linkedin.svg";
import MailIcon from "@/_assets/icons/mail.svg";

const JSIcon = dynamic(() => import("@/_assets/icons/javascript.svg"));
const ReactIcon = dynamic(() => import("@/_assets/icons/react.svg"));
const GitIcon = dynamic(() => import("@/_assets/icons/git.svg"));
const FirebaseIcon = dynamic(() => import("@/_assets/icons/firebase.svg"));
const MongoIcon = dynamic(() => import("@/_assets/icons/mongodb.svg"));
const SassIcon = dynamic(() => import("@/_assets/icons/sass.svg"));
const NodeIcon = dynamic(() => import("@/_assets/icons/nodejs.svg"));
const VSCodeIcon = dynamic(() => import("@/_assets/icons/vscode.svg"));
const FigmaIcon = dynamic(() => import("@/_assets/icons/figma.svg"));

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
              onClick={() => setTimeout(() => window.open(social.link, "_blank"), 1000)}
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

const Skills = () => {
  const skills = [
    {
      name: "React",
      icon: <ReactIcon />,
    },
    {
      name: "Sass",
      icon: <SassIcon />,
    },
    {
      name: "Javascript",
      icon: <JSIcon />,
    },
    {
      name: "NodeJs",
      icon: <NodeIcon />,
    },
    {
      name: "MongoDB",
      icon: <MongoIcon />,
    },
    {
      name: "Firebase",
      icon: <FirebaseIcon />,
    },
    {
      name: "Git",
      icon: <GitIcon />,
    },
    {
      name: "VS Code",
      icon: <VSCodeIcon />,
    },
    {
      name: "Figma",
      icon: <FigmaIcon />,
    },
  ];

  return (
    <section className={styles["skills-block"]}>
      <h2> Skills </h2>
      <div className={styles["skills-ctr"]}>
        {skills.map((skill, index) => (
          <div key={"skill" + index} className={styles["skill-item"]}>
            <span className={styles.icon}> {skill.icon} </span>
            <span className={styles.text}> {skill.name} </span>
          </div>
        ))}
      </div>
    </section>
  );
};

const Blogs = ({ blogs }: { blogs: Array<BlogType> }) => {
  return <> 
  {blogs && blogs.length > 0 && blogs.map(blog => {
    return <div className={styles["blog-box"]}>
      <h5 className={styles.title}> {blog.title} </h5>
      <div className={styles.brief}> {blog.brief} </div>
    </div>

  })}
  </>;
};

const Home = ({ blogs }: { blogs: Array<BlogType> }) => {
  console.log(blogs);

  return (
    <Layout title="Pavittar Singh">
      <div className={styles["main-ctr"]}>
        <div className={styles["left-ctr"]}>
          <div className={styles["top-ctr"]}>
            <div className={styles.heading}>Hey there, I'm Pavittar.</div>
            <div className={styles.text}>
              I develop web apps. I write my apps in
              <b> React, Express, Nodejs, MongoDb, and Firebase. </b>
            </div>
            <SocialIcons />
            <Skills />
          </div>
        </div>
        <div className={styles["right-ctr"]}>
          <h3>Recent Blogs</h3>
          <Blogs blogs={blogs}/>
        </div>
      </div>
    </Layout>
  );
};

export default Home;

export async function getStaticProps(context: NextPageContext) {
  const client = createClient({
    url: "https://api.hashnode.com",
  });

  const BlogsQuery = gql`
    {
      user(username: "pavittarx") {
        publication {
          posts(page: 0) {
            title
            slug
            brief
          }
        }
      }
    }
  `;

  let blogs = await client
    .query(BlogsQuery)
    .toPromise()
    .then((result) => {
      return result?.data?.user?.publication?.posts;
    });

  return {
    props: {
      blogs,
    },
  };
}
