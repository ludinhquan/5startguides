import React from "react";
import { useSelector } from "react-redux";
import { CameraOutlined } from "@ant-design/icons";
import { Avatar, Button, Col, Progress, Row } from "antd";

import { profileSelector } from "@/store/selectors/user";

import styles from "./ProgressUpdateProfile.module.less";

function ProgressUpdateProfile() {
  const profile = useSelector(profileSelector);
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col span={7}>
          <div className={styles.avatar}>
            <Progress
              width={85}
              type="circle"
              percent={75}
              strokeWidth={4}
              strokeColor="#2ECC71"
              className={styles.progress}
            />
            <Avatar size={75} src={profile?.avatar} />
            <Button
              className={styles.button}
              shape="circle"
              icon={<CameraOutlined />}
            />
          </div>
        </Col>
        <Col span={17}>
          <div className={styles.helloText}>Xin chào, {profile?.lastName}</div>
          <div>
            Bạn đã hoàn thành <b>75%</b> hồ sơ,
          </div>
          <div>Hãy tiếp tục!</div>
        </Col>
      </Row>
    </div>
  );
}

ProgressUpdateProfile.propTypes = {};

export default ProgressUpdateProfile;
