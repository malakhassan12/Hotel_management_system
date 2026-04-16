import { useState } from "react";
// ******************************** Mantline UI ********************************

import {
  Card,
  Text,
  Group,
  Badge,
  Button,
  Image,
  Stack,
  Rating,
  ActionIcon,
  Menu,
  Divider,
} from "@mantine/core";
// ******************************** ICons ********************************

import {
  IconHeart,
  IconHeartFilled,
  IconUsers,
  IconCheck,
  IconTools,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const RoomCard = ({ item, role = "customer" }) => {
  const [liked, setLiked] = useState(false);
  const [currentStatus, setCurrentStatus] = useState(
    item.status || "Available",
  );

  const defaultImage =
    "https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=400&h=250&fit=crop";

  const statusColors = {
    Available: "green",
    Booked: "orange",
    Maintenance: "red",
  };

  const statusOptions = ["Available", "Booked", "Maintenance"];

  const handleStatusChange = (newStatus) => {
    setCurrentStatus(newStatus);
    // هنا تقدر تضيف استدعاء API لتحديث الحالة
  };

  return (
    <Card
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
      }}
    >
      <Card.Section>
        <Image
          src={item.image || defaultImage}
          height={200}
          alt={item.title}
          fallbackSrc="https://placehold.co/400x250?text=Room+Image"
        />
      </Card.Section>

      <Badge
        size="sm"
        radius="xl"
        color={statusColors[currentStatus] || "gray"}
        variant="light"
        style={{
          position: "absolute",
          top: 10,
          right: 10,
          zIndex: 1,
        }}
      >
        {currentStatus}
      </Badge>

      <Stack gap="sm" mt="md">
        <Group justify="space-between" align="center">
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              {item.category || "Deluxe"}
            </Text>
            <Text size="lg" fw={700}>
              {item.title}
            </Text>
          </div>
          <div>
            <Text size="xl" fw={700} c="primary">
              {item.price}
            </Text>
            <Text size="xs" c="dimmed">
              per night
            </Text>
          </div>
        </Group>

        <Text size="sm" c="dimmed" lineClamp={2}>
          {item.description || "Stunning ocean views with luxury amenities"}
        </Text>

        <Group justify="space-between">
          <Group gap="xs">
            <Rating
              value={item.rating || 4.8}
              fractions={2}
              readOnly
              size="sm"
            />
            <Text size="sm" fw={500}>
              {item.rating || 4.8}
            </Text>
          </Group>
          <Group gap="xs">
            <IconUsers size={14} />
            <Text size="xs" c="dimmed">
              {item.guests || 2} Guests
            </Text>
          </Group>
        </Group>

        <Group gap="sm" wrap="wrap">
          {item.features?.map((feature, i) => (
            <Badge key={i} size="sm" variant="light" color="gray" radius="xl">
              {feature}
            </Badge>
          )) || (
            <>
              <Badge size="sm" variant="light" color="gray" radius="xl">
                Ocean View
              </Badge>
              <Badge size="sm" variant="light" color="gray" radius="xl">
                King Bed
              </Badge>
              <Badge size="sm" variant="light" color="gray" radius="xl">
                Balcony
              </Badge>
            </>
          )}
        </Group>

        <Divider />

        <Group justify="space-between" mt="sm">
          <Button
            component={Link}
            to={`${item.id}`}
            variant="light"
            color="primary"
            size="sm"
          >
            View Details
          </Button>

          {role === "receptionist" ? (
            // Receptionist: Update Status Button with sMenu
            <Menu shadow="md" width={150} position="bottom-end">
              <Menu.Target>
                <Button
                  variant="filled"
                  color={statusColors[currentStatus]}
                  size="sm"
                >
                  Update Status
                </Button>
              </Menu.Target>
              <Menu.Dropdown>
                <Menu.Label>Change Status</Menu.Label>
                {statusOptions.map((status) => (
                  <Menu.Item
                    key={status}
                    color={statusColors[status]}
                    onClick={() => handleStatusChange(status)}
                    leftSection={
                      status === "Available" ? (
                        <IconCheck size={14} />
                      ) : status === "Booked" ? (
                        <IconUsers size={14} />
                      ) : (
                        <IconTools size={14} />
                      )
                    }
                  >
                    {status}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          ) : (
            // Customer: Book Now Button with Love Icon
            <>
              <ActionIcon
                variant="light"
                color="red"
                size="md"
                radius="xl"
                onClick={() => setLiked(!liked)}
              >
                {liked ? (
                  <IconHeartFilled size={18} />
                ) : (
                  <IconHeart size={18} />
                )}
              </ActionIcon>
              <Button variant="filled" color="primary" size="sm">
                Book Now
              </Button>
            </>
          )}
        </Group>
      </Stack>
    </Card>
  );
};

export default RoomCard;
