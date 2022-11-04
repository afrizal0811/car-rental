import React from "react";
import Dropzone from "react-dropzone-uploader";

const Uploader = () => {
  const getUploadParams = ({ meta }) => {
    return { url: "http://httpbin.org/post" };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  return (
    <div>
      <Dropzone
        getUploadParams={getUploadParams}
        onChangeStatus={handleChangeStatus}
        onSubmit={handleSubmit}
        accept="image/*"
      />
    </div>
  );
};

export default Uploader;
