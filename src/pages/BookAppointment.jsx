import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    doctor: '',
  });

  const [successMessage, setSuccessMessage] = useState('');

  const doctors = ['Dr. John Smith', 'Dr. Priya Sharma', 'Dr. Emily Wang'];

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Appointment Booked:', formData);
    setSuccessMessage('Your appointment has been booked successfully!');
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      doctor: '',
    });
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Book an Appointment</h2>
      <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
          />
        </div>
        <select
          name="doctor"
          value={formData.doctor}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
        >
          <option value="">Select Doctor</option>
          {doctors.map((doc, index) => (
            <option key={index} value={doc}>
              {doc}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Book Appointment
        </button>
        {successMessage && (
          <p className="text-green-600 text-center font-medium">{successMessage}</p>
        )}
      </form>
    </section>
  );
};

export default BookAppointment;
