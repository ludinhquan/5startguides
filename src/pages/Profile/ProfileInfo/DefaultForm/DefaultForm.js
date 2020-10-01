import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Row } from "antd";

const DefaultForm = (props) => {
  const { name, label, rules, input, ButtonSubmit } = props;

  return (
    <Row justify="center">
      <Col span={14}>
        <Form.Item
          colon={false}
          required={false}
          name={name}
          label={label}
          rules={rules}
        >
          {input || <Input autoFocus />}
        </Form.Item>
        <Row justify="center">
          <Col>{ButtonSubmit}</Col>
        </Row>
      </Col>
    </Row>
  );
};

DefaultForm.propTypes = {
  rules: PropTypes.array,
};

DefaultForm.defaultProps = {
  rules: [],
};

export default DefaultForm;
