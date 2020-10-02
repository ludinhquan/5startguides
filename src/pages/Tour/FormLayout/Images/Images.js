import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { getBase64 } from "@/utils/utils";
import styles from "./Images.module.less";

const customStyles = {
  btnUpload: { fontSize: 30, color: "#bfbfbf" },
};

const Images = (props) => {
  const { onChange: onUpdateForm } = props;

  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState({});

  const handleChange = ({ fileList }) => {
    onUpdateForm(fileList);
    setFileList({ fileList });
  };

  const handleCancel = () =>
    setPreviewImage((pre) => ({ ...pre, visible: false }));

  const handlePreview = async (file) => {
    if (!file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage({
      image: file.preview,
      visible: true,
      title: file.name || file.url.substring(file.url.lastIndexOf("/") + 1),
    });
  };

  const uploadButton = (
    <div>
      <PlusOutlined style={customStyles.btnUpload} />
    </div>
  );

  return (
    <div className={styles.container}>
      <Upload
        multiple
        beforeUpload={() => false}
        onChange={handleChange}
        onPreview={handlePreview}
        listType="picture-card"
      >
        {fileList.length >= 8 ? null : uploadButton}
      </Upload>
      <div className={styles.subText}>Yêu cầu Upload tối thiểu 7 hình ảnh</div>
      <Modal
        closable={false}
        footer={null}
        visible={previewImage.visible}
        title={previewImage.title}
        onCancel={handleCancel}
      >
        <img alt="" style={{ width: "100%" }} src={previewImage.image} />
      </Modal>
    </div>
  );
};

Images.propTypes = {
  onChange: PropTypes.func,
};

Images.defaultProps = {
  onChange: () => {},
};

export default Images;
