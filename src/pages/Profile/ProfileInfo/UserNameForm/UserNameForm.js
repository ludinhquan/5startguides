import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Row } from "antd";
import { FIELDS } from "@/pages/Profile";
import { getRequiredRule } from "@/utils/formRules";

const UserNameForm = (props) => {
  const { ButtonSubmit } = props;

  return (
    <Row justify="center">
      <Col span={14}>
        <Form.Item
          colon={false}
          required={false}
          rules={[getRequiredRule()]}
          name={FIELDS.LAST_NAME}
          label="Họ của bạn"
        >
          <Input autoFocus />
        </Form.Item>
        <Form.Item
          colon={false}
          required={false}
          rules={[getRequiredRule()]}
          name={FIELDS.FIRST_NAME}
          label="Tên của bạn"
        >
          <Input />
        </Form.Item>
        <Row justify="center">
          <Col>{ButtonSubmit}</Col>
        </Row>
      </Col>
    </Row>
  );
};

UserNameForm.propTypes = {};

export default UserNameForm;
