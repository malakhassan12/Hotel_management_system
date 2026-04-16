// ******************************** Rechart ********************************

import {
  BarChart,
  Legend,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Bar,
  ResponsiveContainer,
} from "recharts";
// ******************************** Mantline UI ********************************

import { Card, Text, Group, ThemeIcon, Stack, useMantineTheme } from "@mantine/core";
// ******************************** Icons ********************************

import { IconBuilding, IconTrendingUp, IconCalendar } from "@tabler/icons-react";

const OccupancyBarChart = () => {
  const theme = useMantineTheme();

  const data = [
    { name: "Jan", occupied: 65, available: 35, total: 100 },
    { name: "Feb", occupied: 68, available: 32, total: 100 },
    { name: "Mar", occupied: 72, available: 28, total: 100 },
    { name: "Apr", occupied: 75, available: 25, total: 100 },
    { name: "May", occupied: 78, available: 22, total: 100 },
    { name: "Jun", occupied: 80, available: 20, total: 100 },
    { name: "Jul", occupied: 82, available: 18, total: 100 },
    { name: "Aug", occupied: 85, available: 15, total: 100 },
    { name: "Sep", occupied: 79, available: 21, total: 100 },
    { name: "Oct", occupied: 76, available: 24, total: 100 },
    { name: "Nov", occupied: 70, available: 30, total: 100 },
    { name: "Dec", occupied: 68, available: 32, total: 100 },
  ];

  const avgOccupancy = data.reduce((acc, curr) => acc + curr.occupied, 0) / data.length;

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
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
          <Text size="sm" fw={600} mb={4}>
            {label}
          </Text>
          <Text size="xs" c="dimmed">
            Occupied: {payload[0]?.value}%
          </Text>
          <Text size="xs" c="dimmed">
            Available: {payload[1]?.value}%
          </Text>
          <Text size="xs" c="green" fw={500}>
            Occupancy Rate: {payload[0]?.value}%
          </Text>
        </div>
      );
    }
    return null;
  };

  return (
    <Card withBorder padding="lg" radius="md" shadow="sm">
      <Stack gap="md">
        {/* Header */}
        <Group justify="space-between">
          <div>
            <Text size="xs" c="dimmed" tt="uppercase" fw={600}>
              Occupancy Analysis
            </Text>
            <Text size="sm" fw={500}>
              Monthly room occupancy rate
            </Text>
          </div>
          <Group gap="md">
            <Group gap="xs">
              <ThemeIcon size="sm" radius="xl" variant="light" color="green">
                <IconTrendingUp size={12} />
              </ThemeIcon>
              <Text size="xs" c="green" fw={500}>
                Avg: {avgOccupancy.toFixed(1)}%
              </Text>
            </Group>
            <Group gap="xs">
              <ThemeIcon size="sm" radius="xl" variant="light" color="primary">
                <IconCalendar size={12} />
              </ThemeIcon>
              <Text size="xs" c="dimmed">Year 2024</Text>
            </Group>
          </Group>
        </Group>

        {/* Chart */}
        <ResponsiveContainer width="100%" height={350}>
          <BarChart
            data={data}
            margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
            barGap={0}
            barCategoryGap="20%"
          >
            <CartesianGrid 
              strokeDasharray="3 3" 
              stroke="var(--mantine-color-gray-3)" 
            />
            <XAxis 
              dataKey="name" 
              tick={{ fill: "var(--mantine-color-dimmed)", fontSize: 12 }}
              axisLine={{ stroke: "var(--mantine-color-gray-4)" }}
            />
            <YAxis 
              tick={{ fill: "var(--mantine-color-dimmed)", fontSize: 12 }}
              axisLine={{ stroke: "var(--mantine-color-gray-4)" }}
              tickFormatter={(value) => `${value}%`}
              domain={[0, 100]}
            />
            <Tooltip content={CustomTooltip } />
            <Legend 
              wrapperStyle={{ paddingTop: 16 }}
              formatter={(value) => (
                <span style={{ color: "var(--mantine-color-text)" }}>
                  {value === "occupied" ? "Occupied (%)" : "Available (%)"}
                </span>
              )}
            />
            <Bar
              dataKey="occupied"
              name="occupied"
              fill={theme.colors.primary[6]}
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={500}
            />
            <Bar
              dataKey="available"
              name="available"
              fill={theme.colors.green[5]}
              radius={[4, 4, 0, 0]}
              isAnimationActive={true}
              animationDuration={500}
            />
          </BarChart>
        </ResponsiveContainer>

        {/* Legend Explanation */}
        <Group justify="center" gap="xl">
          <Group gap="xs">
            <div
              style={{
                width: 20,
                height: 12,
                backgroundColor: theme.colors.primary[6],
                borderRadius: 2,
              }}
            />
            <Text size="xs" c="dimmed">Occupied Rooms</Text>
          </Group>
          <Group gap="xs">
            <div
              style={{
                width: 20,
                height: 12,
                backgroundColor: theme.colors.green[5],
                borderRadius: 2,
              }}
            />
            <Text size="xs" c="dimmed">Available Rooms</Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default OccupancyBarChart;