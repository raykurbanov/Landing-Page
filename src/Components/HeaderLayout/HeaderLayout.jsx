import React, { useState, useContext } from "react";
import LandingPageContext from "../../context/LandingPageContext";
import { CaretDownOutlined } from "@ant-design/icons";
import { Menu, Button, Space, Dropdown, Drawer } from "antd";
import "./HeaderLayout.css";
const items = [
  {
    label: <a href="">1st menu item</a>, //Will use <Link /> - React Router DOM
    key: "0",
  },
  {
    label: <a href="">2nd menu item</a>, //Will use <Link /> - React Router DOM
    key: "1",
  },
  {
    label: <a href="">3rd menu item</a>, //Will use <Link /> - React Router DOM
    key: "2",
  },
];

function HeaderLayout() {
  const { active } = useContext(LandingPageContext);
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <section className="container-fluid">
      <div className="header">
        <div className="logo-container">
          <div className="logo" />
          <a href="#chronologic">
            <h2 id="companyName">TimeLabs</h2>
          </a>
        </div>
        <div className="nav-links">
          <a
            href="#chronologic"
            className={active === "chronologic" && "active"}
          >
            Home
          </a>
          <a
            href="#process-mining"
            className={active === "process-mining" && "active"}
          >
            What is Process Mining?
          </a>
          <Dropdown
            menu={{
              items,
            }}
            trigger={["click"]}
          >
            <a onClick={(e) => e.preventDefault()}>
              <Space className="nav-link" id="usecases">
                Industries and Use Cases
                <CaretDownOutlined />
              </Space>
            </a>
          </Dropdown>
          <a
            href="#testimonials"
            className={active === "testimonials" && "active"}
          >
            Testimonials
          </a>
          <a href="#FAQ" className={active === "FAQ" && "active"}>
            FAQ
          </a>
          <a href="#contact" className={active === "contact" && "active"}>
            Contact Us
          </a>
        </div>
        <div className="button-container">
          <Space wrap>
            <Button type="primary" className="button-register">
              Register / Log In
            </Button>
          </Space>
        </div>
        <div className="drawer">
          <div className="logo" onClick={showDrawer} />
          <Drawer
            title="Basic Drawer"
            placement="right"
            onClose={onClose}
            open={open}
            className="drawer-component"
          >
            <div className="drawer-content">
              <a
                href="#chronologic"
                className={active === "chronologic" && "active"}
              >
                Home
              </a>
              <a
                href="#process-mining"
                className={active === "process-mining" && "active"}
              >
                What is Process Mining?
              </a>
              <Dropdown
                menu={{
                  items,
                }}
                trigger={["click"]}
              >
                <a onClick={(e) => e.preventDefault()}>
                  <Space className="nav-link" id="usecases">
                    Industries and Use Cases
                    <CaretDownOutlined />
                  </Space>
                </a>
              </Dropdown>
              <a
                href="#testimonials"
                className={active === "testimonials" && "active"}
              >
                Testimonials
              </a>
              <a href="#FAQ" className={active === "FAQ" && "active"}>
                FAQ
              </a>
              <a href="#contact" className={active === "contact" && "active"}>
                Contact Us
              </a>
            </div>
          </Drawer>
        </div>
      </div>
    </section>
  );
}

export default HeaderLayout;
