import React, { useRef, useState, useEffect, useContext } from "react";
import LandingPageContext from "../../../../context/LandingPageContext";

import "./Testimonials.css";
import user1 from "../../../../assets/img/profilePic.jpg";
import user1Logo from "../../../../assets/client-logos/userlogo1.svg";
import { Carousel, Avatar } from "antd";
const contentStyle = {
  margin: 0,
  color: "#black",
  background: "#f3f3f3",
};

function Testimonials() {
  const { active, setActive } = useContext(LandingPageContext);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const testimonialsRef = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (isOnScreen) {
        setActive("testimonials");
      }
    },
    { threshold: 1 }
  );

  useEffect(() => {
    observer.observe(testimonialsRef.current);

    return () => observer.disconnect();
  }, [isOnScreen]);

  return (
    <section
      ref={testimonialsRef}
      className="review-faq-container"
      id="testimonials"
    >
      <div className="customer-review">
        <h1>Customer Testimonials</h1>
        <Carousel className="carousel">
          <div className="carousel">
            <div style={contentStyle} className="review-container">
              <div className="review-left">
                <div className="avatar">
                  <Avatar size={64} src={user1} />
                </div>
                <div className="content-info">
                  <div className="brand">
                    <img src={user1Logo} />
                  </div>
                  <div className="client">
                    <p id="client-info">
                      Client text that will serve as a testimonial for how
                      awesome our solution is. The text will be filled out once
                      we have acquired our first few customers.
                    </p>
                    <h5>Client Name</h5>
                    <p id="title-company">Title and Company</p>
                  </div>
                </div>
              </div>
              <div className="review-right">
                <div className="avatar">
                  <Avatar size={64} src={user1} />
                </div>
                <div className="content-info">
                  <div className="brand">
                    <img src={user1Logo} />
                  </div>
                  <div className="client">
                    <p id="client-info">
                      Client text that will serve as a testimonial for how
                      awesome our solution is. The text will be filled out once
                      we have acquired our first few customers.
                    </p>
                    <h5>Client Name</h5>
                    <p id="title-company">Title and Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel">
            <div style={contentStyle} className="review-container">
              <div className="review-left">
                <div className="avatar">
                  <Avatar size={64} src={user1} />
                </div>
                <div className="content-info">
                  <div className="brand">
                    <img src={user1Logo} />
                  </div>
                  <div className="client">
                    <p id="client-info">
                      Client text that will serve as a testimonial for how
                      awesome our solution is. The text will be filled out once
                      we have acquired our first few customers.
                    </p>
                    <h5>Client Name</h5>
                    <p id="title-company">Title and Company</p>
                  </div>
                </div>
              </div>
              <div className="review-right">
                <div className="avatar">
                  <Avatar size={64} src={user1} />
                </div>
                <div className="content-info">
                  <div className="brand">
                    <img src={user1Logo} />
                  </div>
                  <div className="client">
                    <p id="client-info">
                      Client text that will serve as a testimonial for how
                      awesome our solution is. The text will be filled out once
                      we have acquired our first few customers.
                    </p>
                    <h5>Client Name</h5>
                    <p id="title-company">Title and Company</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default Testimonials;
