import { useState } from "react";

// ******************************** Mantine UI ********************************

import {
  Stack,
  Title,
  Text,
  Divider,
  Group,
  Button,
  TextInput,
  ScrollArea,
  Card,
  ActionIcon,
  ThemeIcon,
  Space,
} from "@mantine/core";
import {
  IconSearch,
  IconX,
  IconCalendarEvent,
  IconDoorEnter,
  IconCreditCard,
  IconSettings,
} from "@tabler/icons-react";
import useGetAllNotificationByUserId from "../../../Hooks/Notification/useGetAllNotificationByUserId";
import useAuthStore from "../../../Store/authStore";

const NotificationsTab = () => {
  const { user } = useAuthStore();

  const { data } = useGetAllNotificationByUserId(user?.userId);
  console.log(data);
  const [searchQuery, setSearchQuery] = useState("");

  // Notifications State
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Booking Request",
      message: "John Doe requested a booking for Executive Suite",
      time: "2 minutes ago",
      read: false,
      color: "primary",
      icon: <IconCalendarEvent size={14} />,
      bookingId: "B004",
    },
    {
      id: 2,
      title: "Check-in Alert",
      message: "Guest Sarah Ahmed is waiting for check-in at Room 204",
      time: "15 minutes ago",
      read: false,
      color: "green",
      icon: <IconDoorEnter size={14} />,
      bookingId: "B005",
    },
    {
      id: 3,
      title: "Payment Received",
      message: "Payment of $600 received from John Doe",
      time: "1 hour ago",
      read: true,
      color: "teal",
      icon: <IconCreditCard size={14} />,
      bookingId: "B004",
    },
    {
      id: 4,
      title: "System Update",
      message: "New version 2.0.0 is available. Update now for new features.",
      time: "5 hours ago",
      read: true,
      color: "grape",
      icon: <IconSettings size={14} />,
      bookingId: null,
    },
    {
      id: 5,
      title: "Booking Confirmed",
      message: "Booking B006 for Michael Smith has been confirmed",
      time: "Yesterday",
      read: true,
      color: "green",
      icon: <IconCalendarEvent size={14} />,
      bookingId: "B006",
    },
    {
      id: 6,
      title: "Check-out Reminder",
      message: "Room 101 (John Doe) is scheduled for check-out today",
      time: "Yesterday",
      read: false,
      color: "orange",
      icon: <IconDoorEnter size={14} />,
      bookingId: "B004",
    },
  ]);

  // Filter notifications based on search
  const filteredNotifications = notifications.filter(
    (notif) =>
      notif.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      notif.message.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (notif.bookingId &&
        notif.bookingId.toLowerCase().includes(searchQuery.toLowerCase())),
  );

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((n) => n.id !== id));
  };

  return (
    <Stack gap="lg">
      <Space h={"md"} />
      <Group justify="space-between" align="center">
        <div>
          <Title order={3}>Notifications</Title>
          <Text size="sm" c="dimmed">
            Manage and view all your notifications
          </Text>
        </div>
        <Button
          variant="light"
          color="red"
          size="sm"
          onClick={() => {
            setNotifications([]);
          }}
        >
          Delete All
        </Button>
      </Group>
      <Divider />

      {/* Search */}
      <TextInput
        placeholder="Search notifications..."
        leftSection={<IconSearch size={16} />}
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        radius="md"
      />

      {/* Notifications List */}
      <ScrollArea h={500} type="auto">
        <Stack gap="sm">
          {filteredNotifications.length === 0 ? (
            <Text ta="center" c="dimmed" py="xl">
              No notifications found
            </Text>
          ) : (
            filteredNotifications.map((notification) => (
              <Card
                key={notification.id}
                withBorder
                padding="sm"
                radius="md"
                style={{
                  transition: "all 0.2s ease",
                }}
              >
                <Group justify="space-between" align="flex-start">
                  <Group gap="sm" align="flex-start" style={{ flex: 1 }}>
                    <ThemeIcon
                      size="md"
                      radius="xl"
                      variant="light"
                      color={notification.color}
                    >
                      {notification.icon}
                    </ThemeIcon>
                    <div style={{ flex: 1 }}>
                      <Group justify="space-between" mb={4}>
                        <Text size="sm" fw={notification.read ? 500 : 700}>
                          {notification.title}
                        </Text>
                        <Text size="xs" c="dimmed">
                          {notification.time}
                        </Text>
                      </Group>
                      <Text size="xs" c="dimmed">
                        {notification.message}
                      </Text>
                      {notification.bookingId && (
                        <Text size="xs" c="primary" fw={500} mt={4}>
                          Booking ID: {notification.bookingId}
                        </Text>
                      )}
                    </div>
                  </Group>
                  <ActionIcon
                    size="sm"
                    variant="subtle"
                    color="gray"
                    onClick={() => handleDeleteNotification(notification.id)}
                  >
                    <IconX size={14} />
                  </ActionIcon>
                </Group>
              </Card>
            ))
          )}
        </Stack>
      </ScrollArea>

      {/* Footer Stats */}
      {notifications.length > 0 && (
        <Group justify="space-between" mt="sm">
          <Text size="xs" c="dimmed">
            Total: {notifications.length} notifications
          </Text>
          <Text size="xs" c="dimmed">
            Unread: {notifications.filter((n) => !n.read).length}
          </Text>
        </Group>
      )}
    </Stack>
  );
};

export default NotificationsTab;
