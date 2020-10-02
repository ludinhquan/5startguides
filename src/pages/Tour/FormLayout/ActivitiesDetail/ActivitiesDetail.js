import React from "react";
import PropTypes from "prop-types";
import { Col, Form, Input, Row } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import UploadImage from "@/components/UploadImage";
import styles from "./ActivitiesDetail.module.less";

const { TextArea } = Input;

const Detail = (props) => {
  const { fieldKey, name } = props;
  return (
    <>
      <div className={styles.label}>Hoạt động ngày {fieldKey + 1}</div>
      <Row>
        <Col span={2}>
          <Form.Item
            {...props}
            noStyle
            name={[name, "image"]}
            fieldKey={[fieldKey, "image"]}
          >
            <UploadImage />
          </Form.Item>
          <div className={styles.subText}>Hình ảnh minh họa</div>
        </Col>
        <Col span={22}>
          <Form.Item name={[name, "title"]} fieldKey={[fieldKey, "title"]}>
            <Input autoFocus />
          </Form.Item>
          <Form.Item
            name={[name, "description"]}
            fieldKey={[fieldKey, "description"]}
          >
            <TextArea rows={2} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
};

const ActivitiesDetail = (props) => {
  const { name } = props;
  return (
    <Form.List name={name}>
      {(fields, { add }) => {
        return (
          <div>
            {fields.map((field) => (
              <Detail key={field.key} {...field} />
            ))}
            <Row justify="center">
              <Col span={4} onClick={() => add()} className={styles.btnAddRow}>
                <PlusOutlined /> Thêm hoạt động
              </Col>
            </Row>
          </div>
        );
      }}
    </Form.List>
  );
};

ActivitiesDetail.propTypes = {
  name: PropTypes.string.isRequired,
};

export default ActivitiesDetail;
