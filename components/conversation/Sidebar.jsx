import React from "react";

const Sidebar = ({ conversations, setCurrentConversation }) => {
  return (
    <div className="h-[calc(100vh-143px)] w-1/4 bg-white border-t border-r border-gray-300">
      <ul className="p-4">
        {conversations &&
          conversations.map((user, index) => (
            <li
              key={index}
              className="flex items-center border-b p-2 cursor-pointer hover:bg-gray-100 relative"
              onClick={() => setCurrentConversation(user)}
            >
              <img
                src="/images/avatar.jpg"
                className="w-10 h-10 object-cover rounded-full mr-2"
              />
              <div>
                <div className="font-semibold text-sm">
                  {user.student_id.name}
                </div>
                <div className="text-xs text-gray-500">
                  {user.tutor_id.name}
                </div>
              </div>
              {user.isActive && (
                <div className="absolute w-2 h-2 bg-green-500 rounded-full right-2 top-1" />
              )}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Sidebar;
