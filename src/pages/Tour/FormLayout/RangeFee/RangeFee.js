import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Slider } from "antd";

import styles from "./RangeFee.module.less";

const RangeFee = (props) => {
  const { value, onChange: onUpdateForm } = props;

  return (
    <Row className={styles.container}>
      <Col className={styles.text}>Chi phí mỗi giờ dành cho 1 người</Col>
      <Col xs={24} md={12}>
        <Slider
          range
          step={1}
          max={50}
          tooltipVisible
          value={value}
          onChange={(range) => onUpdateForm(range)}
          tipFormatter={(value) => `$${value}`}
          getTooltipPopupContainer={(trigger) => trigger.parentNode}
          marks={{
            0: "Free",
            50: "> $50",
          }}
        />
      </Col>
    </Row>
  );
};

RangeFee.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.array,
};
RangeFee.defaultProps = {
  value: [0, 50],
};

export default RangeFee;
