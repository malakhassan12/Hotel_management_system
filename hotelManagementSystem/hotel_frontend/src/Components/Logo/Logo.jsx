import { Group, Text } from "@mantine/core";
import { MdHotel } from "react-icons/md";

const Logo = () => {
  return (
    <Group gap="xs" align="center">
      <MdHotel size={24} color="var(--mantine-primary-color-filled)" />

      <Text
        size="xl"
        fw="bold"
        style={{
          letterSpacing: "-0.02em",
          background: "var(--mantine-primary-color-filled)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        }}
      >
        Optima Stay
      </Text>
    </Group>
  );
};
export default Logo;
