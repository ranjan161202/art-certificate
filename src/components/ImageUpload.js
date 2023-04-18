import React, { useState } from 'react';

function ImageUpload() {
  const [selectedFile, setSelectedFile] = useState(null);

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
      document.getElementById('message').innerHTML=data.message;
      setSelectedFile(selectedFile);
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
          style={{ maxWidth: '100%', maxHeight: '100vh' }}
        />
      )}
      <div id='message'></div>
    </div>
  );
}

export default ImageUpload;
