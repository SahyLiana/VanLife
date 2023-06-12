import React from "react";
import { useOutletContext } from "react-router-dom";

function Details() {
  const { van } = useOutletContext();
  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>Name:</span>
        {van.name}
      </p>
      <p>
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Category:
        </span>
        {van.type}
      </p>
      <p>
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Description:
        </span>
        {van.description}
      </p>
      <p>
        <span style={{ fontWeight: "bold", marginRight: "5px" }}>
          Visibility:
        </span>
        Public
      </p>
    </div>
  );
}

export default Details;
