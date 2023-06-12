import React from "react";
import { useOutletContext } from "react-router-dom";

function Photos() {
  const { van } = useOutletContext();

  return (
    <div>
      <img
        src={van.imageUrl}
        width="120px"
        style={{ marginTop: "20px", borderRadius: "15px" }}
      />
    </div>
  );
}

export default Photos;
