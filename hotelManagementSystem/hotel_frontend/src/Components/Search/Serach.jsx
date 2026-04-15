// ******************************** Mantline UI ********************************
import {
  Card,
  Text,
  Group,
  TextInput,
  Select,
  Button,
  Stack,
  Divider,
  Badge,
} from "@mantine/core";
// ******************************** Icons ********************************

import {
  IconSearch,
  IconFilter,
  IconAdjustments,
  IconX,
} from "@tabler/icons-react";

const Search = () => {
  return (
    <Card
      style={{
        transition: "all 0.3s ease",
      }}
    >
      <Stack gap="md">
        {/* Header */}
        <Group justify="space-between" align="center">
          <div>
            <Group gap="xs">
              <IconFilter size={18} color="var(--mantine-color-primary-6)" />
              <Text size="lg" fw={700}>
                Search & Filters
              </Text>
            </Group>
            <Text size="xs" c="dimmed" mt={4}>
              Refine your room search
            </Text>
          </div>
          <Badge size="sm" radius="xl" variant="light" color="primary">
            Advanced Filters
          </Badge>
        </Group>

        <Divider />

        {/* Search Input */}
        <div>
          <Text size="sm" fw={500} mb={4}>
            Search Rooms
          </Text>
          <TextInput
            placeholder="Search by name or description..."
            leftSection={<IconSearch size={16} />}
            radius="md"
            size="md"
            rightSection={
              <div style={{ marginRight: "1rem" }}>
                <Button size="xs">Search</Button>
              </div>
            }
            rightSectionWidth={70}
          />
        </div>

        {/* Filters Row */}
        <Group grow>
          {/* Price Range Select */}
          <div>
            <Text size="sm" fw={500} mb={4}>
              Price Range
            </Text>
            <Select
              placeholder="All Prices"
              data={[
                { value: "all", label: "All Prices" },
                { value: "under100", label: "Under $100" },
                { value: "100to200", label: "$100 - $200" },
                { value: "200to300", label: "$200 - $300" },
                { value: "300to500", label: "$300 - $500" },
                { value: "above500", label: "Above $500" },
              ]}
              defaultValue="all"
              radius="md"
            />
          </div>

          {/* Availability Select */}
          <div>
            <Text size="sm" fw={500} mb={4}>
              Availability
            </Text>
            <Select
              placeholder="All Rooms"
              data={[
                { value: "all", label: "All Rooms" },
                { value: "available", label: "Available Only" },
                { value: "booked", label: "Booked Only" },
                { value: "maintenance", label: "Maintenance Only" },
              ]}
              defaultValue="all"
              radius="md"
            />
          </div>
        </Group>

        {/* Action Buttons */}
        <Group justify="space-between" mt="sm">
          <Button
            variant="subtle"
            color="gray"
            size="sm"
            leftSection={<IconX size={14} />}
          >
            Clear Filters
          </Button>
          <Button
            variant="filled"
            color="primary"
            size="sm"
            leftSection={<IconAdjustments size={14} />}
          >
            Apply Filters
          </Button>
        </Group>
      </Stack>
    </Card>
  );
};

export default Search;
