import React from "react";
import Navbar from "../component/global/Navbar";
import Footer from "../component/global/Footer";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <Navbar />

      <main className="mt-5 bg-blue-50">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default RootLayout;
