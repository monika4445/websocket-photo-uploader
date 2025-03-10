// import { useState, useEffect } from "react";
// import axios from "axios";

// const Gallery = () => {
//   const [images, setImages] = useState<string[]>([]);

//   useEffect(() => {
//     axios.get("http://localhost:8000/gallery/")
//       .then((response) => {
//         console.log("Gallery response data:", response.data); // This logs the URLs to your console
//         setImages(response.data);
//       })
//       .catch((error) => {
//         if (error.response) {
//           // The request was made and the server responded with a status code
//           // that falls out of the range of 2xx
//           console.error("Error fetching gallery:", error.response.data);
//         } else if (error.request) {
//           // The request was made but no response was received
//           console.error("Error fetching gallery: No response received", error.request);
//         } else {
//           // Something happened in setting up the request that triggered an Error
//           console.error("Error:", error.message);
//         }
//       });
//   }, []);

//   return (
//     <div>
//       {images.map((img, index) => (
//         <img 
//           key={index} 
//           src={img} 
//           alt="uploaded" 
//           style={{ maxWidth: "100%", height: "auto" }} 
//         />
//       ))}
//     </div>
//   );
// };


// export default Gallery;

import { useState, useEffect } from "react";
import axios from "axios";

const Gallery = () => {
  const [images, setImages] = useState<string[]>([]);

  useEffect(() => {
    axios.get("http://localhost:8000/gallery/")
      .then((response) => {
        console.log("Gallery response data:", response.data);
        setImages(response.data);
      })
      .catch((error) => {
        console.error("Error fetching gallery:", error.response?.data || error.message);
      });
  }, []);

  return (
    <div style={galleryContainer}>
      {images.map((img, index) => (
        <div key={index} style={imageWrapper}>
          <img src={img} alt="uploaded" style={imageStyle} />
        </div>
      ))}
    </div>
  );
};

// Styles
const galleryContainer: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", // Responsive grid
  gap: "10px",
  padding: "10px",
};

const imageWrapper: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "hidden",
  borderRadius: "10px", // Optional rounded corners
  background: "#f4f4f4",
};

const imageStyle: React.CSSProperties = {
  width: "100%", 
  height: "auto",
  maxHeight: "200px", // Limits the height of images
  objectFit: "cover", // Ensures images fit nicely
  borderRadius: "5px",
};

export default Gallery;

