import React, { useState } from "react";
import "./App.css";

function App() {
  const [files, setFiles] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("File upload successfully");
    console.log(files);
  }
  function onFilesUpload(e) {
    e.preventDefault();
    let id = ++e.target.id;
    let file_reader = new FileReader();

   
    let file = e.target.files[0];
    // console.log(e.target.files);
    // console.log(files);
    console.log(id)
    file_reader.onload = () => {
      setFiles([
        ...files,
        {
          id,
          uploaded_file: file_reader.result,
        },
      ]);
    };
    file_reader.readAsDataURL(file);
    
  }
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>File Upload Task</h1>
        <div>
          <input class="" multiple onChange={onFilesUpload}  type="file" />
          <button type="submit">Upload file</button>
        </div>
      </form>
    </div>
  );
}

export default App;
