import React, { useState } from 'react'
import bgImage from '../../Assets/image 13.png'
import styles from '../registration/Registration.module.css'

export default function Registration() {
  const [name, setName] = useState();
  const [username, setUserName] = useState();
  const [email, setEmail] = useState();
  const [number, setNumber] = useState();
  const [consent, setConsent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log({ name, username, email, number, consent })
    if (!name || !username || !email || !number || !consent) {
      console.log("enter all details");
      alert("Enter all details");
      return;
    }
    else {
      //console.log({ name, username, email, number, consent })
      const currentUser = { name, username, email, number };
      localStorage.setItem("currentUser", JSON.stringify(currentUser))
      
    }
    console.log(JSON.parse(localStorage.getItem("currentUser")))

  }

  return (
    <div className={styles.page}>
      <div className='left'>
        <div className={styles.leftheader}>
          <h1>Discover new things on <br /> Super App</h1>
        </div>
        <div>
          <img src={bgImage} alt="bgimage" className={styles.bgImage} />
        </div>
      </div>
      <div className={styles.right}>
        <div>
          <div className={styles.rightheader}>
            <h2>Super App</h2>
            <h4>Create your new account</h4>
          </div>
          <div className={styles.form}>
            <input type="text" placeholder='Name'
              onChange={(e) => setName(e.target.value)
              }
            /><br />
            <input type="text" placeholder='Username'
              onChange={(e) => setUserName(e.target.value)
              }
            /><br />
            <input type="email" placeholder='Email'
              onChange={(e) => setEmail(e.target.value)
              }
            /><br />
            <input type="tel" placeholder='Number'
              onChange={(e) => setNumber(e.target.value)
              }
            /><br />
            <input type="checkbox"
              onChange={(e) => setConsent(e.target.checked)}
            />Share my registration data with Superapp<br />
            <button type="submit" onClick={handleSubmit}>SIGN UP</button>
          </div>
          <div className={styles.footer}>
            <p>By clicking on Sign up. you agree to Superapp{" "} <span>Terms and Conditions of Use</span></p>
            <p>To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}
