import React, { useRef, useEffect, useState, useContext } from "react";
import LandingPageContext from "../../../../context/LandingPageContext";

import "./ChronoLogicMain.css";
import { Carousel, Button } from "antd";
import { PlayCircleOutlined } from "@ant-design/icons";

const contentStyle = {
  margin: 0,
  height: "65vh",
  color: "#fff",
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",

  lineHeight: "160px",
  textAlign: "center",
  background: "#02162d",
};

function ChornoLogicMain() {
  const { active, setActive } = useContext(LandingPageContext);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const homeRef = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (isOnScreen) {
        setActive("chronologic");
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    observer.observe(homeRef.current);
    return () => observer.disconnect();
  }, [isOnScreen]);

  return (
    <section ref={homeRef} className="main-container" id="chronologic">
      <div className="header-name">
        <h2>ChronoLogic</h2>
        <p>
          A simple and powerful process mining tool for all your business
          transformation and process improvement needs
        </p>
        <div className="video-trial-buttons">
          <Button type="primary" className="button-trial">
            Try free trial
          </Button>
          <Button type="primary" className="button-video">
            Discover video <PlayCircleOutlined />
          </Button>
        </div>
      </div>
      <div className="carousel">
        <Carousel className="carousel">
          <div className="carousel">
            <div style={contentStyle}>
              <div className="image-1" />
            </div>
          </div>
          <div className="carousel">
            <div style={contentStyle}>
              <div className="image-1" />
            </div>
          </div>
          <div className="carousel">
            <div style={contentStyle}>
              <div className="image-1" />
            </div>
          </div>
          <div className="carousel">
            <div style={contentStyle}>
              <div className="image-1" />
            </div>
          </div>
        </Carousel>
      </div>
    </section>
  );
}

export default ChornoLogicMain;
