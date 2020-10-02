import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Route, useHistory } from "react-router-dom";
import { Input, Form, Radio, Checkbox, Button } from "antd";

import Editor from "@/components/Editor";
import { getRequiredRule } from "@/utils/formRules";
import { createTourRequest } from "@/store/slices/tour";

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
  JOURNEY_OF_EXPERIENCE: "journeyOfExperience",
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

const FormLayout = (props) => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [form] = Form.useForm();
  const [isLoading, setIsLoading] = useState(false);
  const [quantityImages, setQuantityImages] = useState(0);

  const onValuesChange = (changedValues) => {
    if (changedValues[FIELDS.IMAGES]) {
      setQuantityImages(changedValues[FIELDS.IMAGES]?.length);
    }
  };

  const onSubmit = (values) => {
    setIsLoading(true);
    dispatch(createTourRequest(values))
      .then(() => {
        history.push("/tours");
      })
      .catch(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.title}>Thêm Tour</div>
      <Form
        form={form}
        layout="vertical"
        onFinish={onSubmit}
        onValuesChange={onValuesChange}
        autoComplete="off"
        initialValues={{
          [FIELDS.ACTIVITIES_DETAIL]: [],
        }}
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

FormLayout.propTypes = {};

export default FormLayout;
