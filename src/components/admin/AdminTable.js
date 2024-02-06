import React, { useState, useEffect } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import DeleteImageButton from "./DeleteButton";
import AdminForm from "./BannerForm";

export default function AdminImageTable() {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  useEffect(() => {
    fetchImages();
  }, []);

  const fetchImages = async () => {
    try {
      const response = await axios.get("http://localhost:4001/api/getImages");
      if (response.data.images) {
        setImages(response.data.images);
      }
    } catch (error) {
      console.error("Error fetching images:", error);
    }
  };

  const handleDeleteImage = async (imageId) => {
    try {
      await axios.delete(`http://localhost:4001/api/deleteImage/${imageId}`);
      fetchImages();
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpdate = async (image) => {
    setSelectedImage(image);
    setSelectedFile(null); // Reset the selected file when clicking Update
  };

  const handleImageUpdate = async () => {
    if (!selectedImage || !selectedFile) {
      alert("Please select both an image and a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      const response = await axios.put(
        `http://localhost:4001/api/updateImage/${selectedImage._id}`,
        formData
      );

      alert("Image updated successfully");
      setSelectedImage(null);
      setSelectedFile(null);
      fetchImages();
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  const handleSubmit = async () => {
    if (!selectedImage || !selectedFile) {
      alert("Please select both an image and a file");
      return;
    }

    try {
      const formData = new FormData();
      formData.append("image", selectedFile);

      await axios.put(
        `http://localhost:4001/api/updateImage/${selectedImage._id}`,
        formData
      );

      alert("Image updated successfully");
      setSelectedImage(null);
      setSelectedFile(null);
      fetchImages();
    } catch (error) {
      console.error("Error updating image:", error);
    }
  };

  return (
    <Container >

      <div>
             <AdminForm />
        <h1 style={{textAlign:"center",color:"orangered",fontSize:"50px",fontWeight:"800",marginTop:'60px',textAlign:"start"}}>          <h1 style={{marginLeft:"30px",color:"orangered",fontSize:"50px",fontWeight:"800",textAlign:"start"}}>Admin-Image Table</h1>
</h1>
        <table id="AdminImageTable" className="table-bordered" style={{width:"100%",margin:"20px"}}>
          {" "}
          {/* Add id attribute */}
          <thead>
            <tr style={{textAlign:"center"}}>
              <th style={{padding:"20px"}}>Image</th>
              <th colSpan="2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {images.map((image) => (
              <tr key={image._id}>
                <td>
                  <img
                    src={`http://localhost:4001/uploads/${image.filename}`}
                    alt=""
                    style={{ maxWidth: "370px",margin:"40px",position:"relative",left:"15rem" }}
                  />
                </td>
                <td>
                  <DeleteImageButton
                    imageId={image._id}
                    refreshImages={fetchImages}
                  />
                </td>
                <td>
                  {selectedImage === image ? (
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                      />
                      <button onClick={handleSubmit} >Update</button>
                      <button onClick={() => setSelectedImage(null)}>
                        Cancel
                      </button>
                    </div>
                  ) : (
                    <button onClick={() => handleUpdate(image)} className="btn btn-success" style={{position:"relative",left:"3rem"}}>Update</button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  

       
      </div>
    </Container>
  );
}