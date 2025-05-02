import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { updateAppointment } from '../../redux/slices/appointmentSlice';

const EditAppointment = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(state?.appointment || {});

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateAppointment(formData));
    navigate('/appointment-details');
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-2xl font-bold mb-4 text-center">Edit Appointment</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Input fields like name, email, phone, date, etc. */}
        <input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />
        {/* Add all other fields similarly */}
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
