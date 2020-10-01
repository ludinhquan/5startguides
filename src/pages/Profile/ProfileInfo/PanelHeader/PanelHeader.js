import React from "react";
import PropTypes from "prop-types";
import { Col, Row } from "antd";
import { CheckCircleOutlined } from "@ant-design/icons";

import styles from "./PanelHeader.module.less";

const PanelHeader = ({ field, value, isVerify }) => {
  return (
    <Row align="middle" className={styles.container}>
      <Col span={1}>
        <CheckCircleOutlined
          style={{ fontSize: 25, color: isVerify ? "#2ECC71" : "#BFBFBF" }}
        />
      </Col>
      <Col className={styles.field} span={8}>
        {field}
      </Col>
      <Col className={styles.value} span={14}>
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
