import { useState, useMemo } from "react";
import { mockUsers } from "../Constants/ManageUsersConstants";

export const useManageUsers = () => {
  const [users, setUsers] = useState(mockUsers);
  const [search, setSearch] = useState("");
  const [roleFilter, setRoleFilter] = useState("all");
  const [statusFilter, setStatusFilter] = useState("all");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const matchesSearch =
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase());

      const matchesRole = roleFilter === "all" || user.role === roleFilter;
      const matchesStatus = statusFilter === "all" || user.status === statusFilter;

      return matchesSearch && matchesRole && matchesStatus;
    });
  }, [users, search, roleFilter, statusFilter]);

  const addUser = (newUser) => {
    const userWithId = { ...newUser, id: `U${Date.now().toString().slice(-4)}` };
    setUsers((prev) => [...prev, userWithId]);
  };

  const deleteUser = (id) => {
    setUsers((prev) => prev.filter((user) => user.id !== id));
  };

  return {
    users: filteredUsers,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    addUser,
    deleteUser,
  };
};