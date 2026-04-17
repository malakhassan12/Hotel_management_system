import { Navigate, Outlet } from "react-router-dom";
const ProtectedRoute = ({ allowedRoles }) => {
  const user = {
    name: "Malak",
    role: "Customer",
  };

 
  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    if (user.role === "admin") return <Navigate to="/admin" replace />;
    if (user.role === "receptionist")
      return <Navigate to="/receptionist" replace />;
    if (user.role === "customer") return <Navigate to="/customer" replace />;
    return <Navigate to="/login" replace />;
  }


  return <Outlet />;
};

export default ProtectedRoute;