import React from "react";

// forward a ref to from parent cpt --> child cpt
function ForwardRef({ parentRef }: { parentRef: any }) {
  console.log("parent ref: ", parentRef);
  return (
    <div>
      <h2> Forward Reference Example </h2>
      <p> check console log </p>
    </div>
  );
}

export default React.forwardRef(ForwardRef);
