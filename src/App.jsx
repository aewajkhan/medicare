import { Route, Routes } from "react-router-dom";
import Home from "./pages/hero/Home";
import RootLayout from "./layout/RootLayout";
import Contact from "./pages/Contact";
import Services from "./pages/services/Services";
import AboutUs from "./pages/AboutUs";
import BookAppointment from "./pages/appointment/BookAppointment";
import Cardiology from "./pages/services/Cardiology";
import Neurology from "./pages/services/Neurology";
import Pediatrics from "./pages/services/Pediatrics";
import Orthopedics from "./pages/services/Orthopedics";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import AppointmentDetails from "./pages/appointment/AppointmentDatails";
import EditAppointment from "./pages/appointment/EditAppointment";
import AuthRoutes from "./protected/AuthRoutes";
import Doctors from "./pages/doctors/Doctors";
import DoctorDetails from "./pages/doctors/DoctorDetails";
import Emergency from "./pages/hero/ourservices/Emergency";
import Diagnostics from "./pages/hero/ourservices/Diagnostics";
import Surgery from "./pages/hero/ourservices/Surgery";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="/doctor/:id" element={<DoctorDetails />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/emergency-care" element={<Emergency />} />
        <Route path="/diagnostics" element={<Diagnostics />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/cardiology" element={<Cardiology />} />
        <Route path="/services/neurology" element={<Neurology />} />
        <Route path="/services/pediatrics" element={<Pediatrics />} />
        <Route path="/services/orthopedics" element={<Orthopedics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route element={<AuthRoutes />}>
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/appointment-details" element={<AppointmentDetails />} />
          <Route path="/edit-appointment/:id" element={<EditAppointment />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default App;
