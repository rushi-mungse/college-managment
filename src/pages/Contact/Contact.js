import React from "react";
import styles from "./Contact.module.css";
// import { useEffect,useState } from "react";
// import Tabletop from "tabletop";

const Contact = () => {
  function tomsg(){
    alert("Thanks for Contacting us..! We Will Contact You Soon...")
  }
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   Tabletop.init({
  //     key: "1TK1Qj6kfA90KbmFAdnIOtKUttpJUhZoZuOPy925c6nQ",
  //     simpleSheet: true
  //   })
  //     .then((data) => setData(data))
  //     .catch((err) => console.warn(err));
  // }, []);
  return (
   
    <div className={styles.main}>
      <div className={styles.contact}>
        <div className={styles.head}>
          <h1>Contact Us</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            cumque omnis dolorem corporis nam ipsa non modi tempora quibusdam .
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>
        <div className={styles.container}>
          <div className={styles.mainBox}>
            <div className={styles.box}>
              <img src="https://img.icons8.com/ios-filled/40/26e07f/address--v1.png"  alt="images"/>
              <h4>Address</h4>
              <p>A/P:Gopalpur,Tal:Pandharpur Dist:Solapur, India</p>
            </div>
            <div className={styles.box}>
              <img src="https://img.icons8.com/ios-filled/40/26e07f/phone-not-being-used.png"  alt="images" />
              <h4>Phone</h4>
              <p>+91 9503103892</p>
            </div>
            <div className={styles.box}>
              <img src="https://img.icons8.com/26e07f/40/email.png" alt="images" />
              <h4> Email Address</h4>
              <p>coe@sveri.ac.in</p>
            </div>
          </div>
          <div className={styles.form}>
            <form action="google-sheet" autoComplete="off" method="post">
              <h4>Send Massage</h4>
              <div className={styles.inputBox}>
                <input type="text" name="fullName " required="required" />
                <span>Full Name</span>
              </div>
              <div className={styles.inputBox}>
                <input type="text" name="Email " required="required" />
                <span>Email</span>
              </div>
              <div className={styles.inputBox}>
                <textarea required="required" name="msg"></textarea>
                <span>Type your massage....</span>
              </div>
              <div className={styles.inputBoxbtn}>
                <button onClick={tomsg} type="submit" name="submit">
                  Send
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
