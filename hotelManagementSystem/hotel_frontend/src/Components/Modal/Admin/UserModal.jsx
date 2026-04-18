import { Modal, TextInput, Select, NumberInput, Button, Stack } from "@mantine/core";
import { useForm } from "@mantine/form";
import { roleOptions } from "../../../Constants/ManageUsersConstants";

const UserModal = ({ opened, onClose, onSubmit, initialData = null }) => {
  const form = useForm({
    initialValues: initialData || {
      fullName: "",
      email: "",
      phone: "",
      role: "Customer",
      status: "active",
    },
    validate: {
      fullName: (val) => (val.length < 3 ? "Name must be at least 3 characters" : null),
      email: (val) => (/^\S+@\S+$/.test(val) ? null : "Invalid email"),
      phone: (val) => (val.length < 10 ? "Phone must be at least 10 digits" : null),
    },
  });

  const handleSubmit = (values) => {
    onSubmit(values);
    form.reset();
    onClose();
  };

  return (
    <Modal opened={opened} onClose={onClose} title={initialData ? "Edit User" : "Add New User"} size="md">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack gap="md">
          <TextInput label="Full Name" placeholder="Enter full name" {...form.getInputProps("fullName")} required />

          <TextInput label="Email" placeholder="Enter email" {...form.getInputProps("email")} required />

          <TextInput label="Phone Number" placeholder="Enter phone number" {...form.getInputProps("phone")} required />

          <Select label="Role" data={roleOptions} {...form.getInputProps("role")} required />

          <Select
            label="Status"
            data={[
              { value: "active", label: "Active" },
              { value: "inactive", label: "Inactive" },
            ]}
            {...form.getInputProps("status")}
            required
          />

          <Button type="submit" fullWidth mt="md" color="gold">
            {initialData ? "Save Changes" : "Add User"}
          </Button>
        </Stack>
      </form>
    </Modal>
  );
};

export default UserModal;