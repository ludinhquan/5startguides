import React from "react";
import PropTypes from "prop-types";
import { Button, Col, Progress, Row } from "antd";
import Avatar from "antd/lib/avatar/avatar";

import image from "@/assets/images/Image.png";
import styles from "./ProgressUpdateProfile.module.less";
import { CameraOutlined } from "@ant-design/icons";

function ProgressUpdateProfile(props) {
  return (
    <div className={styles.container}>
      <Row gutter={24}>
        <Col>
          <div className={styles.avatar}>
            <Progress
              width={85}
              type="circle"
              percent={75}
              strokeWidth={4}
              strokeColor="#2ECC71"
              className={styles.progress}
            />
            <Avatar size={75} src={image} />
            <Button
              className={styles.button}
              shape="circle"
              icon={<CameraOutlined />}
            />
          </div>
        </Col>
        <Col>
          <div className={styles.helloText}>Xin chào, Maria</div>
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
