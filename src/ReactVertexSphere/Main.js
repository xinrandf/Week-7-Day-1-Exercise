import React from "react";
import { Canvas } from "@react-vertex/core";
import Scene from "./Scene";

function Main() {
  return (
    <div>
      <h2>React Vertex Sphere of Spheres</h2>

      <div style={{ width: "100%", height: "600px" }}>
        <Canvas
          style={{ width: "100%", height: "100%" }}
          renderOnUpdate={true}
        >
          <Scene />
        </Canvas>
      </div>
    </div>
  );
}

export default Main;