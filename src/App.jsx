import React, { useState, useEffect } from "react";
import Form from "./components/FormComponent";
import axios from "axios";
function App() {
  const [userData, setUserData] = useState(null);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/autofill");
        const jsonData = await response.json();
        console.log(jsonData);
        setUserData(jsonData);
        setIsDataFetched(true);
      } catch (error) {
        console.error(error);
      }
    };

    if (!isDataFetched) {
      fetchData();
    }
  }, []);

  return (
    <div className="form-container">
      {userData ? (
        <div className="flex h-screen justify-center items-center align-middle bg-zinc-800">
          {/* <h2>User Data</h2>
          <p>Highest Qualification: {userData?.experience || "N/A"}</p>
          <p>College Name: {userData?.college_name || "N/A"}</p>
          <p>Skills: {userData?.skills || "N/A"}</p> */}
          <Form className="p-0" data={userData} />
        </div>
      ) : (
        <div className="loader-bg">Loading....</div>
      )}
    </div>
  );
}

export default App;

// import React, { useState, useEffect } from "react";
// import axios from "axios";

// function App() {
//   const [userData, setUserData] = useState(null);
//   const [isDataFetched, setIsDataFetched] = useState(false);
//   const [selectedFile, setSelectedFile] = useState(null);
//   const [isUploading, setIsUploading] = useState(false);

//   //   let fetchData;
//   const fetchData = async () => {
//     try {
//       const response = await axios.get("http://127.0.0.1:5000/autofill");
//       const jsonData = await response.data;
//       console.log(jsonData);
//       setUserData(jsonData);
//       setIsDataFetched(true);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const handleFileChange = (event) => {
//     setSelectedFile(event.target.files[0]);
//   };

//   const handleUpload = async () => {
//     if (!selectedFile) {
//       console.error("No file selected.");
//       return;
//     }

//     setIsUploading(true);

//     const formData = new FormData();
//     formData.append("file", selectedFile);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/", formData, {
//         headers: {
//           "Content-Type": "multipart/form-data",
//         },
//       });

//       console.log(response.data); // Check for success message
//       if (response.data.message === "File uploaded successfully") {
//         fetchData();
//       } else {
//         console.error("Upload failed:", response.data);
//       }
//       // Reset state after successful upload
//       setSelectedFile(null);
//       setIsUploading(false);
//     } catch (error) {
//       console.error(error);
//       setIsUploading(false); // Reset upload status on error
//     }
//   };

//   return (
//     <div className="App">
//       {isDataFetched ? (
//         <div>
//           <h2>User Data</h2>
//           <p>Highest Qualification: {userData?.experience || "N/A"}</p>
//           <p>College Name: {userData?.college_name || "N/A"}</p>
//           <p>Skills: {userData?.skills || "N/A"}</p>
//         </div>
//       ) : isUploading ? (
//         <p>Uploading file...</p>
//       ) : (
//         <div>
//           <input type="file" onChange={handleFileChange} />
//           <button type="button" onClick={handleUpload} disabled={isUploading}>
//             Upload
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default App;
