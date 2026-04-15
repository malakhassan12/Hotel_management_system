import { Card, Text, Group, Badge, Stack, Title, Center, useMantineTheme } from "@mantine/core";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const ReceptionistLineChart = () => {
  const theme = useMantineTheme();

  const data = [
    { name: "Jan", sales: 4000, target: 3500 },
    { name: "Feb", sales: 3000, target: 3500 },
    { name: "Mar", sales: 5000, target: 3500 },
    { name: "Apr", sales: 4500, target: 3500 },
    { name: "May", sales: 6000, target: 3500 },
    { name: "Jun", sales: 5500, target: 3500 },
  ];

  const totalSales = data.reduce((acc, curr) => acc + curr.sales, 0);

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
      <Stack gap="md">
        <Group justify="space-between">
          <Title order={5}>Revenue Overview</Title>
          <Badge variant="light" color="primary">
            Total: ${totalSales.toLocaleString()}
          </Badge>
        </Group>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 10, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="var(--mantine-color-gray-2)" />
            <XAxis dataKey="name" tick={{ fill: "var(--mantine-color-dimmed)" }} />
            <YAxis
              tick={{ fill: "var(--mantine-color-dimmed)" }}
              tickFormatter={(value) => `$${value}`}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--mantine-color-body)",
                border: "1px solid var(--mantine-color-gray-2)",
                borderRadius: "8px",
              }}
              formatter={(value) => [`$${value.toLocaleString()}`, "Sales"]}
            />
            <Line
              type="monotone"
              dataKey="sales"
              stroke={theme.colors.primary[6]}
              strokeWidth={2}
              dot={{ fill: theme.colors.primary[6], r: 4 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke={theme.colors.red[5]}
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>

        <Group justify="center" gap="xl">
          <Group gap="xs">
            <div style={{ width: 20, height: 3, backgroundColor: theme.colors.primary[6] }} />
            <Text size="xs">Sales</Text>
          </Group>
          <Group gap="xs">
            <div style={{ width: 20, height: 3, backgroundColor: theme.colors.red[5] }} />
            <Text size="xs">Target</Text>
          </Group>
        </Group>
      </Stack>
    </Card>
  );
};

export default ReceptionistLineChart;