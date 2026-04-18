import { TextInput, Select, Group } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const UserFilters = ({
  search,
  setSearch,
  roleFilter,
  setRoleFilter,
  statusFilter,
  setStatusFilter,
}) => {
  return (
    <Group gap="md" align="end">
      <TextInput
        placeholder="Search by name or email..."
        leftSection={<IconSearch size={16} />}
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ flex: 1 }}
      />

      <Select
        label="Role"
        placeholder="All Roles"
        value={roleFilter}
        onChange={setRoleFilter}
        data={[
          { value: "all", label: "All Roles" },
          { value: "Customer", label: "Customer" },
          { value: "Receptionist", label: "Receptionist" },
          { value: "Admin", label: "Admin" },
        ]}
        style={{ width: 180 }}
      />

      <Select
        label="Status"
        placeholder="All Status"
        value={statusFilter}
        onChange={setStatusFilter}
        data={[
          { value: "all", label: "All Status" },
          { value: "active", label: "Active" },
          { value: "inactive", label: "Inactive" },
        ]}
        style={{ width: 160 }}
      />
    </Group>
  );
};

export default UserFilters;