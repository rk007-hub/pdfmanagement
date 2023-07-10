import { useState } from 'react';
import { useRouter } from 'next/router';

const UploadPage = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const router = useRouter();
  
    // Function to handle file selection
    const handleFileSelect = (event) => {
      const file = event.target.files[0];
      setSelectedFile(file);
    };
  
    // Function to handle form submission
    const handleSubmit = (event) => {
      event.preventDefault();
  
      // Perform file validation and upload logic here
      // You can call a function to handle the file upload process
      // Pass the selectedFile to the upload function
      // Remember to handle any errors that may occur during the upload process
    };
  
    return (
      <div>
        <h1>Upload PDF File</h1>
        <form onSubmit={handleSubmit}>
          <input type="file" accept=".pdf" onChange={handleFileSelect} />
          <button type="submit">Upload</button>
        </form>
      </div>
    );
  };
  
  export default UploadPage;
  