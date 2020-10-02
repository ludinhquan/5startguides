import React, { useState } from "react";
import PropTypes from "prop-types";
import { Upload } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";

import { getBase64 } from "@/utils/utils";
import styles from "./UploadImage.module.less";

const customStyles = {
  btnUpload: { fontSize: 30, color: "#bfbfbf" },
  image: { width: "100%" },
};

const UploadImage = (props) => {
  const { onChange: onUpdateForm } = props;

  const [imageUrl, setImageUrl] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = async (info) => {
    if (info.file.status === "uploading") {
      setIsLoading(true);
      return;
    }
    if (info.file.status === "error") {
      setIsLoading(false);
    }
    if (info.file.status === "done") {
      const url = await getBase64(info.file.originFileObj);
      setImageUrl(url);
      onUpdateForm(url);
      setIsLoading(false);
    }
  };

  const uploadButton = (
    <div>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <PlusOutlined style={customStyles.btnUpload} />
      )}
    </div>
  );
  return (
    <div className={styles.container}>
      <Upload
        showUploadList={false}
        onChange={handleChange}
        listType="picture-card"
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      >
        {imageUrl && !isLoading ? (
          <img src={imageUrl} alt="avatar" style={customStyles.image} />
        ) : (
          uploadButton
        )}
      </Upload>
    </div>
  );
};

UploadImage.propTypes = {
  onChange: PropTypes.func,
};

UploadImage.defaultProps = {
  onChange: () => {},
};

export default UploadImage;
