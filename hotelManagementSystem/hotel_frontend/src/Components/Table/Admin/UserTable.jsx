import { Table, Text, Badge, Group, ActionIcon, Avatar } from "@mantine/core";
import { IconEdit, IconTrash } from "@tabler/icons-react";

const UserTable = ({ users, onDelete }) => {
  return (
    <Table highlightOnHover withTableBorder striped>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>User</Table.Th>
          <Table.Th>Email</Table.Th>
          <Table.Th>Phone</Table.Th>
          <Table.Th>Role</Table.Th>
          <Table.Th>Status</Table.Th>
          <Table.Th>Joined</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>

      <Table.Tbody>
        {users.map((user) => (
          <Table.Tr key={user.id}>
            <Table.Td>
              <Group gap="sm">
                <Avatar radius="xl" color="blue">
                  {user.fullName[0]}
                </Avatar>
                <Text fw={500}>{user.fullName}</Text>
              </Group>
            </Table.Td>

            <Table.Td>
              <Text size="sm">{user.email}</Text>
            </Table.Td>

            <Table.Td>
              <Text size="sm">{user.phone}</Text>
            </Table.Td>

            <Table.Td>
              <Badge color={user.role === "Admin" ? "red" : user.role === "Receptionist" ? "blue" : "green"} variant="light">
                {user.role}
              </Badge>
            </Table.Td>

            <Table.Td>
              <Badge color={user.status === "active" ? "green" : "gray"} variant="light">
                {user.status}
              </Badge>
            </Table.Td>

            <Table.Td>
              <Text size="sm">{user.joinedDate}</Text>
            </Table.Td>

            <Table.Td>
              <Group gap="xs">
                <ActionIcon variant="light" color="blue">
                  <IconEdit size={16} />
                </ActionIcon>
                <ActionIcon variant="light" color="red" onClick={() => onDelete(user.id)}>
                  <IconTrash size={16} />
                </ActionIcon>
              </Group>
            </Table.Td>
          </Table.Tr>
        ))}
      </Table.Tbody>
    </Table>
  );
};

export default UserTable;