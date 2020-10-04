import React, { useState } from "react";
import moment from "moment";
import { Button, Form, DatePicker } from "antd";
import { useDispatch, useSelector } from "react-redux";

import { profileSelector } from "@/store/selectors/user";
import { formatDateTime, formatVietnamesePhone } from "@/utils/format";

import ProfileInfo from "./ProfileForm";
import FormItem from "./ProfileForm/FormItem";
import UserNameForm from "./ProfileForm/UserNameForm";

import styles from "./Profile.module.less";
import {
  getEmailRule,
  getPhoneNumberRule,
  getRequiredRule,
} from "@/utils/formRules";
import { updateProfileRequest } from "@/store/slices/user";
import TextArea from "antd/lib/input/TextArea";

export const FIELDS = {
  USER_NAME: "userName",
  FIRST_NAME: "firstName",
  LAST_NAME: "lastName",
  DATE_OF_BIRTH: "dateOfBirth",
  EMAIL: "email",
  PHONE_NUMBER: "phoneNumber",
  YEARS_OF_EXPERIENCE: "yearsOfExperience",
  AREA: "area",
  TRIP_TYPE: "tripType",
  TOUR_REGULAR: "tourRegular",
  // Other info
  FEE: "fee",
  LICENCE: "licence",
  CLEARANCE: "Clearance",
  VALID_WORKING_WITH_CHILDREN: "validWorkingwithChildren",
  VALID_FIRSTAID_CERTIFICATE: "validFirstaidCertificate",
  SELF_INTRO: "selfIntro",
};

const Profile = () => {
  const dispatch = useDispatch();
  const profile = useSelector(profileSelector);

  const [isLoading, setIsLoading] = useState(false);
  const getUserName = () =>
    [profile[FIELDS.FIRST_NAME], profile[FIELDS.LAST_NAME]].join(" ");

  const onFinish = (values) => {
    setIsLoading(true);
    dispatch(
      updateProfileRequest({
        fields: Object.keys(values),
        values: {
          ...values,
          [FIELDS.DATE_OF_BIRTH]: formatDateTime(values[FIELDS.DATE_OF_BIRTH]),
        },
      })
    ).finally(() => setIsLoading(false));
  };

  const buttonSubmit = (
    <Button type="primary" htmlType="submit" loading={isLoading}>
      Lưu lại
    </Button>
  );

  return (
    <Form
      className={styles.container}
      initialValues={{
        ...profile,
        [FIELDS.DATE_OF_BIRTH]: moment(
          profile[FIELDS.DATE_OF_BIRTH],
          "DD/MM/YYYY"
        ),
      }}
      onFinish={onFinish}
    >
      <div className={styles.title}>Hồ sơ của tôi</div>
      <ProfileInfo
        title="Thông tin cơ bản"
        fields={[
          {
            field: FIELDS.USER_NAME,
            text: "Họ tên",
            value: getUserName(),
            form: <UserNameForm buttonSubmit={buttonSubmit} />,
          },
          {
            field: FIELDS.DATE_OF_BIRTH,
            text: "Ngày, tháng, năm sinh",
            value: profile[FIELDS.DATE_OF_BIRTH],
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                label="Nhập ngày tháng năm sinh"
                name={FIELDS.DATE_OF_BIRTH}
                buttonSubmit={buttonSubmit}
                component={
                  <DatePicker
                    className={styles.datePicker}
                    format="DD/MM/YYYY"
                  />
                }
              />
            ),
          },
          {
            field: FIELDS.EMAIL,
            text: "Email",
            value: profile[FIELDS.EMAIL],
            form: (
              <FormItem
                buttonSubmit={buttonSubmit}
                label="Nhập email"
                name={FIELDS.EMAIL}
                rules={[getRequiredRule(), getEmailRule()]}
              />
            ),
          },
          {
            field: FIELDS.PHONE_NUMBER,
            text: "Số điện thoại",
            value: formatVietnamesePhone(profile[FIELDS.PHONE_NUMBER]),
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                buttonSubmit={buttonSubmit}
                label="Nhập số điện thoại"
                name={FIELDS.PHONE_NUMBER}
                rules={[getRequiredRule(), getPhoneNumberRule()]}
              />
            ),
          },
          {
            field: FIELDS.YEARS_OF_EXPERIENCE,
            text: "Số năm kinh nghiệm",
            value: `${profile[FIELDS.YEARS_OF_EXPERIENCE] || 0} năm`,
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                buttonSubmit={buttonSubmit}
                label="Số năm kinh ngiệm"
                name={FIELDS.YEARS_OF_EXPERIENCE}
              />
            ),
          },
          {
            field: FIELDS.AREA,
            text: "Khu vực phục vụ",
            value: profile[FIELDS.AREA],
            form: (
              <FormItem
                label="Khu vực"
                name={FIELDS.AREA}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.TRIP_TYPE,
            text: "Loại Tour",
            value: profile[FIELDS.TRIP_TYPE],
            form: (
              <FormItem
                label="Loại Tour"
                name={FIELDS.TRIP_TYPE}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.TOUR_REGULAR,
            text: "Chuyên môn về tour",
            value: profile[FIELDS.TOUR_REGULAR],
            form: (
              <FormItem
                formLayout={{ span: 20 }}
                label="Chuyên môn"
                name={FIELDS.TOUR_REGULAR}
                buttonSubmit={buttonSubmit}
                component={<TextArea rows={2} />}
              />
            ),
          },
        ]}
      />
      <div className={styles.divider} />
      <ProfileInfo
        title="Thông tin khác"
        fields={[
          {
            field: FIELDS.FEE,
            text: "Chi phí mỗi giờ",
            value: profile[FIELDS.FEE],
            form: (
              <FormItem
                label="Nhập chi phí"
                name={FIELDS.FEE}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.LICENCE,
            text: "Full Australian Driver Licence",
            value: profile[FIELDS.LICENCE],
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                formLayout={{ span: 20 }}
                label="Full Australian Driver Licence"
                name={FIELDS.LICENCE}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.CLEARANCE,
            isVerify: false,
            text: "Valid Police Clearance",
            value: profile[FIELDS.CLEARANCE],
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                formLayout={{ span: 20 }}
                label="Valid Police Clearance"
                name={FIELDS.CLEARANCE}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.VALID_WORKING_WITH_CHILDREN,
            isVerify: false,
            text: "Valid Working with Children",
            value: profile[FIELDS.VALID_WORKING_WITH_CHILDREN],
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                formLayout={{ span: 20 }}
                label="Valid Working with Children"
                name={FIELDS.VALID_WORKING_WITH_CHILDREN}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.TRIP_TYPE,
            isVerify: false,
            text: "Valid Firstaid Certificate",
            value: profile[FIELDS.TRIP_TYPE],
            form: (
              <FormItem
                labelCol={{ span: 10 }}
                formLayout={{ span: 20 }}
                label="Valid Firstaid Certificate"
                name={FIELDS.TRIP_TYPE}
                buttonSubmit={buttonSubmit}
              />
            ),
          },
          {
            field: FIELDS.SELF_INTRO,
            text: "Self Intro",
            value: profile[FIELDS.SELF_INTRO],
            form: (
              <FormItem
                formLayout={{ span: 20 }}
                label="Self Intro"
                name={FIELDS.SELF_INTRO}
                buttonSubmit={buttonSubmit}
                component={<TextArea row={3} />}
              />
            ),
          },
        ]}
      />
    </Form>
  );
};

Profile.propTypes = {};

export default Profile;
