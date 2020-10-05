import React from "react";
import { useMedia } from "react-media";
import { Col, Form, Input, Row } from "antd";

import { FIELDS } from "@/pages/Profile";
import { getRequiredRule } from "@/utils/formRules";

const UserNameForm = (props) => {
  const { buttonSubmit } = props;

  const isMobile = useMedia({ query: "(max-width: 1033px)" });
  const customFormLayout = isMobile ? { span: 24 } : { span: 16 };

  return (
    <>
      <Row justify="center">
        <Col {...customFormLayout}>
          <Form.Item
            colon={false}
            required={false}
            labelCol={{ span: 6 }}
            rules={[getRequiredRule()]}
            name={FIELDS.LAST_NAME}
            label="Họ của bạn"
          >
            <Input autoFocus />
          </Form.Item>
          <Form.Item
            colon={false}
            required={false}
            labelCol={{ span: 6 }}
            rules={[getRequiredRule()]}
            name={FIELDS.FIRST_NAME}
            label="Tên của bạn"
          >
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center">
        <Col>{buttonSubmit}</Col>
      </Row>
    </>
  );
};

UserNameForm.propTypes = {};

export default UserNameForm;
