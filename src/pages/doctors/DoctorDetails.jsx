import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { doctors } from "../../utils/doctors";

const DoctorDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const doctor = doctors.find((doc) => doc.id === parseInt(id));
  console.log("doctor",doctor)

  if (!doctor) {
    return (
      <div className="p-8 text-center">
        <p className="text-red-600">Doctor not found.</p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Back to Doctors
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-xl mx-auto p-8 text-center mt-[60px]">
      <img
        src={doctor?.img}
        alt={doctor.name}
        className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
      />
      <h1 className="text-3xl font-bold text-blue-900">{doctor.name}</h1>
      <p className="text-lg text-gray-600 mt-2">{doctor.specialization}</p>
      <p className="text-gray-500 mt-4">Doctor ID: {id}</p>
    </div>
  );
};

export default DoctorDetails;
