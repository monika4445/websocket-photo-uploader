import { useDropzone } from "react-dropzone";
import { useState } from "react";
import axios from "axios";

const Dropzone = () => {
  const [progress, setProgress] = useState(0);

  const onDrop = async (acceptedFiles: File[]) => {
    const formData = new FormData();
    formData.append("file", acceptedFiles[0]);

    try {
      const response = await axios.post("http://localhost:8000/upload/", formData, {
        onUploadProgress: (progressEvent: any) => {
          const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setProgress(percent);
        },
      });
      console.log("Upload response:", response.data);
      // Optionally, trigger a refresh of your gallery here after a successful upload.
    } catch (error) {
      console.error("Upload error:", error);
    }
  };

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  return (
    <div {...getRootProps()} style={{ border: "2px dashed #ccc", padding: "20px", textAlign: "center" }}>
      <input {...getInputProps()} />
      <p>Drag & Drop your file here</p>
      <p>Upload Progress: {progress}%</p>
    </div>
  );
};

export default Dropzone;
