import { Outlet } from "react-router-dom";

const ProtectedRoute = ({ allowedRoles }) => {
  const user = { role: "receptionist" }; 

  if (!user) return <Navigate to="/login" replace />;
  
  return allowedRoles.includes(user.role) 
    ? <Outlet /> 
    : <Navigate to="/not-found" replace />;
};


export default ProtectedRoute;
