import React from "react";
import { Button, Image } from "semantic-ui-react";
import ImageUploading from "react-images-uploading";
import "./fileUploadFormStyle.css";

//이미지 업로드 폼
const FileUploadFormView = ({ images, onChangeImages, maxNumber }) => {
  return (
    <ImageUploading
      multiple
      value={images}
      onChange={onChangeImages}
      maxNumber={maxNumber}
      dataURLKey="data_url"
    >
      {({
        imageList,
        onImageUpload,
        // onImageRemoveAll,
        // onImageUpdate,
        onImageRemove,
        isDragging,
        dragProps,
      }) => (
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
          <div
            className={`ui ${isDragging ? "red" : "orange"}  basic button`}
            style={{
              width: "100%",
              height: "80px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            onClick={onImageUpload}
            {...dragProps}
          >
            클릭 또는 드래그하여 이미지를 업로드 해주세요
          </div>
        </div>
      )}
    </ImageUploading>
  );
};

export default FileUploadFormView;
