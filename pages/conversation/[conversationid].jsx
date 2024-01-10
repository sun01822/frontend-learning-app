<<<<<<< HEAD
// pages/chat.js
import { useState, useRef } from "react";
import { FiSend, FiPaperclip } from "react-icons/fi";

// updating the conversation page

const users = [
  {
    id: 1,
    username: "User 1",
    profileImage:
      "https://www.english.com/blog/wp-content/uploads/2020/04/Teaching-online-FAQs-1132x670.jpg", // Replace with actual image URL
    lastMessage: "Hello there!",
    isActive: true,
  },
  {
    id: 2,
    username: "User 2",
    profileImage:
      "https://www.english.com/blog/wp-content/uploads/2020/04/Teaching-online-FAQs-1132x670.jpg", // Replace with actual image URL
    lastMessage: "How are you?",
    isActive: false,
  },
  {
    id: 3,
    username: "User 3",
    profileImage:
      "https://www.english.com/blog/wp-content/uploads/2020/04/Teaching-online-FAQs-1132x670.jpg", // Replace with actual image URL
    lastMessage: "How are you?",
    isActive: true,
  },
  {
    id: 4,
    username: "User 4",
    profileImage:
      "https://www.english.com/blog/wp-content/uploads/2020/04/Teaching-online-FAQs-1132x670.jpg", // Replace with actual image URL
    lastMessage: "How are you?",
    isActive: false,
  },
  // Add more users as needed
];

const Chat = () => {
  const [currentUser, setCurrentUser] = useState(users[0]);
  const fileInputRef = useRef(null);

  const handleFileUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    // Handle the file upload logic (e.g., send the file to the server)
    console.log("Selected file:", file);
  };
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
          <div className="relative w-3/4">
            <input
              type="text"
              placeholder="Type a message..."
              className="w-full border border-gray-300 p-2 rounded-l-lg focus:outline-none shadow-md"
            />
            <div
              className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
              onClick={handleFileUpload}
            >
              <FiPaperclip />
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
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
=======
// pages/chat.js
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import io from "socket.io-client";
import Sidebar from "@/components/conversation/Sidebar";
import Bubble from "@/components/conversation/Bubble";
import { useGetConversationsQuery } from "@/redux/features/payment/paymentApi";
import { useSelector } from "react-redux";

const Chat = () => {
  const { User } = useSelector((state) => state.user);
  const { data: conversations } = useGetConversationsQuery(User?._id);
  // const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const [chats, setChats] = useState([]);
  const scrollRef = useRef();
  const socket = io("http://localhost:8000");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage && !currentConversation) return;

    let receiver =
      currentConversation.student_id._id === User?._id
        ? currentConversation.tutor_id
        : currentConversation.student_id;

    const message = {
      sender: User?.name,
      receiverId: receiver?._id,
      receiver: receiver?.name,
      text: newMessage,
      time: Date.now(),
    };

    socket.emit("sendMessage", message);
    setChats((prev) => [...prev, message]);
    setNewMessage("");
  };

  // Get message from socket.io
  useEffect(() => {
    if (socket) {
      socket.on("getMessage", (message) => {
        console.log("Message: ", message);
        setChats((prev) => [...prev, message]);
      });

      socket.on("getUsers", (users) => {
        console.log("Users: ", users);
      });
    } else {
      console.log("NO socket found!");
    }
  }, [socket]);

  // // scroll ref
  // useEffect(() => {
  //   scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  // }, [chats, handleSendMessage]);

  // Add new user to socket.io
  useEffect(() => {
    if (socket) {
      if (User) {
        socket.emit("addUser", User?._id);
      }
    }
  }, [User]);

  // useEffect(() => {
  //   setSocket(io("http://localhost:8000"));
  // }, []);

  return (
    <div className="flex h-screen">
      {/* Chat List go here */}
      <Sidebar
        conversations={conversations}
        setCurrentConversation={setCurrentConversation}
      />
      {currentConversation ? (
        <div className="w-3/4 border-t">
          <div className="overflow-y-auto h-[calc(100vh-200px)] bg-white p-8 shadow-md">
            {chats.length > 0 &&
              chats.map((chat, index) => (
                <div ref={scrollRef} key={index}>
                  <Bubble own={chat.sender === User?.name} chat={chat} />
                </div>
              ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSendMessage}
            className="flex border-t border-gray-300 overflow-hidden items-center hover:shadow-lg"
          >
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
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              className="w-full p-4 focus:outline-none"
            />
            <button className="min-w-[100px] bg-green-500 text-white p-5 flex items-center justify-center hover:bg-green-600 transition duration-300 ease-in-out shadow-md">
              <span>Send</span>
              <FiSend className="ml-1" />
            </button>
          </form>
        </div>
      ) : (
        <div className="w-3/4 border-t flex items-center justify-center">
          <h1 className="text-2xl font-bold">
            Select a chat to start messaging
          </h1>
        </div>
      )}
    </div>
  );
};

export default Chat;
>>>>>>> origin/main
