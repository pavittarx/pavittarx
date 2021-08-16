import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "@/_layouts/main";

import styles from "@/_assets/scss/about.module.scss";
import pavittarx from "@/_assets/images/pavittarx.jpeg";

const AboutPage = () => {
  return (
    <Layout title="About | @pavittarx">
      <main className={styles["about-main-ctr"]}>
        <h1>About Me</h1>
        <div className={styles["image-ctr"]}>
          <Image className={styles.image} {...pavittarx} alt="Pavittar Singh" />
          <div />
        </div>

        <section className={styles["about-ctr"]}>
          <p className={styles["about-para"]}>
            I am a <b>fullstack developer</b> from India. I love building web
            apps in <b>Nodejs, Typescript, Javascript</b> and <b>React.</b>
          </p>

          <p className={styles["about-para"]}>
            I like watching anime, movies, reading books in my leisure time.
            Also, currently I am looking to get into App Development with
            Flutter, as well as exploring into AI/ML.
          </p>

          <h3>Work & Education Timeline</h3>

          <li>
            I started my <b>Masters in Computer Applications (MCA)</b> fall
            semester 2021 from <b>IGNOU</b>.
          </li>
          <li>
            I started working as a <b>MERN Stack Developer</b> at Applore
            Technologies.
          </li>
          <li>
            I worked on <b>The Loot</b> by Infini8 Innovations as a full stack
            Developer.
          </li>
          <li>
            I completed a certification titled
            <b> Javascript Algorithms and Data Structures </b> from
            <b> freeCodeCamp </b>
            in 2020.
          </li>
          <li>I worked as a <b>Web Developer Intern</b> at Augment Systems.</li>
          <li> I completed my <b>Bachelors of Computer Applications (BCA)</b> from <b>IGNOU</b> in fall 2018.</li>
        </section>
      </main>
    </Layout>
  );
};

export default AboutPage;
