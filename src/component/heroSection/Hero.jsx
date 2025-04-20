import { section } from "framer-motion/client";
import styles from "../heroSection/Hero.module.scss";
import react from "react";
import heroimg from "../../img/1.jpg";
import { FaSearch } from "react-icons/fa";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <motion.div
        className={styles.textArea}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.badge}>
          <h1>
            Get Started Your <br />
            <span>Learning &</span> <br />
            Enrich Your Dream
          </h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search Your Course" />
          <select>
            <option>Categories</option>
          </select>
          <select>
            <option>Diploma</option>
          </select>
          <button>
            <FaSearch />
            Search
          </button>
        </div>
      </motion.div>
      <motion.div
        className={styles.imageArea}
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <img src={heroimg} alt="hero" />
      </motion.div>
    </section>
  );
};

export default Hero;
