import React from "react";
import cx from "classnames";
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
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
} from "@ant-design/icons";

import logo from "@/assets/images/logo.png";
import avatar from "@/assets/images/avatar.png";

import styles from "./Header.module.less";

const HeaderMobile = ({ isMobile, isCollapsed, setIsCollapsed }) => (
  <Layout.Header className={cx(styles.container, styles.mobile)}>
    <Row justify="space-between" align="middle">
      <Col>
        {React.createElement(
          isCollapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
          {
            className: styles.collapseTrigger,
            onClick: () => {
              setIsCollapsed((prevState) => !prevState);
            },
          }
        )}
      </Col>
      <Col className={styles.brand}>
        <Input
          size={isMobile ? "small" : "large"}
          className={styles.search}
          placeholder="Bất cứ đâu - Trải nghiệm"
          prefix={<SearchOutlined />}
        />
      </Col>
      <Col>
        <Dropdown
          overlay={
            <Menu>
              <Menu.Item key="1">
                Khám phá <CaretDownOutlined />
              </Menu.Item>
              <Menu.Item key="2">Về chúng tôi</Menu.Item>
              <Menu.Item key="3">Blog</Menu.Item>
              <Menu.Item key="3">
                <Row justify="space-around">
                  <Col>
                    <Badge count={5} size="small">
                      <Button
                        className={styles.icon}
                        icon={<MailOutlined />}
                        shape="circle"
                        size="small"
                      />
                    </Badge>
                  </Col>
                  <Col>
                    <Badge count={3} size="small">
                      <Button
                        className={styles.icon}
                        icon={<BellOutlined />}
                        shape="circle"
                        size="small"
                      />
                    </Badge>
                  </Col>
                </Row>
              </Menu.Item>
            </Menu>
          }
        >
          <Avatar className={styles.imageAvatar} size="large" src={avatar} />
        </Dropdown>
      </Col>
    </Row>
  </Layout.Header>
);

const HeaderDesktop = () => {
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

export default ({ isMobile, isCollapsed, setIsCollapsed }) =>
  isMobile ? (
    <HeaderMobile isCollapsed={isCollapsed} setIsCollapsed={setIsCollapsed} />
  ) : (
    <HeaderDesktop />
  );
