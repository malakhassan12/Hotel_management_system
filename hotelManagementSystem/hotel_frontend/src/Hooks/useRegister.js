import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { notifications } from "@mantine/notifications";
import useAuthStore from "../Store/authStore";

export const useRegister = () => {
  const navigate = useNavigate();
  const { login } = useAuthStore();   

  const [loading, setLoading] = useState(false);
  const [serverError, setServerError] = useState("");

  const registerUser = async (values) => {
    setLoading(true);
    setServerError("");

    
    await new Promise((resolve) => setTimeout(resolve, 1000));

    
    if (values.email && values.password && values.fullName) {
     
      const mockToken = `demo-token-${Date.now()}`;

      login(mockToken, values.role, {
        email: values.email,
        fullName: values.fullName,
      });

      notifications.show({
 title: "Account Created Successfully",
        message: `Welcome ${values.fullName}, you have been logged in automatically`,
        color: "green",
        autoClose: 4000,
      });

      
      if (values.role === "Admin") navigate("/admin");
      else if (values.role === "Receptionist") navigate("/receptionist");
      else navigate("/customer");

      return { success: true };
    } else {
      setServerError("Please fill all fields correctly");
      setLoading(false);
      return { success: false };
    }
  };

  return { registerUser, loading, serverError, setServerError };
};