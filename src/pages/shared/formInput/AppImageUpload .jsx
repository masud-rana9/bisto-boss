import React, { useState } from "react";

const AppImageUpload = ({ name, label, register, errors }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result); // Set the selected image as the preview
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="form-control">
      <label htmlFor={name} className="block mb-1">
        {label}
      </label>
      <input
        id={name}
        type="file"
        accept="image/*" // Only allow image files
        onChange={handleImageChange} // Handle image selection
        {...register(name, { required: "Image is required" })} // Register field with validation
        className="mb-2 border rounded p-2"
      />
      {selectedImage && (
        <img
          src={selectedImage}
          alt="Selected"
          className="mt-2 h-32 w-auto rounded"
        /> // Display selected image
      )}
      {errors[name] && (
        <p className="text-red-500 text-sm mt-1">{errors[name]?.message}</p>
      )}
    </div>
  );
};

export default AppImageUpload;
