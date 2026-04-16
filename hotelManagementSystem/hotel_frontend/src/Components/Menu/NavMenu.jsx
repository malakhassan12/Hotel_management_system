import { Avatar, Group, Menu, Text, UnstyledButton } from "@mantine/core";
import {
  IconLogout,
  IconSettings,
  IconUser,
} from "@tabler/icons-react";
import { Link } from "react-router-dom";
import useAuthStore from "../../Store/authStore";

const NavMenu = () => {
  const { user, role } = useAuthStore();
  return (
    <Menu shadow="md" width={200} position="bottom-end">
      <Menu.Target>
        <UnstyledButton>
          <Group gap="xs">
            <Avatar size="sm" color="primary" radius="xl">
              <IconUser size={14} />
            </Avatar>
            <Text size="sm" fw={500} visibleFrom="sm">
             {user?.fullName}
            </Text>
      
              <Text size="sm" fw={500} visibleFrom="sm">
                {role}
              </Text>
          
          </Group>
        </UnstyledButton>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Account</Menu.Label>
        <Menu.Item leftSection={<IconSettings size={14} />}>
          <Link to={"settings"}>Settings</Link>
        </Menu.Item>

        <Menu.Divider />

      
        {/* <Menu.Item color="red" leftSection={<IconLogout size={14} />}>
          Logout
        </Menu.Item> */}
        <Menu.Item
  color="red"
  leftSection={<IconLogout size={14} />}
  component={Link}
  to="/logout"
>
  Logout
</Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
};

export default NavMenu;
