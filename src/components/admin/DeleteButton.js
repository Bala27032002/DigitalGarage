import React from "react";
import axios from "axios";

export default function DeleteImageButton({ imageId, refreshImages }) {
  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:4001/api/deleteImage/${imageId}`);
      refreshImages(); // Refresh the images after deletion
    } catch (error) {
      console.error("Error deleting image:", error);
    }
  };

  return <button onClick={handleDelete} className="btn btn-danger" style={{margin:"20px",position:"relative",left:"5rem"}}>Delete</button>;
}