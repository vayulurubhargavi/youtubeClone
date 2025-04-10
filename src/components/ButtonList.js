import React from "react";
import Button from "./Button";
const ButtonList = () => {
  const buttonList = [
    "All",
    "Music",
    "Mixes",
    "Live",
    "Gaming",
    "News",
    "Sports",
    "Fashion",
    "Learning",
    "Entertainment",
  ];
  return (
    <div className="flex">
      {buttonList.map((button) => (
        <Button key={button} name={button} />
      ))}
    </div>
  );
};

export default ButtonList;
