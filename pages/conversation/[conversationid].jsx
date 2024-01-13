// pages/chat.js
import { useEffect, useRef, useState } from "react";
import { FiSend } from "react-icons/fi";
import { FaVideo } from "react-icons/fa";
import io from "socket.io-client";
import Sidebar from "@/components/conversation/Sidebar";
import Bubble from "@/components/conversation/Bubble";
import { useGetConversationsQuery } from "@/redux/features/payment/paymentApi";
import { useSelector } from "react-redux";
import {
  useGetConvMessagesQuery,
  useSendMessageMutation,
} from "@/redux/features/chat/chatApi";
import Link from "next/link";

const Chat = () => {
  const { User } = useSelector((state) => state.user);
  const { data: conversations } = useGetConversationsQuery(User?._id);

  // const [socket, setSocket] = useState(null);
  const [newMessage, setNewMessage] = useState("");
  const [currentConversation, setCurrentConversation] = useState(null);
  const { data: convMessages } = useGetConvMessagesQuery(
    currentConversation?._id,
    {
      skip: !currentConversation?._id,
      refetchOnMountOrArgChange: true,
    }
  );
  const [sendMessage, { isLoading: sending }] = useSendMessageMutation();
  // const [chats, setChats] = useState([]);
  const scrollRef = useRef();
  // const socket = io("http://localhost:8000");

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!newMessage && !currentConversation) return;

    if (!newMessage) return;

    let receiver =
      currentConversation.student_id._id === User?._id
        ? currentConversation.tutor_id
        : currentConversation.student_id;

    const message = {
      sender_id: User?._id,
      receiver_id: receiver?._id,
      conversation_id: currentConversation?._id,
      message: newMessage,
    };

    sendMessage(message);
    setNewMessage("");

    // const message = {
    //   sender: User?.name,
    //   receiverId: receiver?._id,
    //   receiver: receiver?.name,
    //   text: newMessage,
    //   time: Date.now(),
    // };

    // socket.emit("sendMessage", message);
    // setChats((prev) => [...prev, message]);
    // setNewMessage("");
  };

  // Get message from socket.io
  // useEffect(() => {
  //   if (socket) {
  //     socket.on("getMessage", (message) => {
  //       console.log("Message: ", message);
  //       setChats((prev) => [...prev, message]);
  //     });

  //     socket.on("getUsers", (users) => {
  //       console.log("Users: ", users);
  //     });
  //   } else {
  //     console.log("NO socket found!");
  //   }
  // }, [socket]);

  // // scroll ref
  useEffect(() => {
    scrollRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [handleSendMessage]);

  // Add new user to socket.io
  // useEffect(() => {
  //   if (socket) {
  //     if (User) {
  //       socket.emit("addUser", User?._id);
  //     }
  //   }
  // }, [User]);

  // useEffect(() => {
  //   setSocket(io("http://localhost:8000"));
  // }, []);

  return (
    <div className="flex">
      {/* Chat List go here */}
      <Sidebar
        conversations={conversations}
        setCurrentConversation={setCurrentConversation}
      />
      {currentConversation ? (
        <div className="w-3/4 border-t">
          <div className="overflow-y-auto h-[calc(100vh-200px)] bg-white p-8 shadow-md">
            {convMessages &&
              convMessages.map((chat, index) => (
                <div ref={scrollRef} key={index}>
                  <Bubble own={chat.sender_id === User?._id} chat={chat} />
                </div>
              ))}
          </div>

          {/* FORM */}
          <form
            onSubmit={handleSendMessage}
            className="flex border border-gray-300 overflow-hidden items-center hover:shadow-lg"
          >
            <label
              htmlFor="fileselect"
              className="p-4 text-white cursor-pointer bg-sky-500"
            >
              +
            </label>
            <Link
              className="px-3 hover:scale-110 duration-100 text-xl"
              href="http://localhost:3001/room/SAR-237234jk9234je89sdjk"
              target="_blank"
            >
              <FaVideo />
            </Link>
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
              {sending ? (
                <span>Sending...</span>
              ) : (
                <>
                  <span>Send</span>
                  <FiSend className="ml-1" />
                </>
              )}
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
