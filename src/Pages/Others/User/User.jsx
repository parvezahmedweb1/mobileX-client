import React from "react";

const User = ({ user, handleDelete }) => {
  const { userName, role, _id } = user;

  return (
    <tr>
      <td class="whitespace-nowrap px-4 py-3 text-gray-700">{userName}</td>
      <td class="whitespace-nowrap px-4 py-3 text-gray-700">{role}</td>
      <td class="whitespace-nowrap px-4 py-3 text-gray-700">
        <button className="bg-secondary text-white px-2 py-1 rounded-full">
          Verify
        </button>
      </td>
      <td class="whitespace-nowrap px-4 py-3 text-gray-700">
        <button className="bg-primary text-secondary px-2 py-1 rounded-full">
          Verify
        </button>
      </td>
      <td class="whitespace-nowrap px-4 py-3 text-gray-700">
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-500 text-white px-2 py-1 rounded-full"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default User;
