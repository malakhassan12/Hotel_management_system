import { Container, Title, Text, Stack, Group, Button } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";
import { useState } from "react";

import UserTable from "../../Components/Table/Admin/UserTable";
import UserFilters from "../../Components/Filters/Admin/UserFilters";
import UserModal from "../../Components/Modal/Admin/UserModal";
import { useManageUsers } from "../../Hooks/useManageUsers";

const ManageUsers = () => {
  const {
    users,
    search,
    setSearch,
    roleFilter,
    setRoleFilter,
    statusFilter,
    setStatusFilter,
    addUser,
    deleteUser,
  } = useManageUsers();

  const [modalOpened, setModalOpened] = useState(false);
  const [editingUser, setEditingUser] = useState(null);

  const handleAddUser = (newUser) => {
    addUser(newUser);
  };

  return (
    <Container size="xl" py="xl">
      <Stack gap="xl">
        <Group justify="space-between">
          <Stack gap={2}>
            <Title order={1}>Manage Users</Title>
            <Text c="dimmed">Add, edit, and manage all system users</Text>
          </Stack>

          <Button
            leftSection={<IconPlus size={18} />}
            onClick={() => {
              setEditingUser(null);
              setModalOpened(true);
            }}
            color="gold"
          >
            Add New User
          </Button>
        </Group>

        <UserFilters
          search={search}
          setSearch={setSearch}
          roleFilter={roleFilter}
          setRoleFilter={setRoleFilter}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        <UserTable users={users} onDelete={deleteUser} />
      </Stack>

      <UserModal
        opened={modalOpened}
        onClose={() => {
          setModalOpened(false);
          setEditingUser(null);
        }}
        onSubmit={handleAddUser}
        initialData={editingUser}
      />
    </Container>
  );
};

export default ManageUsers;