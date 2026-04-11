import { Routes, Route, Navigate } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

import LoadingPage from "./Pages/LoadingPage/LoadingPage";
import ProtectedRoute from "./Routes/ProtectedRoute";

// Lazy Loading for Public Pages
const NotFound = lazy(() => import("./Pages/NotFound"));
const Home = lazy(() => import("./Pages/Home/Home"));
const Login = lazy(() => import("./Pages/Auth/Login/Login"));
const Register = lazy(() => import("./Pages/Auth/Register/Register"));
const BrowseRooms = lazy(() => import("./Pages/Room/BrowseRooms"));
const Settings = lazy(() => import("./Pages/Settings"));
const Profile = lazy(() => import("./Pages/Profile"));
const Notifications = lazy(() => import("./Pages/Notifications"));

// Layout Pages
const CustomerLayout = lazy(() => import("./Layout/CustomerLayout"));
const ReceptionistLayout = lazy(() => import("./Layout/ReceptionistLayout"));
const AdminLayout = lazy(() => import("./Layout/AdminLayout"));

// Customer Pages
const BookRoom = lazy(() => import("./Pages/Customer/BookRoom"));
const Favourites = lazy(() => import("./Pages/Customer/Favourites"));
const MyBookings = lazy(() => import("./Pages/Customer/MyBookings"));
const RoomDetails = lazy(() => import("./Pages/Room/RoomDetails"));
const CheckOut = lazy(() => import("./Pages/Customer/CheckOut"));
const CheckIn = lazy(() => import("./Pages/Customer/CheckIn"));

// Receptionist Pages
const ReceptionisDashBoard = lazy(() => import("./Pages/Receptionist/ReceptionisDashBoard"));
const BookingRequests = lazy(() => import("./Pages/Receptionist/BookingRequests"));
const RoomsManagement = lazy(() => import("./Pages/Receptionist/RoomsManagement"));
const CheckInManagement = lazy(() => import("./Pages/Receptionist/CheckInManagement"));
const CheckOutManagement = lazy(() => import("./Pages/Receptionist/CheckOutManagement"));
const PaymentManagement = lazy(() => import("./Pages/Receptionist/PaymentManagement"));

// Admin Pages
const AdminDashBoard = lazy(() => import("./Pages/Admin/AdminDashBoard"));
const ManageRooms = lazy(() => import("./Pages/Admin/ManageRooms"));
const ManageUsers = lazy(() => import("./Pages/Admin/ManageUsers"));
const Reviews = lazy(() => import("./Pages/Admin/Reviews"));
const SystemLogs = lazy(() => import("./Pages/Admin/SystemLogs"));

function App() {
  const user = {
    name: "Malak",
    role: "receptionist",
  };

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
    });
  }, []);

  return (
    <>
      <Suspense fallback={<LoadingPage />}>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/notifications" element={<Notifications />} />

          {/* ===================================== Customer ==================================  */}

          <Route element={<ProtectedRoute allowedRoles={["customer"]} />}>
            <Route path="/customer" element={<CustomerLayout />}>
              <Route index element={<BrowseRooms />} />
              <Route path="rooms/:roomId" element={<RoomDetails />} />
              <Route path="book-room/:roomId" element={<BookRoom />} />
              <Route path="favourites" element={<Favourites />} />
              <Route path="my-bookings" element={<MyBookings />} />
              <Route path="check-out/:bookingId" element={<CheckOut />} />
              <Route path="check-in/:roomId" element={<CheckIn />} />
            </Route>
          </Route>

          {/* ===================================== Receptionist ==================================  */}

          <Route element={<ProtectedRoute allowedRoles={["receptionist"]} />}>
            <Route path="/receptionist" element={<ReceptionistLayout />}>
              <Route index element={<ReceptionisDashBoard />} />
              <Route path="booking-requests" element={<BookingRequests />} />
              <Route path="rooms/:roomId" element={<RoomDetails />} />
              <Route path="room-management" element={<RoomsManagement />} />
              <Route path="check-in-management" element={<CheckInManagement />} />
              <Route path="check-out-management" element={<CheckOutManagement />} />
              <Route path="payment-management" element={<PaymentManagement />} />
            </Route>
          </Route>

          {/* ===================================== Admin ==================================  */}

          <Route element={<ProtectedRoute allowedRoles={["admin"]} />}>
            <Route path="/admin" element={<AdminLayout />}>
              <Route index element={<AdminDashBoard />} />
              <Route path="manage-rooms" element={<ManageRooms />} />
              <Route path="rooms" element={<BrowseRooms />} />
              <Route path="rooms/:roomId" element={<RoomDetails />} />
              <Route path="manage-users" element={<ManageUsers />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="system-logs" element={<SystemLogs />} />
            </Route>
          </Route>

          {/* Redirect based on user role */}
          <Route
            path="/"
            element={
              user ? (
                user.role === "admin" ? (
                  <Navigate to="/admin" />
                ) : user.role === "receptionist" ? (
                  <Navigate to="/receptionist" />
                ) : (
                  <Navigate to="/customer" />
                )
              ) : (
                <Navigate to="/" />
              )
            }
          />

          {/* 404 Not Found */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;