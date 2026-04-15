import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import {
  IconHelpCircle,
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";

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
        <Menu.Item leftSection={<IconUser size={14} />}>Profile</Menu.Item>
        <Menu.Item leftSection={<IconSettings size={14} />}>Settings</Menu.Item>

        <Menu.Divider />

        <Menu.Label>Support</Menu.Label>
        <Menu.Item leftSection={<IconHelpCircle size={14} />}>
          Help Center
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
