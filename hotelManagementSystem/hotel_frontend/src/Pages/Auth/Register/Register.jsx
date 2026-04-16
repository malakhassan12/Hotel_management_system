import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { TextInput, PasswordInput, Select, Button, Stack, Group, Text, Anchor } from "@mantine/core";

import { registerSchema } from "../../../Validators/authValidators";
import { useRegister } from "../../../Hooks/useRegister";
import AuthCard from "../../../Components/Card/Auth/AuthCard";


const Register = () => {
  const { registerUser, loading, serverError, setServerError } = useRegister();

  const form = useForm({
    initialValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "Customer",
    },
    validate: zod4Resolver(registerSchema),     // ← مهم جداً
    validateInputOnBlur: true,
  });

  const handleSubmit = async (values) => {
    setServerError("");
    await registerUser(values);
  };

  return (
    <AuthCard title="Create Account" subtitle="Join our hotel management system">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack mt="xl">
          <TextInput
            label="Full Name"
            placeholder="Enter your full name"
            {...form.getInputProps("fullName")}
          />

          <TextInput
            label="Email"
            placeholder="Enter your email"
            {...form.getInputProps("email")}
          />

          <PasswordInput
            label="Password"
            placeholder="Enter your password"
            {...form.getInputProps("password")}
          />

          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            {...form.getInputProps("confirmPassword")}
          />

          <Select
            label="Role"
            data={[
              { value: "Customer", label: "Customer" },
              { value: "Receptionist", label: "Receptionist" },
              { value: "Admin", label: "Admin" },
            ]}
            {...form.getInputProps("role")}
          />

          {serverError && (
            <Text c="red.6" size="sm" ta="center" fw={500}>
              {serverError}
            </Text>
          )}

          <Button
            type="submit"
            fullWidth
            size="lg"
            radius="md"
            color="dark"
            loading={loading}
            mt="md"
            rightSection="→"
          >
            Sign Up
          </Button>
        </Stack>
      </form>

      <Group justify="center" mt="xl">
        <Text size="sm">Already have an account?</Text>
        <Anchor component="a" href="/login" fw={600}>
          Sign in
        </Anchor>
      </Group>
    </AuthCard>
  );
};

export default Register;