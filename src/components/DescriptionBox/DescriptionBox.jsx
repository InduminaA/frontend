import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionBox">
      <div className="descriptionbox-navigator">
        <div className="descripationbox-nav-box">Description</div>
        <div className="descripationbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia vero
          adipisci sit fugit unde quo at excepturi placeat tempora labore ut
          assumenda repellat, earum, eligendi sapiente tempore rerum asperiores
          totam.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          dignissimos et atque tempore inventore, totam ad suscipit temporibus
          delectus sapiente rem repellendus fugit alias dolorem expedita placeat
          iste id aut.
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
