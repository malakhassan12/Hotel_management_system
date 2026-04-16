import { Navigate, Outlet } from "react-router-dom";
import useAuthStore from "../Store/authStore";

const ProtectedRoute = ({ allowedRoles }) => {
  const { isAuthenticated, role } = useAuthStore();

 
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  
  if (allowedRoles && !allowedRoles.includes(role)) {
    if (role === "Admin") return <Navigate to="/admin" replace />;
    if (role === "Receptionist") return <Navigate to="/receptionist" replace />;
    if (role === "Customer") return <Navigate to="/customer" replace />;
    return <Navigate to="/login" replace />;
  }


  return <Outlet />;
};

export default ProtectedRoute;