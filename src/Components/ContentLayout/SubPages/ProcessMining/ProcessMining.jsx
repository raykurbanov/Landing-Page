import React, { useState, useEffect, useRef, useContext } from "react";
import LandingPageContext from "../../../../context/LandingPageContext";

import "./ProcessMining.css";
import { PlayCircleOutlined } from "@ant-design/icons";

function ProcessMining() {
  const { active, setActive } = useContext(LandingPageContext);
  const [isOnScreen, setIsOnScreen] = useState(false);
  const processRef = useRef();

  const observer = new IntersectionObserver(
    ([entry]) => {
      setIsOnScreen(entry.isIntersecting);
      if (isOnScreen) {
        setActive("process-mining");
      }
    },
    { threshold: 0.8 }
  );

  useEffect(() => {
    observer.observe(processRef.current);

    return () => observer.disconnect();
  }, [isOnScreen]);

  return (
    <section
      ref={processRef}
      className="process-mining-container"
      id="process-mining"
    >
      <div className="description">
        <div className="description-left">
          <h2>What is Process Mining?</h2>
          <p>
            Most business processes are executed in centralized systems of
            record - ERPs, EHRs, CRMs, etc. These centralized systems generate
            massive amounts of data in the form of access logs that track system
            and user behavior. We use that data to digitally recreate the
            process, exactly the way it happened, to glean actionable insights
            for your business.
          </p>
          <a>
            HOW DOES IT WORK <PlayCircleOutlined className="playIcon" />
          </a>
        </div>
        <div className="description-right" />
      </div>
      <div className="graphics" id="graphics">
        <div className="graphics-left" />
        <div className="graphics-right">
          <h2>Industry Expertise Combined With Cutting Edge Technology</h2>
          <p>
            We are not a software-first company, our mission is to provide our
            clients with solutions to specific process-related challenges they
            encounter on a daily basis.
          </p>
          <a>
            Industries and use cases <PlayCircleOutlined className="playIcon" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default ProcessMining;
