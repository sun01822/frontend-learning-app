import React from "react";
import { users } from "./data";

const Sidebar = () => {
  return (
    <div className="h-[calc(100vh-200px)] w-1/4 bg-white border-t border-r border-gray-300">
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
  );
};

export default Sidebar;
