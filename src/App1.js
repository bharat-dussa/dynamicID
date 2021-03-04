import React, { useState } from "react";
import "./App.css";

function App() {
//   const [fileList, setfileList] = useState([]);
  var fileList=[];

  function handleSubmit(e) {
    e.preventDefault();
    fileList.forEach(function(file){
        console.log(file);
    })
  }

  function onFilesUpload(e) {
     fileList=[];
     for(var i=0;i<e.target.files.length;i++) {
         console.log(e.target.files[0]);
         fileList.push([{
             id:i,
             uploaded_file:e.target.files[i].name
         }])
     }


  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <h1>File Upload Task</h1>
        <div>
          <input class="" multiple onChange={onFilesUpload} type="file" />
          <button type="submit">Upload file</button>
        </div>
      </form>
    </div>
  );
}

export default App;
