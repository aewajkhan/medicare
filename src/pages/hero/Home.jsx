import React from "react";
import { images } from "../../utils/images";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="bg-blue-50 py-16">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl font-bold text-blue-700 mb-4">
              Your Health, Our Priority
            </h1>
            <p className="text-gray-600 mb-6">
              Get expert care from trusted doctors at MediCare Hospital. We
              offer world-class services with compassion.
            </p>
            <Link
              to={"/book-appointment"}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Book Appointment
            </Link>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0">
            <img src={images.doctor_1} alt="Doctor" className="w-full h-1/2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">
            Our Services
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {["Emergency Care", "Diagnostics", "Surgery"].map((service) => (
              <Link to={service.toLowerCase().split(" ").join("-")}>
                <div
                  key={service}
                  className="bg-blue-100 p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="text-xl font-bold text-blue-600 mb-2">
                    {service}
                  </h3>
                  <p className="text-gray-600">
                    High-quality care with the latest technology and a
                    compassionate team.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-8">
            Meet Our Doctors
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((id) => (
              <div
                key={id}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
              >
                <img
                  src={images.doctor_2}
                  alt="Doctor"
                  className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
                />
                <h4 className="text-lg font-bold text-blue-700">
                  Dr. John Doe
                </h4>
                <p className="text-gray-500">Cardiologist</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-semibold text-blue-700 mb-6">
            Contact Us
          </h2>
          <p className="text-gray-600 mb-6">
            Have questions or want to book an appointment? Get in touch with our
            support team.
          </p>
          <div className="space-y-3">
            <p>
              <strong>Email:</strong> support@medicare.com
            </p>
            <p>
              <strong>Phone:</strong> +1 800 123 456
            </p>
            <p>
              <strong>Address:</strong> 123 MediCare Lane, Health City
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
