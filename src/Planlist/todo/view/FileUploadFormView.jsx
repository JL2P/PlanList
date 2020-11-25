import React from "react";
import { Button, Image } from "semantic-ui-react";
import ImageUploading from "react-images-uploading";
import "./fileUploadFormStyle.css";

//이미지 업로드 폼
const FileUploadFormView = ({ images, onChangeImages, maxNumber, message }) => {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChangeImages}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({ imageList, onImageUpload, onImageRemove, isDragging, dragProps }) => (
        // write your building UI
        <div className="upload__image-wrapper">
          {imageList.map((image, index) => (
            <div key={index} className="image-item">
              <div className="image-item__btn-wrapper">
                <Button icon="x" onClick={() => onImageRemove(index)} />
              </div>

              <Image
                src={image.data_url}
                alt=""
                style={{ width: "100%" }}
                size="large"
              />
            </div>
          ))}
          {images.length === 0 && (
            <div
              className={`ui ${isDragging ? "red" : ""} button`}
              style={{
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#FFF0CD",
              }}
              onClick={onImageUpload}
              {...dragProps}
            >
              <b>{message}</b>
            </div>
          )}
        </div>
      )}
    </ImageUploading>
  );
};

export default FileUploadFormView;
