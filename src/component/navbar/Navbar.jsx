import styles from "../navbar/Navbar.module.scss";
import React from "react";
import logo from "../../img/logo.jpg"

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
  <div className={styles.navlinks}> <a href=""><img src={logo} alt="logo" className={styles.logo} /></a> </div>
  <ul>
    <li><a href="#">Home</a></li>
    <li><a href="#">About</a></li>
    <li><a href="#">Courses</a></li>
    <li><a href="#">Contact Us</a></li>
    <li><a href="#" className={styles.signin}>Sign In</a></li>
    <li><a href="#" className={styles.createaccount}>Create Account</a></li>
  </ul>
</nav>

  );
};
export default Navbar;
