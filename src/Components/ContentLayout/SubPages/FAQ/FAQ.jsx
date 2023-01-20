import React, { useState, useEffect, useRef, useContext } from "react";
import LandingPageContext from "../../../../context/LandingPageContext";
import "./FAQ.css";
import { Button } from "antd";

function FAQ() {
  const { active, setActive } = useContext(LandingPageContext);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const faqRef = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (isOnScreen) {
        setActive("FAQ");
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    observer.observe(faqRef.current);

    return () => observer.disconnect();
  }, [isOnScreen]);
  return (
    <section ref={faqRef} className="faq" id="FAQ">
      <div className="faq-header">
        <h2>Frequently Asked Questions</h2>
        <p>You ask, we answer</p>
      </div>
      <div className="faq-questions">
        <div className="questions-left">
          <div className="question" id="question-1">
            <h3>What is process mining?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
          <div className="question" id="question-2">
            <h3>How does process mining work?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
          <div className="question" id="question-3">
            <h3> Why use process mining?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
        </div>
        <div className="questions-right">
          <div className="question" id="question-4">
            <h3>Is my business process a good candidate for process mining?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
          <div className="question" id="question-5">
            <h3>What data do I need to mine a process?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
          <div className="question" id="question-6">
            <h3>How can my business get started with process mining?</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              fugiat. Possimus velit numquam ut ea nesciunt at quaerat modi
              aliquam dolor magni, eveniet id laudantium nostrum doloremque,
              culpa eum! Libero!
            </p>
          </div>
        </div>
      </div>
      <div className="faq-buttons">
        <a href="#contact-container">
          <Button type="primary" id="button-questions">
            <span>Still Have Questions? Contact Us</span>
          </Button>
        </a>
      </div>
    </section>
  );
}

export default FAQ;
