import React from 'react';

const Emergency = () => {
  return (
    <section className="min-h-screen bg-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl bg-white shadow-xl rounded-xl p-8 text-center">
        <h1 className="text-4xl font-bold text-red-700 mb-4">Emergency Services</h1>
        <p className="text-gray-600 text-lg leading-relaxed">
          Our Emergency Department is open 24/7 and equipped with cutting-edge facilities to provide immediate care in critical situations. Trust our team of expert doctors and nurses to handle any emergency with compassion and precision.
        </p>
      </div>
    </section>
  );
};

export default Emergency;
