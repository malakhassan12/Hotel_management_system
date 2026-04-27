import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import useAuthStore from "../Store/authStore";
import authClient from "../Api/Client/Auth/Auth.client";
import { jwtDecode } from "jwt-decode";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const loginUser = async (values) => {
    setLoading(true);
    setServerError("");

    try {
      const res = await authClient.post("/login", values);
      const { token } = res.data;

      const decoded = jwtDecode(token);

      const role = decoded.role;
      const userEmail = decoded.sub;

      const userId = decoded.userId;

      login(token, role, { email: userEmail, userId: userId });

      notifications.show({
        title: "Login Successful",
        message: "Welcome back!",
        color: "green",
      });

      // 4. التوجيه حسب الصلاحية
      if (role === "ADMIN") navigate("/admin");
      if (role === "RECEPTIONIST") navigate("/receptionist");
      if (role === "CUSTOMER") navigate("/customer");

      return { success: true };
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Invalid email or password";
      setServerError(errorMsg);

      return { success: false };
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loading, serverError, setServerError };
};
