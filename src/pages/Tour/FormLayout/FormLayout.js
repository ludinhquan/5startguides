import React, { useImperativeHandle, useState } from "react";
import PropTypes from "prop-types";
import { Input, Form, Radio, Checkbox, Button } from "antd";

import Editor from "@/components/Editor";
import { getRequiredRule } from "@/utils/formRules";

import Images from "./Images";
import RangeFee from "./RangeFee";
import ActivitiesDetail from "./ActivitiesDetail";

import styles from "./FormLayout.module.less";

export const FIELDS = {
  TOUR_NAME: "name",
  TOUR_TYPE: "tourType",
  ACTIVITIES: "activities",
  RANGE_FEE: "rangeFee",
  IMAGES: "images",
  DESCRIPTION: "description",
  ACTIVITIES_DETAIL: "activitiesDetail",
};

const CheckboxGroup = Checkbox.Group;

const activitiesOption = [
  "Tham quan ngắm cảnh",
  "Trải nghiệm Nông trại và Vùng sâu",
  "Mạo hiểm ngoài trời",
  "Ẩm thực",
  "Văn hóa và Giáo dục",
  "Kinh doanh Đầu tư",
];

const tourTypeOptions = [
  { label: "Về trong ngày", value: "1" },
  { label: "Trọn gói", value: "2" },
];

const MIN_IMAGES = 7;

const FormLayout = (props, ref) => {
  const { onSubmit, isLoading } = props;
  const [form] = Form.useForm();

  const [quantityImages, setQuantityImages] = useState(0);

  const onValuesChange = (changedValues) => {
    if (changedValues[FIELDS.IMAGES]) {
      setQuantityImages(changedValues[FIELDS.IMAGES]?.length);
    }
  };

  const setFieldsValue = (fieldsValue) => {
    form.setFieldsValue(fieldsValue);
  };

  useImperativeHandle(ref, () => ({
    setFieldsValue,
  }));

  return (
    <div className={styles.container}>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        onValuesChange={onValuesChange}
        autoComplete="off"
      >
        <Form.Item
          required={false}
          name={FIELDS.TOUR_NAME}
          label="Tên của Tour ?"
          rules={[getRequiredRule()]}
        >
          <Input />
        </Form.Item>
        <Form.Item name={FIELDS.TOUR_TYPE} label="Loại hình của Tour ?">
          <Radio.Group
            className={styles.radioGroup}
            options={tourTypeOptions}
          />
        </Form.Item>
        <Form.Item
          name={FIELDS.ACTIVITIES}
          label="Những hoạt động trải nghiệm ?"
        >
          <CheckboxGroup
            className={styles.checkboxGroup}
            options={activitiesOption}
          />
        </Form.Item>
        <Form.Item
          className={styles.fee}
          name={FIELDS.RANGE_FEE}
          label="Chi phí"
        >
          <RangeFee />
        </Form.Item>
        <Form.Item
          name={FIELDS.IMAGES}
          label={`Hình ảnh về Tour (${quantityImages}/${MIN_IMAGES})`}
        >
          <Images />
        </Form.Item>
        <Form.Item
          name={FIELDS.DESCRIPTION}
          label="Du khách sẽ được trải nghiệm những gì ?"
        >
          <Editor />
        </Form.Item>
        <div className="ant-form-item-label">
          Hành trình trải nghiệm của Du khách như thế nào?
        </div>
        <ActivitiesDetail name={FIELDS.ACTIVITIES_DETAIL} />

        <Form.Item noStyle>
          <Button
            block
            type="primary"
            htmlType="submit"
            loading={isLoading}
            className={styles.btnSave}
          >
            Lưu Tour
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default React.forwardRef(FormLayout);

FormLayout.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
