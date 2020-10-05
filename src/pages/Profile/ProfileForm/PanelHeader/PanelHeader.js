import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import styles from "./PanelHeader.module.less";

const PanelHeader = ({ field, value, isVerify }) => {
  return (
    <Row align="middle" justify="space-between" className={styles.container}>
      <Col className={styles.field} md={8}>
        <CheckCircleOutlined
          style={{ fontSize: 25, color: isVerify ? "#2ECC71" : "#BFBFBF" }}
        />
        <span className={styles.text}>{field}</span>
      </Col>
      <Col className={styles.value} md={13} lg={14}>
        {value}
      </Col>
    </Row>
  );
};

PanelHeader.propTypes = {
  field: PropTypes.string.isRequired,
  value: PropTypes.any,
  isVerify: PropTypes.bool,
};

PanelHeader.defaultProps = {
  isVerify: true,
};

export default PanelHeader;
