import React, { useState, useEffect } from 'react';
import Buy from './Buy';
function ImageUpload({state}) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [imageHash, setimageHash] = useState("")

  console.log(state);
  

  function handleFileInputChange(event) {
    const selectedFile = event.target.files[0];
    const formData = new FormData();
    formData.append('image', selectedFile);
    
    // console.log(formData)
    fetch('http://localhost:5000/api/upload/uploadImage', {
      method: 'POST',
      body: formData
    })
    .then(response => {
        // console.log(response)
      if (!response.ok) {
        throw new Error('Failed to upload image');
      }

      return response.json();
    }).then(data=>{
      console.log(data.message);
      document.getElementById('Message').innerHTML=data.message;
      setSelectedFile(selectedFile);
      setimageHash(data.imageHash);
    })
    .catch(error => {
      console.error(error);
    });
  }

  return (
    <div>
      <input type="file" onChange={handleFileInputChange} />
      {selectedFile && (
        <img
          src={URL.createObjectURL(selectedFile)}
          alt="Selected file"
          style={{ maxWidth: '50%', maxHeight: '50vh' }}
        />
      )}
      <div id='Message'></div>
      {document.querySelector("#Message")!=null && document.querySelector("#Message").innerHTML==="Image uploaded successfully"?<Buy state={state} imageHash={imageHash}></Buy>:null}
    </div>
  );
}

export default ImageUpload;