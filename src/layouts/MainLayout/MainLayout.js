import React, { Suspense } from "react";
import { Col, Layout, Row, Spin } from "antd";

import Header from "./Header";

import styles from "./MainLayout.module.less";
import SideMenu from "./SideMenu/SideMenu";

const { Content, Sider } = Layout;

const Loading = () => (
  <div className={styles.loading}>
    <Spin size="large" />
  </div>
);

const MainLayout = ({ children }) => {
  return (
    <Layout className={styles.container}>
      <Header />
      <Layout>
        <Sider width={368} className={styles.sider}>
          <SideMenu />
        </Sider>
        <Content>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
