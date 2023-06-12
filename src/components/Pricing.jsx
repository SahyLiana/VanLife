import React from "react";
import { useOutletContext } from "react-router-dom";

function Pricing() {
  const { van } = useOutletContext();

  return (
    <div>
      <p>
        <span style={{ fontWeight: "bold", fontSize: "25px" }}>
          ${van.price}
        </span>
        /day
      </p>
    </div>
  );
}

export default Pricing;
