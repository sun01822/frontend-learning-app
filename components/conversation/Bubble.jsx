import React from "react";
import { format } from "timeago.js";

const Bubble = ({ chat, own }) => {
  return (
    <div className="bubble">
      <div className="">
        {chat?.image && (
          <div className="imageWrapper">
            <img
              src={message.image}
              alt="Preview"
              style={{
                width: 300,
                height: 200,
                objectFit: "cover",
                borderRadius: "10px",
              }}
            />
            <button
              className="downloadbtn"
              onClick={() => handleDownload(message?.image)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"
                />
              </svg>
            </button>
          </div>
        )}

        {own ? (
          <div className="chat chat-end flex flex-col">
            <div className="text-xs pb-1">
              <span className="font-semibold">{chat?.sender}</span>
              <span className="text-gray-400 pl-2">{format(chat?.time)}</span>
            </div>
            <div className="chat-bubble bg-sky-500">{chat?.text}</div>
          </div>
        ) : (
          <div className="chat chat-start flex flex-col">
            <div className="text-xs pb-1">
              <span className="font-semibold">{chat?.sender}</span>
              <span className="text-gray-400 pl-2">{format(chat?.time)}</span>
            </div>
            <div className="chat-bubble chat-bubble-primary">{chat?.text}</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Bubble;
