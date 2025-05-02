// import React, { useState } from 'react';

// const BookAppointment = () => {
//   const [formData, setFormData] = useState({
//     fullName: '',
//     email: '',
//     phone: '',
//     date: '',
//     time: '',
//     doctor: '',
//     amount:''
//   });

//   const [successMessage, setSuccessMessage] = useState('');

//   const doctors = ['Dr. John Smith', 'Dr. Priya Sharma', 'Dr. Emily Wang'];

//   const handleChange = (e) => {
//     setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const loadRazorpay = (src) => {
//     return new Promise((resolve) => {
//       const script = document.createElement("script");
//       script.src = src;
//       script.onload = () => resolve(true);
//       script.onerror = () => resolve(false);
//       document.body.appendChild(script);
//     });
//   };

//   const handlePayment = async (e) => {
//     e.preventDefault();

//     const updatedFormData = { ...formData, amount: '300' }; // ₹300
//     setFormData(updatedFormData); // set it in state

//     const res = await loadRazorpay("https://checkout.razorpay.com/v1/checkout.js");
//     if (!res) {
//       alert("Razorpay SDK failed to load. Are you online?");
//       return;
//     }

//     const options = {
//       key: 'rzp_test_FcmlTcsuXJUQ8E',
//       amount: 30000,
//       currency: 'INR',
//       name: 'MediClinic',
//       description: 'Appointment Booking Fee',
//       handler: function (response) {
//         console.log("Payment Success", response);
//         handleSubmitAfterPayment(updatedFormData);
//       },
//       prefill: {
//         name: formData.fullName,
//         email: formData.email,
//         contact: formData.phone,
//       },
//       theme: {
//         color: '#1e3a8a',
//       },
//     };

//     const paymentObject = new window.Razorpay(options);
//     paymentObject.open();
//   };

//   const handleSubmitAfterPayment = (data) => {
//     console.log('Appointment Booked:', data);
//     setSuccessMessage('Your appointment has been booked successfully!');
//     setFormData({
//       fullName: '',
//       email: '',
//       phone: '',
//       date: '',
//       time: '',
//       doctor: '',
//       amount: ''
//     });
//   };

//   return (
//     <section className="py-16 px-4 max-w-3xl mx-auto">
//       <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Book an Appointment</h2>
//       <form onSubmit={handlePayment} className="bg-white shadow-lg rounded-lg p-8 space-y-6">
//         <input
//           type="text"
//           name="fullName"
//           placeholder="Full Name"
//           value={formData.fullName}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Email Address"
//           value={formData.email}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//         />
//         <input
//           type="tel"
//           name="phone"
//           placeholder="Phone Number"
//           value={formData.phone}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//         />
//         <div className="flex flex-col md:flex-row gap-4">
//           <input
//             type="date"
//             name="date"
//             value={formData.date}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//           />
//           <input
//             type="time"
//             name="time"
//             value={formData.time}
//             onChange={handleChange}
//             required
//             className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//           />
//         </div>
//         <select
//           name="doctor"
//           value={formData.doctor}
//           onChange={handleChange}
//           required
//           className="w-full border border-gray-300 rounded-md p-3 focus:outline-blue-500"
//         >
//           <option value="">Select Doctor</option>
//           {doctors.map((doc, index) => (
//             <option key={index} value={doc}>
//               {doc}
//             </option>
//           ))}
//         </select>
//         <button
//           type="submit"
//           className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
//         >
//           Pay ₹300 & Book Appointment
//         </button>
//         {successMessage && (
//           <p className="text-green-600 text-center font-medium">{successMessage}</p>
//         )}
//       </form>
//     </section>
//   );
// };

// export default BookAppointment;

import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addAppointment} from "../../redux/slices/appointmentSlice";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    doctor: "",
    amount: "",
  });

  const doctors = ["Dr. John Smith", "Dr. Priya Sharma", "Dr. Emily Wang"];
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const loadRazorpay = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async (e) => {
    e.preventDefault();

    const updatedFormData = {
      ...formData,
      id: uuidv4(),
      amount: 300,
      refundStatus: null
    };
    
    const res = await loadRazorpay(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) return alert("Razorpay SDK failed to load.");

    const options = {
      key: "rzp_test_FcmlTcsuXJUQ8E",
      amount: 30000,
      currency: "INR",
      name: "MediClinic",
      description: "Appointment Booking Fee",
      handler: function (response) {
        dispatch(addAppointment(updatedFormData));
        navigate("/appointment-details");
      },
      prefill: {
        name: formData.fullName,
        email: formData.email,
        contact: formData.phone,
      },
      theme: { color: "#1e3a8a" },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <section className="py-16 px-4 max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">
        Book an Appointment
      </h2>
      <form
        onSubmit={handlePayment}
        className="bg-white shadow-lg rounded-lg p-8 space-y-6"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone"
          value={formData.phone}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-md p-3"
        />
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
            className="w-full border border-gray-300 rounded-md p-3"
          />
        </div>
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
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
        >
          Pay ₹300 & Book Appointment
        </button>
      </form>
    </section>
  );
};

export default BookAppointment;
