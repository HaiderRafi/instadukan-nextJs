import { Button } from "antd";
import React from "react";
import styles from './header.module.css'
import Link from "next/link";
import { useObserver } from "mobx-react-lite";
import CartStore from "../store/cartStore";

const Header = () => {
  return useObserver(() => (
    <header>
      <div className={styles.mainContainer}>
        <div className={styles.subContainer}>
          <div className={styles.sub1Container}>
            <img
              className={styles.logo}
              src="https://instadukan.com/static/images/Instadukanconcept202006.png"
              alt="logo"
            />
            <p className={styles.logoText}>INSTADUKAN-e</p>
          </div>

          <div className={styles.navLinks}>
           <Link href={"/cart"}> <p className={styles.cartLink}>Cart {CartStore.items.length}</p></Link>
            <Button className="bg-blue-600" type="primary">
              Login
            </Button>
          </div>
        </div>

        <div className={styles.bottomSection}>
          <div className={styles.bottomDiv1}>
            <p className={styles.bottomP1}>Want A Ferry Ride!!!</p>
            <p className={styles.bottomP2}>
            InstaDukan-E: Your one-stop platform for quick and hassle-free ferry bookings, making island-hopping a breeze.
            </p>
            <Button className="bg-blue-600" type="primary">
              START BOOKING
            </Button>
          </div>
          <img
            // className="h-[550px] hidden md:block  "
            className={styles.bottomImg}
            src="https://instadukan.com/images/dukan-street-shops-closed-mumbai-india.png"
            alt="man-img"
          />
        </div>
      </div>
      
    </header>
    
   ) );
};

export default Header;


/**
 * 
 * <h1 className={styles.container}>sadasdasdsadasd</h1>
      <h1 className={styles.container5}>sadasdasdsadasd</h1>
 */