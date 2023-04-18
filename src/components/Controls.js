import React from "react";

export default function Controls() {
  return (
    <>
      <h1 style={{display:"flex" ,justifyContent:"center"}}>VR Flight Simulator Controls</h1>
      <div
        style={{ marginTop: "10%", display: "flex", justifyContent: "center" }}>
        <div>
          <img src={require("../pictures/wasd.png")} alt="wasd" />
          {/* <img src='D:\Documents\Mern_Projects\vrflight\src\pictures\wasd.png' alt='wasd'></img> */}
          <strong>
            <p>A- Turn left (horizontally)</p>
            <p>D- Turn right (horizontally)</p>
            <p>W- Increase engine speed</p>
            <p>W- Decrease engine speed</p>
          </strong>
        </div>
        <div style={{ marginLeft: "10%" }}>
          <img
            src={require("../pictures/arrows.png")}
            alt="wasd"
            width={165}
            height={123}
          />
          {/* <img src='D:\Documents\Mern_Projects\vrflight\src\pictures\arrows.png' alt='arrows'></img> */}
          <strong>
            <p>Up Arrow- Rise</p>
            <p>Down Arrow- Dive</p>
            <p>Right Arrow- Yaw right</p>
            <p>Left Arrow- Yaw left</p>
          </strong>
        </div>
      </div>
        <button
          onClick={() => {
            document.location.href = "/game";
          }} style={{marginLeft:"47%", marginTop:"3%"}}
          className={"btn btn-primary"}
        >
          Play Game
        </button>
    </>
  );
}
