import { useForm } from "@mantine/form";
import { zod4Resolver } from "mantine-form-zod-resolver";
import { TextInput, PasswordInput, Select, Button, Stack, Group, Text, Anchor } from "@mantine/core";
import { loginSchema } from "../../../Validators/authValidators";
import { useLogin } from "../../../Hooks/useLogin";
import AuthCard from "../../../Components/Card/Auth/AuthCard";
const Login = () => {
  const { loginUser, loading, serverError, setServerError } = useLogin();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
      role: "Customer",
    },
    validate: zod4Resolver(loginSchema),
    validateInputOnBlur: true,        // تحقق عند الخروج من الحقل
    validateInputOnChange: false,     // لو عاوزة تحقق فوري غيريها لـ true
  });

  const handleSubmit = async (values) => {
    setServerError("");               // مسح أي error سابق من السيرفر
    const result = await loginUser(values);
    
    // لو الـ login فشل (مثلاً credentials غلط)، نرجع الـ form زي ما هو
    if (!result.success) {
      form.setFieldError("email", " ");   // عشان نبرز الحقل
      form.setFieldError("password", " ");
    }
  };

  return (
    <AuthCard title="Welcome Back" subtitle="Sign in to your hotel management account">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack mt="xl">
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

          <Select
            label="Role"
            data={[
              { value: "Customer", label: "Customer" },
              { value: "Receptionist", label: "Receptionist" },
              { value: "Admin", label: "Admin" },
            ]}
            {...form.getInputProps("role")}
          />

          {/* Server Error */}
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
            Sign In
          </Button>
        </Stack>
      </form>

      <Group justify="center" mt="xl">
        <Text size="sm">Don&apos;t have an account?</Text>
        <Anchor component="a" href="/register" fw={600}>
          Sign up
        </Anchor>
      </Group>

      {/* Demo Credentials */}
      <Stack mt={40} gap="xs" align="center">
        <Text size="xs" c="dimmed" fw={500}>Demo Credentials:</Text>
        <Text size="xs" c="dimmed">Customer → customer@demo.com / 123456</Text>
        <Text size="xs" c="dimmed">Receptionist → receptionist@demo.com / 123456</Text>
        <Text size="xs" c="dimmed">Admin → admin@demo.com / 123456</Text>
      </Stack>
    </AuthCard>
  );
};

export default Login;