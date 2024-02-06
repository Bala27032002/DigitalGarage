import React, { useState } from "react";
import axios from "axios";

export default function AdminForm() {
  const [image, setImage] = useState(null);
  const [uploadError, setUploadError] = useState(null);

  const handleImageChange = (e) => {
    const selectedImage = e.target.files[0];
    if (selectedImage && selectedImage.size <= 10 * 1024 * 1024) {
      setImage(selectedImage);
      setUploadError(null);
    } else {
      setImage(null);
      setUploadError("Image size should be less than 10MB");
    }
  };

  const handleUpload = async () => {
    if (!image) {
      setUploadError("Please select a valid image");
      return;
    }

    const formData = new FormData();
    formData.append("image", image);

    try {
      await axios.post("http://localhost:4001/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Image uploaded successfully");
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const buttonStyle = {
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007bff",
    color: "white",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "20px",
        float:"right",
        marginBottom:"20px"

      }}
    >
      <input type="file" onChange={handleImageChange} />
      {uploadError && (
        <p style={{ color: "red", margin: "5px 0" }}>{uploadError}</p>
      )}
      <div >
      <button style={buttonStyle} onClick={handleUpload}  >
        Upload
      </button>
      </div>
      
    </div>
  );
}