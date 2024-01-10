import React, { useState, useEffect } from "react";
import {
  useGetAllUserQuery,
  useDeleteUserMutation,
} from "@/redux/features/user/userApi";

const UserList = () => {
    const { data: users, error, isLoading, refetch } = useGetAllUserQuery();

    const [deleteUser] = useDeleteUserMutation();

    useEffect(() => {
      refetch();
    }, [refetch]);

    const handleDeleteUser = async (id) => {
        try{
            await deleteUser(id);
            refetch();
        }catch(error){
            console.error("Error deleting user:", error);
        }
    };

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className="max-w-3xl mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">All User</h1>
            <table className="min-w-full bg-white border border-gray-300">
                <thead>
                    <tr>
                        <th className="py-2 px-4 border-b">ID</th>
                        <th className="py-2 px-4 border-b">Name</th>
                        <th className="py-2 px-4 border-b">Email</th>
                        <th className="py-2 px-4 border-b">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user) => (
                        <tr key={user.id}>
                            <td className="py-2 px-4 border-b">{user._id}</td>
                            <td className="py-2 px-4 border-b">{user.name}</td>
                            <td className="py-2 px-4 border-b">{user.email}</td>
                            <td className="py-2 px-4 border-b">
                                <button
                                    onClick={() => handleDeleteUser(user._id)}
                                    className="bg-red-500 text-white py-1 px-2 rounded-md focus:outline-none"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;