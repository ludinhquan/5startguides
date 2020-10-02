import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Upload, Modal } from "antd";
import { PlusOutlined } from "@ant-design/icons";

import { getBase64 } from "@/utils/utils";
import styles from "./Images.module.less";

const customStyles = {
  btnUpload: { fontSize: 30, color: "#bfbfbf" },
};

const Images = (props) => {
  const { value, onChange: onUpdateForm } = props;

  const [fileList, setFileList] = useState([]);
  const [previewImage, setPreviewImage] = useState({});

  useEffect(() => {
    if (Array.isArray(value)) setFileList(value);
  }, [value]);

  const handleChange = async ({ fileList }) => {
    const getImagesUrl = async (list) => {
      const promies = list.map((file) =>
        file?.url ? Promise.resolve(file.url) : getBase64(file.originFileObj)
      );
      const data = await Promise.all(promies);
      return list.map((image, idx) => ({
        uid: image.uid,
        name: image.name,
        url: data[idx],
      }));
    };

    const images = await getImagesUrl(fileList);
    onUpdateForm(images);
  };

  const handleRemove = (file) => {
    onUpdateForm(fileList.filter((item) => item.uid !== file.uid));
  };

  const handleCancel = () =>
    setPreviewImage((pre) => ({ ...pre, visible: false }));

  const handlePreview = async (file) => {
    setPreviewImage({
      image: file.url,
      visible: true,
      title: file.name,
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
        onRemove={handleRemove}
        onChange={handleChange}
        onPreview={handlePreview}
        listType="picture-card"
        fileList={fileList}
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
  value: PropTypes.array,
};

Images.defaultProps = {
  value: [],
};

export default Images;
