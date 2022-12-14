import { useQuery } from "@tanstack/react-query";
import React from "react";
import { toast } from "react-toastify";
import Spinner from "../../../components/Spinner";
import User from "../../Others/User/User";

const AllUsers = () => {
  const {
    data: userInfo = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["userInfo"],
    queryFn: async () => {
      const res = await fetch(`https://mobilex-server.vercel.app/users`);
      const data = await res.json();
      return data.data;
    },
  });
  if (isLoading) {
    return <Spinner />;
  }
  const handleDelete = (id) => {
    fetch(`https://mobilex-server.vercel.app/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        toast.success("Successfully delete user");
        refetch();
      });
  };
  return (
    <div className="container mx-auto">
      <div class="overflow-x-auto bg-slate-100 mt-4">
        <table class="min-w-full divide-y divide-gray-200 text-sm">
          <thead class="bg-gray-100">
            <tr>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Name
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Role
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Verify
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Make Admin
              </th>
              <th class="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
                Delete
              </th>
            </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            {userInfo.map((user) => (
              <User key={user._id} user={user} handleDelete={handleDelete} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
