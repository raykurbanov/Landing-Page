import { Layout } from "antd";
import React from "react";
import ChronoLogicMain from "./SubPages/ChronoLogicMain/ChronoLogicMain";
import ProcessMining from "./SubPages/ProcessMining/ProcessMining";
import Testimonials from "./SubPages/Testimonials/Testimonials";
import FAQ from "./SubPages/FAQ/FAQ";
import Contact from "./SubPages/Contact/Contact";
const { Content } = Layout;

function ContentLayout() {
  return (
    <Content>
      <ChronoLogicMain />
      <ProcessMining />
      <Testimonials />
      <FAQ />
      <Contact />
    </Content>
  );
}

export default ContentLayout;
