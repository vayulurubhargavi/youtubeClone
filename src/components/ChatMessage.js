import React from "react";

const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.Crq9sn3Qu3HyHwPJi2zW8QHaHa&pid=Api&P=0&h=180"
        alt="user"
        className="h-10 rounded-full"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
};

export default ChatMessage;
