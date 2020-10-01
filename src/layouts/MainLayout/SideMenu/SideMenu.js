import React from "react";
import { GlobalOutlined } from "@ant-design/icons";

import lockIcon from "@/assets/svg/lock.svg";
import editUserIcon from "@/assets/svg/edit-user.svg";
import signoutIcon from "@/assets/svg/signout.svg";

import SideMenuItem from "./SideMenuItem";
import ProgressUpdateProfile from "./ProgressUpdateProfile";
import styles from "./SideMenu.module.less";

const SideMenu = () => {
  return (
    <div className={styles.container}>
      <ProgressUpdateProfile />
      <SideMenuItem
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
        <SideMenuItem key={prop.text} {...prop} />
      ))}
      <div className={styles.title}>Quản lí Tour</div>
      {[
        {
          icon: <img src={editUserIcon} alt="" />,
          text: "Thêm Tour",
        },
        {
          icon: <img src={lockIcon} alt="" />,
          text: "Quản lí Tour",
          badge: { count: 4, type: "secondary" },
        },
      ].map((prop) => (
        <SideMenuItem key={prop.text} {...prop} />
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

export default SideMenu;
