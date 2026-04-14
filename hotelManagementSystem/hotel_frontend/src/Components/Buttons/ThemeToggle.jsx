import { ActionIcon, useMantineColorScheme, useComputedColorScheme } from "@mantine/core";
import { IoSunny, IoMoonOutline } from "react-icons/io5";

const ThemeToggle = () => {
  const { setColorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  return (
    <ActionIcon
      onClick={() =>
        setColorScheme(computedColorScheme === "light" ? "dark" : "light")
      }
      variant="subtle"
      size="lg"
      aria-label="Toggle color scheme"
    >
      {computedColorScheme === "light" ? <IoMoonOutline size={18} /> : <IoSunny size={18} />}
    </ActionIcon>
  );
};

export default ThemeToggle;