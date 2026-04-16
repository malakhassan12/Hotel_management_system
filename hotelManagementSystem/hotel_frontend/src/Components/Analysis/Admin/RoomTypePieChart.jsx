// ******************************** Recharts ********************************

import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";

// ******************************** Mantline UI ********************************

import {
  Card,
  Text,
  Group,
  ThemeIcon,
  Stack,
  useMantineTheme,
  SimpleGrid,
} from "@mantine/core";
// ******************************** Icons ********************************

import { IconChartPie, IconBed, IconBuilding } from "@tabler/icons-react";

const RoomTypePieChart = () => {
  const theme = useMantineTheme();

  const data = [
    {
      name: "Standard",
      value: 35,
      color: theme.colors.primary[6],
      percentage: 35,
    },
    { name: "Deluxe", value: 28, color: theme.colors.pink[5], percentage: 28 },
    {
      name: "Executive Suite",
      value: 12,
      color: theme.colors.purple[5],
      percentage: 12,
    },
    {
      name: "Family Room",
      value: 15,
      color: theme.colors.green[5],
      percentage: 15,
    },
    {
      name: "Single Room",
      value: 10,
      color: theme.colors.blue[5],
      percentage: 10,
    },
  ];

  const totalRooms = data.reduce((acc, curr) => acc + curr.value, 0);

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      const data = payload[0].payload;
      return (
        <div
          style={{
            backgroundColor: "var(--mantine-color-body)",
            padding: "8px 12px",
            borderRadius: "8px",
            border: "1px solid var(--mantine-color-gray-3)",
            boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
          }}
        >
          <Text size="sm" fw={600}>
            {data.name}
          </Text>
          <Text size="xs" c="dimmed">
            Rooms: {data.value}
          </Text>
          <Text size="xs" c="dimmed">
            Percentage: {data.percentage}%
          </Text>
        </div>
      );
    }
    return null;
  };

  const CustomLegend = ({ payload }) => {
    return (
      <SimpleGrid cols={2} spacing="xs" verticalSpacing={4} mt="md">
        {payload.map((entry, index) => (
          <Group key={index} gap="xs">
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: "50%",
                backgroundColor: entry.color,
              }}
            />
            <Text size="xs" c="dimmed">
              {entry.value}
            </Text>
            <Text size="xs" fw={500}>
              {data.find((d) => d.name === entry.value)?.value} rooms
            </Text>
          </Group>
        ))}
      </SimpleGrid>
    );
  };

  return (
    <Card withBorder padding="lg" radius="md" shadow="sm">
      <Stack gap="md">
        {/* Header */}
        <Group justify="space-between">
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              Room Distribution
            </Text>
            <Text size="sm" fw={500}>
              Breakdown by room type
            </Text>
          </div>
          <Group gap="xs">
            <ThemeIcon size="sm" radius="xl" variant="light" color="primary">
              <IconBuilding size={12} />
            </ThemeIcon>
            <Text size="xs" c="dimmed">
              Total: {totalRooms} rooms
            </Text>
          </Group>
        </Group>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={350}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={100}
              paddingAngle={3}
              label={({ percent }) => `${(percent * 100).toFixed(0)}%`}
              labelLine={{
                stroke: "var(--mantine-color-gray-4)",
                strokeWidth: 1,
              }}
              isAnimationActive={true}
              animationDuration={500}
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={entry.color}
                  stroke="var(--mantine-color-body)"
                  strokeWidth={2}
                />
              ))}
            </Pie>
            <Tooltip content={CustomTooltip} />
            <Legend
              content={CustomLegend}
              verticalAlign="bottom"
              height={100}
            />
          </PieChart>
        </ResponsiveContainer>

        {/* Quick Stats */}
        <SimpleGrid cols={4} spacing="md" mt="md">
          {data.map((item, index) => (
            <Card key={index} withBorder padding="xs" radius="md" ta="center">
              <Text size="xs" c="dimmed">
                {item.name}
              </Text>
              <Text size="xl" fw={700} c={item.color.split(".")[0]}>
                {item.value}
              </Text>
              <Text size="xs" c="dimmed">
                {item.percentage}%
              </Text>
            </Card>
          ))}
        </SimpleGrid>
      </Stack>
    </Card>
  );
};

export default RoomTypePieChart;
