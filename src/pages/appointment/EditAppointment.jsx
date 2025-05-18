import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateAppointment } from "../../redux/slices/appointmentSlice";

const EditAppointment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(state?.appointment || {});

  const doctors = ["Dr. John Smith", "Dr. Priya Sharma", "Dr. Emily Wang"];

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAppointment(formData));
    navigate("/appointment-details");
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="fullName"
          value={formData.email}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="fullName"
          value={formData.phone}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        <input
          type="text"
          name="fullName"
          value={formData.date}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3"
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc, idx) => (
            <option key={idx} value={doc}>
              {doc}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Update Appointment
        </button>
      </form>
    </div>
  );
};

export default EditAppointment;
