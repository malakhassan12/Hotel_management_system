import { Select, TextInput,  Box, Text, Grid } from "@mantine/core";
import { IconFilter, IconSearch } from "@tabler/icons-react";

const SearchBySelect = ({
  statusValue,
  onStatusChange,
  searchValue,
  onSearchChange,
  showSearch = true,
}) => {
  const statusOptions = [
    { value: "all", label: "All Status" },
    { value: "pending", label: "Pending", color: "orange" },
    { value: "confirmed", label: "Confirmed", color: "green" },
    { value: "rejected", label: "Rejected", color: "red" },
    { value: "checked-in", label: "Checked-in", color: "green" },
    { value: "checked-out", label: "Checked-out", color: "blue" },
  ];

  return (
    <Box>
      <Text size="sm" fw={600} mb={8} c="dimmed">
        Search & Filter
      </Text>

      <Grid gutter="md">
        {showSearch && (
          <Grid.Col span={{ base: 12, sm: 6, md: 8 }}>
            <TextInput
              placeholder="Search by customer name, booking ID, or room number..."
              value={searchValue}
              onChange={onSearchChange}
              leftSection={<IconSearch size={16} />}
              radius="md"
              size="md"
            />
          </Grid.Col>
        )}

        <Grid.Col span={{ base: 12, sm: 6, md: showSearch ? 4 : 12 }}>
          <Select
            placeholder="Filter by status"
            value={statusValue}
            onChange={onStatusChange}
            data={statusOptions}
            clearable
            leftSection={<IconFilter size={16} />}
            radius="md"
            size="md"
          />
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default SearchBySelect;
