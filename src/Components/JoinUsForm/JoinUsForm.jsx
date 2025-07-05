// src/Components/JoinUs/JoinUsForm.jsx
import React, { useState } from "react";

const JoinUsForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // TODO: Send data to backend or API here

    setSubmitted(true);
    setFormData({
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    });
  };

  return (
    <div className="bg-[#FFFCEB] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#E6EF3A] mb-6">Join Us</h2>

        {submitted ? (
          <p className="text-green-600 font-semibold text-center">
            🎉 Thank you for joining! We'll be in touch soon.
          </p>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-6">
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <select
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">Select Interest</option>
              <option value="volunteering">Volunteering</option>
              <option value="event management">Event Management</option>
              <option value="media & content">Media & Content</option>
              <option value="outreach">Outreach</option>
            </select>

            <textarea
              name="message"
              placeholder="Why do you want to join us?"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
            />

            <button
              type="submit"
              className="w-full bg-[#E6EF3A] text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default JoinUsForm;
