// pages/chat.js
import { useEffect, useState } from "react";
import { FiSend } from "react-icons/fi";
import { io } from "socket.io-client";
import { users } from "./data";
import { useRouter } from "next/router";

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const router = useRouter();

  console.log("router: ", router.query.conversationid);
  // Mock user data for demonstration

  // useEffect(() => {
  //   const socket = io("http://localhost:8000/user-namepace");
  //   // Example: sending a message to the server in the user namespace
  //   socket.emit("chat-message", "Hello, user namespace!");
  // }, []);

  return (
    <div className="flex h-screen">
      {/* Chat List go here */}
      <div className="w-1/4 border-r border-gray-300">
        <ul className="p-4">
          {users.map((user) => (
            <li
              key={user.id}
              className="flex items-center p-2 cursor-pointer hover:bg-gray-100 relative"
              onClick={() => setCurrentUser(user)}
            >
              <img
                src={user.profileImage}
                alt={`${user.username}'s profile`}
                className="w-10 h-10 rounded-full mr-2"
              />
              <div>
                <div className="font-semibold">{user.username}</div>
                <div className="text-sm text-gray-500">{user.lastMessage}</div>
              </div>
              {user.isActive && (
                <div className="absolute w-2 h-2 bg-green-500 rounded-full right-2 top-1" />
              )}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4 ">
        <div className="flex justify-between items-center bg-success text-white p-2 mb-4 rounded-t-lg">
          <div className="font-semibold">{currentUser.username}</div>
          <div className="text-xs">Last seen: 10 minutes ago</div>
        </div>
        <div className="overflow-y-auto h-[60%] bg-white p-4 rounded-lg shadow-md">
          {/* Chat messages go here */}
          <div className="chat chat-start">
            <div className="chat-bubble">
              It's over Anakin, <br />I have the high ground.
            </div>
          </div>
          <div className="chat chat-end">
            <div className="chat-bubble">You underestimate my power!</div>
          </div>
        </div>

        <div className="flex items-center mt-4">
          <input
            type="text"
            placeholder="Type a message..."
            className="w-3/4 border border-gray-300 p-2 rounded-l-lg focus:outline-none shadow-md"
          />
          <button className="w-1/4 ml-1 h-10 bg-green-500 text-white p-2 flex items-center justify-center rounded-r-lg hover:bg-green-600 transition duration-300 ease-in-out shadow-md">
            <span>Send</span>
            <FiSend className="ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
