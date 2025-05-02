import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { title: "Cardiology", desc: "Heart care with advanced diagnostics and treatment.", path: "/services/cardiology" },
    { title: "Neurology", desc: "Comprehensive brain and nervous system services.", path: "/services/neurology" },
    { title: "Pediatrics", desc: "Quality care for infants, children, and adolescents.", path: "/services/pediatrics" },
    { title: "Orthopedics", desc: "Bone and joint treatments for faster recovery.", path: "/services/orthopedics" },
  ];

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-10 text-blue-900">Our Services</h2>
      <div className="grid gap-8 md:grid-cols-2">
        {services.map((service, index) => (
          <Link to={service.path} key={index}>
            <div className="p-6 rounded-xl shadow-lg border hover:shadow-xl transition hover:bg-blue-50 cursor-pointer">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h3>
              <p className="text-gray-600">{service.desc}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Services;
