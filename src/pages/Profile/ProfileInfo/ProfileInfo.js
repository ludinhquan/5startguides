import React from "react";
import { Collapse } from "antd";
import PropTypes from "prop-types";
import { CaretLeftOutlined } from "@ant-design/icons";

import PanelHeader from "./PanelHeader";

import styles from "./ProfileInfo.module.less";

const { Panel } = Collapse;

const ProfileInfo = (props) => {
  const { title, fields } = props;
  return (
    <div className={styles.container}>
      <div className={styles.title}>{title}</div>
      <Collapse
        accordion
        expandIconPosition="right"
        expandIcon={({ isActive }) => (
          <CaretLeftOutlined
            style={{ color: "#BFBFBF" }}
            rotate={!isActive ? 0 : -90}
          />
        )}
      >
        {fields.map((item) => (
          <Panel
            key={item.field}
            header={
              <PanelHeader
                field={item.text}
                value={item.value}
                isVerify={item.isVerify}
              />
            }
          >
            {item.form}
          </Panel>
        ))}
      </Collapse>
    </div>
  );
};

ProfileInfo.propTypes = {
  form: PropTypes.element,
};

ProfileInfo.defaultProps = {};

export default ProfileInfo;
