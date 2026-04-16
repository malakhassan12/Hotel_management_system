import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import useAuthStore from "../Store/authStore";

export const useLogin = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");


  const demoUsers = {
    "customer@demo.com": {
      email: "customer@demo.com",
      role: "Customer",
      fullName: "Ahmed Alaa",
      token: "demo-token-customer",
    },
    "receptionist@demo.com": {
      email: "receptionist@demo.com",
      role: "Receptionist",
      fullName: "Sara Hossam",
      token: "demo-token-receptionist",
    },
    "admin@demo.com": {
      email: "admin@demo.com",
      role: "Admin",
      fullName: "Mohamed Ahmed",
      token: "demo-token-admin",
    },
  };

  const loginUser = async (values) => {
    setLoading(true);
    setServerError("");

    await new Promise((resolve) => setTimeout(resolve, 700));

    const demoUser = demoUsers[values.email.toLowerCase().trim()];

    if (demoUser && values.password === "123456") {
      
  
      login(demoUser.token, demoUser.role, {
        email: demoUser.email,
        fullName: demoUser.fullName,
      });

    
      notifications.show({
        title: "Login Successful",
        message: `Welcome back, ${demoUser.fullName}`,
        color: "green",
        autoClose: 3000,
      });

     
      if (demoUser.role === "Admin") {
        navigate("/admin", { replace: true });
      } else if (demoUser.role === "Receptionist") {
        navigate("/receptionist", { replace: true });
      } else {
        navigate("/customer", { replace: true });
      }

      return { success: true };
    } else {
      setServerError("Invalid email or password");
      setLoading(false);
      return { success: false };
    }
  };

  return { loginUser, loading, serverError, setServerError };
};