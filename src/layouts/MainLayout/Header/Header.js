import React from "react";
import { Link } from "react-router-dom";
import {
  Badge,
  Button,
  Col,
  Dropdown,
  Input,
  Layout,
  Menu,
  Row,
  Avatar,
} from "antd";
import {
  BellOutlined,
  CaretDownOutlined,
  MailOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import logo from "@/assets/images/logo.png";
import avatar from "@/assets/images/avatar.png";

import styles from "./Header.module.less";

const Header = (props) => {
  return (
    <Layout.Header className={styles.container}>
      <Row justify="space-between">
        <Col className={styles.brand}>
          <img src={logo} alt="" />
          <Link to="/" className={styles.companyName}>
            5starguides
          </Link>
          <Input
            size="large"
            className={styles.search}
            placeholder="Bất cứ đâu - Trải nghiệm"
            prefix={<SearchOutlined />}
          />
        </Col>
        <Col>
          <Row gutter={24}>
            <Col>
              <Dropdown
                overlay={
                  <Menu>
                    <Menu.Item key="1">1st menu item</Menu.Item>
                    <Menu.Item key="2">2nd menu item</Menu.Item>
                    <Menu.Item key="3">3rd menu item</Menu.Item>
                  </Menu>
                }
              >
                <span className={styles.linkItem}>
                  Khám phá <CaretDownOutlined />
                </span>
              </Dropdown>
            </Col>
            <Col>
              <span className={styles.linkItem}>Về chúng tôi</span>
            </Col>
            <Col>
              <span className={styles.linkItem}>Blog</span>
            </Col>
            <Col>
              <Badge count={5}>
                <Button
                  className={styles.icon}
                  icon={<MailOutlined />}
                  shape="circle"
                  size="large"
                />
              </Badge>
            </Col>
            <Col>
              <Badge count={10}>
                <Button
                  className={styles.icon}
                  icon={<BellOutlined />}
                  shape="circle"
                  size="large"
                />
              </Badge>
            </Col>
            <Col>
              <Avatar
                className={styles.imageAvatar}
                size="large"
                src={avatar}
              />
              <span className={styles.linkItem}>
                Tùng Phan <CaretDownOutlined />
              </span>
            </Col>
          </Row>
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
