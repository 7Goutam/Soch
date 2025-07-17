// src/Components/JoinUs/JoinUsForm.jsx
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const JoinUsForm = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      interest: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      phone: Yup.string()
        .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
        .required("Phone number is required"),
      interest: Yup.string().required("Select your interest"),
      message: Yup.string(),
    }),
    onSubmit: (values) => {
      console.log("Form submitted:", values);

      // ✅ Optionally show toast here too
      toast.success("Form submitted! Redirecting to home...", {
        autoClose: 1500,
      });

      // ✅ Redirect with message to homepage
      setTimeout(() => {
        navigate("/", { state: { message: "🎉 Thank you for joining! We'll be in touch soon." } });
      }, 1500);
    },
  });

  return (
    <div className="bg-[#FFFCEB] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#E6EF3A] mb-6">Join Us</h2>

        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {formik.touched.name && formik.errors.name && (
            <p className="text-red-500 text-sm">{formik.errors.name}</p>
          )}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {formik.touched.email && formik.errors.email && (
            <p className="text-red-500 text-sm">{formik.errors.email}</p>
          )}

          <input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />
          {formik.touched.phone && formik.errors.phone && (
            <p className="text-red-500 text-sm">{formik.errors.phone}</p>
          )}

          <select
            name="interest"
            value={formik.values.interest}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Select Interest</option>
            <option value="volunteering">Volunteering</option>
            <option value="event management">Event Management</option>
            <option value="media & content">Media & Content</option>
            <option value="outreach">Outreach</option>
          </select>
          {formik.touched.interest && formik.errors.interest && (
            <p className="text-red-500 text-sm">{formik.errors.interest}</p>
          )}

          <textarea
            name="message"
            placeholder="Why do you want to join us?"
            rows="4"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
          />

          <button
            type="submit"
            className="w-full bg-[#E6EF3A] text-black font-semibold py-2 rounded-md hover:bg-yellow-300 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default JoinUsForm;
