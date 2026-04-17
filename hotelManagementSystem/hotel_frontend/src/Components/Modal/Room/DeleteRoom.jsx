// ******************************** Mantline UI ********************************
import { Modal, Text, Group, Button, Stack, ThemeIcon } from "@mantine/core";
// ******************************** Icons ********************************

import { IconAlertTriangle, IconTrash, IconX } from "@tabler/icons-react";

const DeleteRoom = ({ opened, close, roomName }) => {
  const onConfirm = () => {};
  return (
    <Modal
      opened={opened}
      onClose={close}
      title="Delete Room"
      size="sm"
      radius="md"
      centered
    >
      <Stack gap="md" align="center">
        <ThemeIcon size="xl" radius="xl" variant="light" color="red">
          <IconAlertTriangle size={32} />
        </ThemeIcon>

        <Text size="lg" fw={700} ta="center">
          Are you sure?
        </Text>

        <Text size="sm" c="dimmed" ta="center">
          Do you really want to delete{" "}
          <Text component="span" fw={700} c="primary">
            {roomName}
          </Text>
          ? This process cannot be undone.
        </Text>

        <Group justify="center" gap="md">
          <Button
            variant="light"
            color="gray"
            leftSection={<IconX size={16} />}
            onClick={close}
          >
            Cancel
          </Button>
          <Button
            variant="filled"
            color="red"
            leftSection={<IconTrash size={16} />}
            onClick={onConfirm}
          >
            Delete
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default DeleteRoom;
