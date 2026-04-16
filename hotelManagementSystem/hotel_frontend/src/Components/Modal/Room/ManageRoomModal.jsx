import React, { useEffect, useState } from "react";
// ******************************** Mantline UI ********************************

import {
  Modal,
  Group,
  Text,
  Stack,
  Divider,
  Grid,
  Badge,
  Image,
  Button,
  TextInput,
  NumberInput,
  Select,
  FileButton,
} from "@mantine/core";

import { useForm } from "@mantine/form";

const ManageRoomModal = ({ opened, close, room, mode = "view", onSubmit }) => {
  const defaultRoom = {
    id: null,
    name: "",
    description: "",
    type: "",
    price: 0,
    maxGuests: 1,
    status: "Available",
    roomNumber: "",
    floor: 1,
    beds: "",
    amenities: [],
    image: "",
  };

  const [files, setFiles] = useState([]);

  const form = useForm({
    initialValues: defaultRoom,

    validate: {
      name: (v) => (v?.length < 3 ? "Min 3 chars" : null),
      description: (v) => (v?.length < 5 ? "Too short" : null),
      roomNumber: (v) => (!v ? "Required" : null),
      type: (v) => (!v ? "Required" : null),
      price: (v) => (v <= 0 ? "Invalid price" : null),
      maxGuests: (v) => (v <= 0 ? "Invalid guests" : null),
    },
  });

  // ✅ sync room data
  useEffect(() => {
    if (!opened) return;

    if (mode === "edit" && room) {
      form.setValues({
        ...defaultRoom,
        ...room,
      });
    }

    if (mode === "create") {
      form.setValues(defaultRoom);
    }
  }, [opened, room, mode]);


  const handleSubmit = form.onSubmit((values) => {
    onSubmit?.(values, files);
    close();
  });

  return (
    <Modal opened={opened} onClose={close} size="lg" centered>
      <Stack>
        {/* Title */}
        <Group justify="space-between">
          <Text fw={700}>
            {mode === "create"
              ? "Create Room"
              : mode === "edit"
                ? "Edit Room"
                : "Room Details"}
          </Text>

        <Badge>{form.values.status}</Badge>
        </Group>

        <Divider />

        {/* Upload */}
        <FileButton onChange={setFiles} multiple>
          {(props) => (
            <Button {...props} variant="light">
              Upload Images
            </Button>
          )}
        </FileButton>

        {/* VIEW MODE */}

        <>
          <TextInput label="Name" {...form.getInputProps("name")} />

          <TextInput
            label="Description"
            {...form.getInputProps("description")}
          />

          <Grid>
            <Grid.Col span={6}>
              <TextInput
                label="Room Number"
                {...form.getInputProps("roomNumber")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput label="Floor" {...form.getInputProps("floor")} />
            </Grid.Col>

            <Grid.Col span={6}>
              <Select
                label="Type"
                data={["Standard", "Deluxe", "Suite"]}
                {...form.getInputProps("type")}
              />
            </Grid.Col>

            <Grid.Col span={6}>
              <NumberInput label="Price" {...form.getInputProps("price")} />
            </Grid.Col>
          </Grid>
        </>

        <Divider />

        {/* Actions */}
        <Group justify="space-between">
          <Button onClick={handleSubmit}>
            {mode === "create" ? "Create" : "Update"}
          </Button>

          <Button variant="light" onClick={close}>
            Close
          </Button>
        </Group>
      </Stack>
    </Modal>
  );
};

export default ManageRoomModal;
