import React, { useState, useEffect, useRef, useContext } from "react";
import LandingPageContext from "../../../../context/LandingPageContext";

import "./Contact.css";
import { Button } from "antd";

function Contact() {
  const { active, setActive } = useContext(LandingPageContext);
  const [isOnScreen, setIsOnScreen] = useState(false);

  const contactRef = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (isOnScreen) {
        setActive("contact");
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    observer.observe(contactRef.current);
    return () => observer.disconnect();
  }, [isOnScreen]);

  return (
    <section ref={contactRef} className="contact-container" id="contact">
      <h2>Contact Us</h2>
      <p>We love to hear from prospective and existing customers!</p>
      <form action="">
        <div className="form">
          <div className="input">
            <input placeholder="First Name" required type={"text"} />
            <input placeholder="Last Name" type={"text"} />
          </div>
          <div className="input">
            <input placeholder="E-Mail Address" type={"email"} required />
            <input placeholder="Phone Number" />
          </div>
          <div className="input">
            <input
              id="company-input"
              placeholder="Company / Academic Institution"
            />
          </div>
          <div className="input">
            <input placeholder="City" />
            <input placeholder="Country" />
          </div>
          <div className="input">
            <textarea
              name="textarea"
              id="textarea"
              placeholder="Message ..."
            ></textarea>
          </div>
        </div>
        <Button type="primary" id="button-submit">
          <span>Submit</span>
        </Button>
      </form>
    </section>
  );
}

export default Contact;
