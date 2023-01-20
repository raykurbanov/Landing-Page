import React from "react";
import HeaderLayout from "../../Components/HeaderLayout/HeaderLayout";
import ContentLayout from "../../Components/ContentLayout/ContentLayout";
import FooterLayout from "../../Components/FooterLayout/FooterLayout";
import { Layout } from "antd";

function LandingPage() {
  const sections = document.querySelectorAll("section");
  console.log(sections);
  return (
    <Layout className="mainLayout">
      <HeaderLayout />
      <ContentLayout />
      <FooterLayout />
    </Layout>
  );
}

export default LandingPage;
