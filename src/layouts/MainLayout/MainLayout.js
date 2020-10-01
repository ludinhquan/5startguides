import React, { Suspense } from "react";
import { Layout, Spin } from "antd";

import Header from "./Header";
import SideMenu from "./SideMenu";

import styles from "./MainLayout.module.less";

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
        <Content className={styles.content}>
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
