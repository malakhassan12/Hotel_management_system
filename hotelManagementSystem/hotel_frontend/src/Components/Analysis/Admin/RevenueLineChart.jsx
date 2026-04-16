// ******************************** Recharts ********************************

import {
  LineChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Line,
  ResponsiveContainer,
} from "recharts";
// ******************************** Mantline UI ********************************

import { useMantineTheme, Box } from "@mantine/core";

const RevenueLineChart = () => {
  const theme = useMantineTheme();

  const data = [
    { name: "Jan", revenue: 4000, target: 3500 },
    { name: "Feb", revenue: 3000, target: 3500 },
    { name: "Mar", revenue: 5000, target: 3500 },
    { name: "Apr", revenue: 4500, target: 3500 },
    { name: "May", revenue: 6000, target: 3500 },
    { name: "Jun", revenue: 5500, target: 3500 },
  ];

  return (
    <Box>
      <ResponsiveContainer width="100%" height={350}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 30, left: 10, bottom: 10 }}
        >
          <CartesianGrid
            strokeDasharray="3 3"
            stroke="var(--mantine-color-gray-3)"
          />
          <XAxis
            dataKey="name"
            tick={{ fill: "var(--mantine-color-dimmed)" }}
          />
          <YAxis
            tick={{ fill: "var(--mantine-color-dimmed)" }}
            tickFormatter={(value) => `$${value}`}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: "var(--mantine-color-body)",
              border: "1px solid var(--mantine-color-gray-3)",
              borderRadius: "8px",
            }}
          />
          <Legend />
          <Line
            type="monotone"
            dataKey="revenue"
            stroke={theme.colors.primary[6]}
            strokeWidth={2}
            dot={{ r: 4 }}
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
    </Box>
  );
};

export default RevenueLineChart;
