import React, { useState } from "react";
import Input from "../Input/Input";

const Card = ({ imgSrc, imgAlt, title }) => {
  const [showInput, setShowInput] = useState(false);

  const handleCardClick = () => {
    setShowInput((prev) => !prev);
  };

  const handleCloseInput = () => {
    setShowInput(false);
  };

  const handleInputSubmit = (description) => {
    console.log("Submitted description:", description);
    setShowInput(false);
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <div
        className="w-20 h-18 border rounded-xl m-5 p-5 bg-[#c2b1f5] flex flex-col justify-center items-center"
        onClick={handleCardClick}
      >
        {imgSrc && imgAlt && (
          <img className="w-10 rounded-full" src={imgSrc} alt={imgAlt} />
        )}
        {title && <h1 className="font-bold m-2">{title}</h1>}
      </div>
      {showInput && (
        <Input onClose={handleCloseInput} onSubmit={handleInputSubmit} />
      )}
    </div>
  );
};

export default Card;
