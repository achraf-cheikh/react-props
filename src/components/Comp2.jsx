import React from "react";
import SouComp2 from "./SouComp2";

const Comp2 = ({ shopcard, products }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        marginTop: "170px",
      }}
    >
      {shopcard.map((el) => (
        <SouComp2 el={el} prod={products} />
      ))}
    </div>
  );
};

export default Comp2;
