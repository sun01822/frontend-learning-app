import React from "react";
import { AiOutlineMessage } from "react-icons/ai";

const MessageDropDown = () => {
  const messages = [
    {
      id: 1,
      senderImage:
        "https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg",
      senderMessage: "Lorem ipsum dolor sit amet, consectetur",
      sendingTime: "10:00 AM",
    },
    {
      id: 2,
      senderImage:
        "https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg",
      senderMessage: "Lorem ipsum dolor",
      sendingTime: "10:00 AM",
    },
    {
      id: 3,
      senderImage:
        "https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg",
      senderMessage: "Hey, how are you?",
      sendingTime: "10:00 AM",
    },
    {
      id: 4,
      senderImage:
        "https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg",
      senderMessage: "I have a question for you.",
      sendingTime: "2:30 PM",
    },
    {
      id: 5,
      senderImage:
        "https://www.wgu.edu/content/dam/web-sites/blog-newsroom/blog/images/national/2020/march/6-ways-to-improve-online-teaching.jpg",
      senderMessage: "Lorem ipsum dolor",
      sendingTime: "10:00 AM",
    },
    {
      id: 6,
      senderImage:
        "https://assets.entrepreneur.com/content/3x2/2000/20200323171735-GettyImages-1066557788.jpeg",
      senderMessage: "Hey, how are you?",
      sendingTime: "10:00 AM",
    },
  ];

  return (
    <>
      <div className="dropdown dropdown-bottom dropdown-end">
        <label tabIndex={0}>
          <p className="indicator tab tab-lifted tab-active border-none text-xl">
            <span className="bg-base-200 p-2 rounded-full">
              <AiOutlineMessage />
            </span>
            <span className="badge rounded-full badge-error -mt-6 text-white font-bold">
              0
            </span>
          </p>
        </label>
        <div
          tabIndex={0}
          className="dropdown-content z-[1] w-96 h-96 bg-white rounded-box shadow overflow-y-auto"
        >
          {messages.map((message) => (
            <a href="/profile/rakib38" key={message.id}>
              <div key={message.id} className="p-4 border-b hover:bg-gray-100">
                <div className="flex items-center">
                  <img
                    src={message.senderImage}
                    alt="Sender Image"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <p className="font-bold">{message.senderMessage}</p>
                    <p className="text-gray-600 text-sm">
                      {message.sendingTime}
                    </p>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </>
  );
};

export default MessageDropDown;
