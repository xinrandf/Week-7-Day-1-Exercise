import React, { useState } from "react";
import Tree from "./Tree";
import data from "./data";

function Main() {
  const [orientation, setOrientation] = useState("vertical");
  const [linkType, setLinkType] = useState("step");

  return (
    <div>
      <div style={{ marginBottom: "12px" }}>
        <label>
          orientation:
          <select
            value={orientation}
            onChange={(e) => setOrientation(e.target.value)}
            style={{ marginLeft: "6px", marginRight: "16px" }}
          >
            <option value="vertical">vertical</option>
            <option value="horizontal">horizontal</option>
          </select>
        </label>

        <label>
          link:
          <select
            value={linkType}
            onChange={(e) => setLinkType(e.target.value)}
            style={{ marginLeft: "6px" }}
          >
            <option value="step">step</option>
            <option value="curve">curve</option>
            <option value="line">line</option>
          </select>
        </label>
      </div>

      <Tree
        data={data}
        orientation={orientation}
        linkType={linkType}
        layout="cartesian"
        stepPercent={0.5}
      />
    </div>
  );
}

export default Main;