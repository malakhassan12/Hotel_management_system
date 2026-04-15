import { Modal, Group, Text, Stack, Avatar, Badge, Divider, Paper, Grid, ThemeIcon } from "@mantine/core";
import { IconPhone, IconMail, IconId, IconMapPin, IconCalendar, IconUser } from "@tabler/icons-react";

const CustomerModal = ({ opened, close, customer }) => {
  const defaultCustomer = {
    name: "John Doe",
    email: "john@example.com",
    phone: "+1 234 567 8901",
    idNumber: "A12345678",
    nationality: "American",
    address: "123 Main Street, New York, USA",
    passportImage: "https://randomuser.me/api/portraits/men/1.jpg",
  };

  const data = customer || defaultCustomer;

  return (
    <Modal
      opened={opened}
      onClose={close}
      title={
        <Group gap="sm">
          <Avatar size="md" radius="xl" color="primary">
            {data.name?.charAt(0)}
          </Avatar>
          <Text size="lg" fw={700}>Customer Details</Text>
        </Group>
      }

      transitionProps={{ transition: "fade", duration: 300 }}
    >
      <Stack gap="md">
        {/* Customer Info */}
        <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
          <Text size="sm" fw={600} mb="md" c="primary">Personal Information</Text>
          
          <Grid>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconUser size={14} />
                <Text size="xs" c="dimmed">Full Name</Text>
              </Group>
              <Text size="sm" fw={500}>{data.name}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconMail size={14} />
                <Text size="xs" c="dimmed">Email</Text>
              </Group>
              <Text size="sm">{data.email}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconPhone size={14} />
                <Text size="xs" c="dimmed">Phone Number</Text>
              </Group>
              <Text size="sm">{data.phone}</Text>
            </Grid.Col>
            <Grid.Col span={6}>
              <Group gap="xs">
                <IconId size={14} />
                <Text size="xs" c="dimmed">ID Number</Text>
              </Group>
              <Text size="sm">{data.idNumber}</Text>
            </Grid.Col>
            <Grid.Col span={12}>
              <Group gap="xs">
                <IconMapPin size={14} />
                <Text size="xs" c="dimmed">Nationality</Text>
              </Group>
              <Text size="sm">{data.nationality}</Text>
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Identity Image */}
        <Paper withBorder p="md" radius="md" bg="var(--mantine-color-body)">
          <Text size="sm" fw={600} mb="md" c="primary">Identity Document</Text>
          <div style={{ textAlign: "center" }}>
            <img
              src={data.passportImage}
              alt="Identity"
              style={{
                width: "100%",
                maxHeight: 200,
                objectFit: "cover",
                borderRadius: "8px",
                border: "1px solid var(--mantine-color-gray-3)",
              }}
            />
            <Text size="xs" c="dimmed" mt={4}>Passport / ID Card</Text>
          </div>
        </Paper>
      </Stack>
    </Modal>
  );
};

export default CustomerModal;