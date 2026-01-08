import React, { useState } from "react";
import { useUsers } from "../hooks/useUsers";
import Search from "./Search";
import Users from "./Users";

const Dashboard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const { data: users, isLoading } = useUsers(searchTerm);

  return (
    <div className="p-4 max-w-5xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Users Dashboard</h1>

      <Search onSearch={setSearchTerm} placeholder="Search by first name..." />

      {isLoading ? (
        <div className="mt-4">Loading users...</div>
      ) : users && users.length > 0 ? (
        <div className="mt-4 border rounded h-[600px]">
          <Users users={users} />
        </div>
      ) : (
        <div className="mt-4">No users found</div>
      )}
    </div>
  );
};

export default Dashboard;
