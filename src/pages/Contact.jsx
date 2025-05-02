import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // setLoading(true);
    // setResponseMsg('');
    console.log(formData)

    // try {
    //   const res = await fetch('http://localhost:5000/api/contact', {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   const data = await res.json();
    //   if (res.ok) {
    //     setResponseMsg('Message sent successfully!');
    //     setFormData({ name: '', email: '', message: '' });
    //   } else {
    //     setResponseMsg(data.message || 'Something went wrong!');
    //   }
    // } catch (error) {
    //   console.error('Error:', error);
    //   setResponseMsg('Failed to send message. Please try again.');
    // } finally {
    //   setLoading(false);
    // }
    console.log(formData)
  };

  return (
    <section className="py-16 px-6 max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-8">Contact Us</h2>
      <form onSubmit={handleSubmit} className="grid gap-6">
        <input
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="Your Name"
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-blue-500"
        />
        <input
          name="email"
          value={formData.email}
          onChange={handleChange}
          type="email"
          placeholder="Your Email"
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-blue-500"
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Your Message"
          rows={5}
          required
          className="p-3 border border-gray-300 rounded-md focus:outline-blue-500"
        />
        <button
          type="submit"
          className="bg-blue-700 text-white px-6 py-3 rounded-md hover:bg-blue-800 transition"
          disabled={loading}
        >
          {loading ? 'Sending...' : 'Send Message'}
        </button>
        {responseMsg && <p className="text-center text-sm text-gray-700">{responseMsg}</p>}
      </form>
    </section>
  );
};

export default Contact;
