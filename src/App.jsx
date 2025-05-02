import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RootLayout from "./layout/RootLayout";
import Doctors from "./pages/Doctors";
import Contact from "./pages/Contact";
import Services from "./pages/services/Services";
import AboutUs from "./pages/AboutUs";
import BookAppointment from "./pages/BookAppointment";
import Cardiology from "./pages/services/Cardiology";
import Neurology from "./pages/services/Neurology";
import Pediatrics from "./pages/services/Pediatrics";
import Orthopedics from "./pages/services/Orthopedics";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

const App = () => {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/book-appointment" element={<BookAppointment />} />
        <Route path="/services/cardiology" element={<Cardiology />} />
        <Route path="/services/neurology" element={<Neurology />} />
        <Route path="/services/pediatrics" element={<Pediatrics />} />
        <Route path="/services/orthopedics" element={<Orthopedics />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
    </Routes>
  );
};

export default App;
