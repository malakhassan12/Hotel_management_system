import React from "react";
// ******************************** Mantline UI ********************************

import { Card, Text, Group, ThemeIcon, Stack, Badge } from "@mantine/core";
// ******************************** Icons ********************************

import { IconTrendingUp, IconTrendingDown } from "@tabler/icons-react";

const AdminDashCard = ({ card }) => {
  const { title, value, icon: Icon, color, trend, trendValue, bgColor } = card;
  const isPositive = trend === "up";
  const trendIcon = isPositive ? (
    <IconTrendingUp size={14} />
  ) : (
    <IconTrendingDown size={14} />
  );
  const trendColor = isPositive ? "green" : "red";

  return (
    <Card
      withBorder
      padding="lg"
      radius="md"
      shadow="sm"
      style={{
        transition: "all 0.3s ease",
        cursor: "pointer",
        height: "100%",
        backgroundColor: bgColor || "var(--mantine-color-body)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-4px)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-lg)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "var(--mantine-shadow-sm)";
      }}
    >
      <Group justify="space-between" align="flex-start">
        <Stack gap={4}>
          <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
            {title}
          </Text>
          <Text size="2rem" fw={700} lh={1}>
            {value}
          </Text>
        </Stack>
        <ThemeIcon size="lg" radius="md" variant="light" color={color}>
          <Icon size={22} />
        </ThemeIcon>
      </Group>

      {trend && (
        <Group justify="space-between" mt="md">
          <Badge
            size="sm"
            radius="xl"
            variant="light"
            color={trendColor}
            leftSection={trendIcon}
          >
            {trendValue}
          </Badge>
          <Text size="xs" c="dimmed">
            vs last month
          </Text>
        </Group>
      )}
    </Card>
  );
};

export default AdminDashCard;
