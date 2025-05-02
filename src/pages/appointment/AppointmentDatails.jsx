import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteAppointment } from "../../redux/slices/appointmentSlice";

const AppointmentDetails = () => {
  const { appointments } = useSelector((state) => state.appointment);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  if (appointments.length === 0) {
    return (
      <div className="text-center mt-16 p-6">
        <p className="text-xl text-red-600 font-semibold">
          No appointments found.
        </p>
        <button
          onClick={() => navigate("/")}
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Book Now
        </button>
      </div>
    );
  }

  const handleDelete = (id) => {
    // Simulate refund (mock Razorpay refund here)
    const refundSuccessful = true; // Replace with actual Razorpay refund logic
    dispatch(deleteAppointment(id));

    // Optionally show toast/notification
  };

  const handleEdit = (appointment) => {
    navigate(`/edit-appointment/${appointment.id}`, { state: { appointment } });
  };

  return (
    <div className="max-w-4xl mx-auto mt-16 p-6">
      <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
        Your Appointments
      </h2>
      <div className="space-y-6  gap-4 grid grid-cols-1  md:grid-cols-2 bg-blue-50">
        {appointments.map((appt, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-lg shadow p-6"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Appointment #{index + 1}
            </h3>
            <ul className="space-y-1 text-gray-700">
              <li>
                <strong>Name:</strong> {appt.fullName}
              </li>
              <li>
                <strong>Email:</strong> {appt.email}
              </li>
              <li>
                <strong>Phone:</strong> {appt.phone}
              </li>
              <li>
                <strong>Date:</strong> {appt.date}
              </li>
              <li>
                <strong>Time:</strong> {appt.time}
              </li>
              <li>
                <strong>Doctor:</strong> {appt.doctor}
              </li>
              <li>
                <strong>Amount Paid:</strong> ₹{appt.amount}
              </li>
            </ul>
            <div>
              <button
                onClick={() => handleEdit(appt)}
                className="px-4 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(appt.id)}
                className="px-4 py-1 bg-red-500 text-white rounded hover:bg-red-600 ml-2"
              >
                Delete & Refund
              </button>
              {appt.refundStatus && (
                <p
                  className={`mt-2 text-sm font-semibold ${
                    appt.refundStatus === "success"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  Refund{" "}
                  {appt.refundStatus === "success" ? "processed" : "failed"}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AppointmentDetails;
