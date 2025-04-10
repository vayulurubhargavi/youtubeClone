import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { addMessage } from "../utils/chatSlice";
import { useDispatch, useSelector } from "react-redux";
import { generateRandomText, generateRandomName } from "../utils/helper";

const LiveChat = () => {
  // to get the live chat messages -we need to do api polling
  const dispatch = useDispatch();
  const ChatMessages = useSelector((store) => store.chat.messages);
  // console.log(ChatMessages);
  const [liveMessages, setLiveMessages] = useState([]);
  useEffect(() => {
    const interval = setInterval(() => {
      console.log("polling for live chat messages");
      dispatch(
        addMessage({
          name: generateRandomName(),
          message: generateRandomText(20),
        })
      );
    }, 2500);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <div className="h-[360px] w-full ml-2 p-2 border border-black rounded-lg bg-slate-100 overflow-y-scroll flex flex-col-reverse">
        <div>
          {ChatMessages.map((message, index) => (
            <ChatMessage
              key={index}
              name={message.name}
              message={message.message}
            />
          ))}
        </div>
      </div>
      <form
        className="w-full p-2 mt-2 ml-2 border border-black  "
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "User",
              message: liveMessages ,
            })
          );
          setLiveMessages("");
        }}
      >
        <input
          type="text"
          className=" w-96 rounded-lg border border-black"
          onChange={(e) => setLiveMessages(e.target.value)}
        />
        <button className="bg-green-500 text-white px-2 rounded-lg m-2 ">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
