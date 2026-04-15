import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";

const NavMenu = () => {
  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar size="sm" color="primary" radius="xl">
              <IconUser size={14} />
            </Avatar>
            <Text size="sm" fw={500} visibleFrom="sm">
              Malak Hassan
            </Text>
            {/*Role */}
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          <Link to={"settings"}>Settings</Link>
        </Menu.Item>

        <Menu.Divider />

      
        <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
          Logout
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavMenu;
