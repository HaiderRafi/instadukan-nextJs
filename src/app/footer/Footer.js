import React from "react";
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from "react-icons/fa";
import styles from './footer.module.css'

let Footer = () => {
  return (
    <>
      <div className={styles.mainDiv}>
        <div className={styles.mainDiv1}>
          <div className={styles.mainDiv2}>
            <h1>COMPANY</h1>
            <ul>
              <li className={styles.liFirst}>About us</li>
              <li className={styles.liAll}>Team</li>
              <li className={styles.liAll}>Career</li>
              <li className={styles.liAll}>Dukan Blog</li>
              <li className={styles.liAll}>Bug Bounty</li>
              <li className={styles.liAll}>Dukan One</li>
              <li className={styles.liAll}>Dukan Corporate</li>
              <li className={styles.liAll}>Dukan Instamart</li>
              <li className={styles.liAll}>Dukan Genie</li>
            </ul>
          </div>

          <div className={styles.secondDiv}>
            <h1>CONTACT</h1>
            <ul>
              <li className={styles.liFirst}>Help & Support</li>
              <li className={styles.liAll}>Partner with us</li>
              <li className={styles.liAll}>Dukan with us</li>
            </ul>
          </div>

          <div className={styles.secondDiv}>
            <h1>LEGAL</h1>
            <ul>
              <li className={styles.liFirst}>Terms & Conditions</li>
              <li className={styles.liAll}>Refund & Cancellation</li>
              <li className={styles.liAll}>Privacy Policy</li>
              <li className={styles.liAll}>Cookie Policy</li>
              <li className={styles.liAll}>Offer Terms</li>
              <li className={styles.liAll}>Phishing & Fraud</li>
              <li className={styles.liAll}>
                Corporate – InstaDukan Money Codes
              </li>
              <li className="text-white pt-1 ">Corporate - InstaDukan Discount</li>
            </ul>
          </div>
          <div className="text-gray-400 text-lg font-semibold">
            <img
              className="w-[300px]"
              src="https://www.freepnglogos.com/uploads/app-store-logo-png/apple-app-store-travel-awards-globestamp-7.png"
              alt="img"
            />
          </div>
        </div>

        <div className="pt-10 flex justify-evenly items-center">
          <div>
            <a href="/">
                {/* <img
              className="w-[200px]"
              src="https://driver-media-assets.swiggy.com/drivers/q_auto,f_auto,fl_lossy,c_fill/ride-with-us/icons/footer.png"
            /> */}
            <h1 className="text-white font-extrabold text-4xl">Instadukan-e</h1>
            </a>
          </div>

          <div className="text-gray-400 text-lg font-semibold ">
            {" "}
            &copy;Haider Rafi
          </div>
          <div className="flex">
            <a
              href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"
              target="_blank"
            >
              {" "}
              <div className="pr-2">
                <FaTwitter size="2.5rem" className="fill-white " />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/haider-rafi-5181b9255/"
              target="_blank"
            >
              <div className="pr-2">
                <FaLinkedinIn size="2.5rem" className="fill-white " />
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              {" "}
              <div className="pr-2">
                <FaInstagram size="2.5rem" className="fill-white " />
              </div>
            </a>
            <a href="https://github.com/HaiderRafi" target="_blank">
              <div className="pr-2">
                <FaGithub size="2.5rem" className="fill-white " />
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
