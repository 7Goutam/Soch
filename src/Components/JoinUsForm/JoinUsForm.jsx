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
      phone: "",
      email: "",
      interest: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      phone: Yup.string().required("Phone is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      interest: Yup.string().required("Select an interest"),
      message: Yup.string(),
    }),
    onSubmit: async (values) => {
      const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdqAtoAYzFRrOwW4nkaDGmK0MU8ZWHRtGjipXsc6i3lit-abQ/formResponse";

      const formData = new URLSearchParams();
      formData.append("entry.1090694389", values.name);
      formData.append("entry.806102975", values.phone);
      formData.append("entry.2024219940", values.email);
      formData.append("entry.425683528", values.interest);
      formData.append("entry.1564792835", values.message);

      try {
        const response = await fetch(formUrl, {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: formData.toString(),
        });
        setTimeout(() => {
        navigate("/", { state: { message: "🎉 Thank you for joining! We'll be in touch soon." } });
      }, 1500);
      } catch (error) {
        toast.error("❌ Something went wrong!");
        console.error("Submit error:", error);
      }
    },
  });

  return (
    <div className="bg-[#FFFCEB] py-16 px-4">
      <div className="max-w-2xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold text-center text-[#E6EF3A] mb-6">Join Us</h2>
        <form onSubmit={formik.handleSubmit} className="space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formik.values.name}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.errors.name && <p className="text-red-600 text-sm">{formik.errors.name}</p>}

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formik.values.phone}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.errors.phone && <p className="text-red-600 text-sm">{formik.errors.phone}</p>}

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          {formik.errors.email && <p className="text-red-600 text-sm">{formik.errors.email}</p>}

          <select
            name="interest"
            value={formik.values.interest}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          >
            <option value="">Select Interest</option>
            <option value="Volunteering">Volunteering</option>
            <option value="Event Management">Event Management</option>
            <option value="Media & Content">Media & Content</option>
            <option value="Outreach">Outreach</option>
          </select>
          {formik.errors.interest && <p className="text-red-600 text-sm">{formik.errors.interest}</p>}

          <textarea
            name="message"
            placeholder="Why do you want to join us?"
            value={formik.values.message}
            onChange={formik.handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
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
