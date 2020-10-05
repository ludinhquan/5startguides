import React from "react";
import cx from "classnames";
import { Drawer, Layout } from "antd";
import { GlobalOutlined } from "@ant-design/icons";

import lockIcon from "@/assets/svg/lock.svg";
import editUserIcon from "@/assets/svg/edit-user.svg";
import signoutIcon from "@/assets/svg/signout.svg";

import SideMenuItem from "./SideMenuItem";
import ProgressUpdateProfile from "./ProgressUpdateProfile";
import styles from "./SideMenu.module.less";

const SideMenu = ({ isMobile, closeDrawer }) => {
  return (
    <div className={styles.container}>
      <ProgressUpdateProfile />
      <SideMenuItem
        onClick={closeDrawer}
        icon={<GlobalOutlined />}
        text="Yêu cầu cộng đồng"
        badge={{ count: 4 }}
        border={false}
      />
      <div className={styles.title}>Quản lí tài khoản</div>
      {[
        {
          icon: <img src={editUserIcon} alt="" />,
          text: "Cập nhật hồ sơ",
          badge: { count: 3 },
          to: "/profile",
        },
        {
          icon: <img src={lockIcon} alt="" />,
          text: "Đổi mật khẩu",
        },
        {
          icon: <img src={signoutIcon} alt="" />,
          text: "Đăng xuất",
        },
      ].map((prop) => (
        <SideMenuItem onClick={closeDrawer} key={prop.text} {...prop} />
      ))}
      <div className={styles.title}>Quản lí Tour</div>
      {[
        {
          icon: <img src={editUserIcon} alt="" />,
          text: "Thêm Tour",
          to: "/create-tour",
        },
        {
          icon: <img src={lockIcon} alt="" />,
          text: "Quản lí Tour",
          badge: { count: 4, type: "secondary" },
          to: "/tours",
        },
      ].map((prop) => (
        <SideMenuItem onClick={closeDrawer} key={prop.text} {...prop} />
      ))}
      <div className={styles.title}>Quản lí bài viết</div>
      {[
        {
          icon: <img src={editUserIcon} alt="" />,
          text: "Thêm bài viết",
        },
        {
          icon: <img src={lockIcon} alt="" />,
          text: "Quản lí bài viết",
          badge: { count: 4, type: "secondary" },
        },
      ].map((prop) => (
        <SideMenuItem key={prop.text} {...prop} />
      ))}
    </div>
  );
};

export default ({ isMobile, isCollapsed, setIsCollapsed }) => {
  const closeDrawer = () => {
    setIsCollapsed(true);
  };

  return isMobile ? (
    <Drawer
      className={styles.drawer}
      visible={!isCollapsed}
      placement="left"
      closable={false}
      onClose={closeDrawer}
      bodyStyle={{
        padding: 0,
        height: "100vh",
      }}
    >
      <Layout.Sider className={cx(styles.sider, styles.mobile)}>
        <SideMenu closeDrawer={closeDrawer} />
      </Layout.Sider>
    </Drawer>
  ) : (
    <Layout.Sider className={styles.sider} width={368}>
      <SideMenu />
    </Layout.Sider>
  );
};
