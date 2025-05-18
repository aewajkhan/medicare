import React from "react";
import { useNavigate } from "react-router-dom";
import { doctors } from "../../utils/doctors";

const Doctors = () => {
  const navigate = useNavigate();

  const handleClick = (doctor) => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <section className="py-16 px-6 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Meet Our Doctors
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="text-center p-4 shadow-md rounded-xl border cursor-pointer hover:shadow-lg"
            onClick={() => handleClick(doc)}
          >
            <img
              src={doc.img}
              alt={doc.name}
              className="w-32 h-32 rounded-full mx-auto object-cover mb-4"
            />
            <h3 className="text-xl font-semibold text-blue-800">{doc.name}</h3>
            <p className="text-sm text-gray-500">{doc.specialization}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doctors;
