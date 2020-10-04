import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Row } from "antd";

const DefaultForm = (props) => {
  const {
    name,
    label,
    rules,
    labelCol,
    component,
    formLayout,
    buttonSubmit,
  } = props;

  return (
    <Row justify="center">
      <Col {...formLayout}>
        <Form.Item
          labelCol={labelCol}
          colon={false}
          required={false}
          name={name}
          label={label}
          rules={rules}
        >
          {component || <Input autoFocus />}
        </Form.Item>
        <Row justify="center">
          <Col>{buttonSubmit}</Col>
        </Row>
      </Col>
    </Row>
  );
};

DefaultForm.propTypes = {
  rules: PropTypes.array,
  formLayout: PropTypes.object,
  labelCol: PropTypes.object,
};

DefaultForm.defaultProps = {
  rules: [],
  formLayout: { span: 16 },
  labelCol: { span: 6 },
};

export default DefaultForm;
