import React from "react";
import PropTypes from "prop-types";
import { Editor as EditorTiny } from "@tinymce/tinymce-react";

import "./Editor.module.less";

const Editor = (props) => {
  const { initialValue, onChange } = props;

  return (
    <EditorTiny
      initialValue={initialValue}
      onEditorChange={content => onChange(content)}
      init={{
        height: 190,
        menubar: false,
        plugins: [
          "advlist autolink lists link image charmap print preview anchor",
          "searchreplace visualblocks code fullscreen",
          "insertdatetime media table paste code help wordcount",
        ],
        toolbar:
          "formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image | removeformat | undo redo",
      }}
    />
  );
};

Editor.propTypes = {
  initialValue: PropTypes.string,
  onEditorChange: PropTypes.func,
};

export default Editor;
