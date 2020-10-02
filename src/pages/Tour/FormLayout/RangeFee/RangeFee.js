import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Slider } from "antd";

const RangeFee = (props) => {
  const { value, onChange: onUpdateForm } = props;

  return (
    <Row justify="space-between">
      <Col>Chi phí mỗi giờ dành cho 1 người</Col>
      <Col span={12}>
        <Slider
          range
          step={1}
          max={50}
          tooltipVisible
          defaultValue={value || [10, 30]}
          onAfterChange={(range) => onUpdateForm(range)}
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
};

export default RangeFee;
