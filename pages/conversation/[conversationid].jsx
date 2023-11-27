// pages/chat.js
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { io } from "socket.io-client";
import { useRouter } from "next/router";
import Sidebar from "@/components/conversation/Sidebar";
import Bubble from "@/components/conversation/Bubble";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const router = useRouter();

  console.log("router: ", router.query.conversationid);
  // Mock user data for demonstration

  useEffect(() => {}, [socket]);

  useEffect(() => {
    setSocket(io("http://localhost:8000"));
  }, []);

  return (
    <div className="flex h-screen">
      {/* Chat List go here */}
      <Sidebar />
      <div className="w-3/4 border-t">
        <div className="overflow-y-auto h-[calc(100vh-200px)] bg-white p-4 shadow-md">
          <Bubble />
          <Bubble own />
          <Bubble />
        </div>

        <div className="flex border-t border-gray-300 overflow-hidden items-center hover:shadow-lg">
          <label
            htmlFor="fileselect"
            className="p-4 text-white cursor-pointer bg-sky-500"
          >
            +
          </label>
          <input
            style={{ display: "none" }}
            type="file"
            accept="image/png, image/jpg, image/jpeg"
            // onChange={handleFileChange}
            id="fileselect"
          />
          <input
            type="text"
            placeholder="Type a message..."
            className="w-full p-4 focus:outline-none"
          />
          <button className="min-w-[100px] bg-green-500 text-white p-5 flex items-center justify-center hover:bg-green-600 transition duration-300 ease-in-out shadow-md">
            <span>Send</span>
            <FiSend className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
