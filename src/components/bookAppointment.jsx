import React, { useState } from "react";
import img1 from "../assets/bookAppointment/img1.jpg";

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    location: "",
    department: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const { name, email, telephone, location, department, comment } = formData;

    const whatsappNumber = "918604170358";

    const message = `New Appointment Details:
Name: ${name}
Email: ${email}
Telephone: ${telephone}
Location: ${location}
Department: ${department}
Comment: ${comment}`;

    const encodedMessage = encodeURIComponent(message);

    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    window.open(whatsappLink, "_blank");
  };

  return (
    <div
      className="w-full min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-8"
      style={{ backgroundImage: `url(${img1})` }}
    >
      <div className="w-full max-w-md md:max-w-xl bg-[#1B2331]/90 text-white p-6 md:ml-100 rounded shadow-lg">
        <h1 className="text-3xl font-semibold mb-6 text-center">Book Your Appointment</h1>
        <div className="space-y-4">
          <input
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 text-white bg-transparent border border-white"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="p-2 text-white bg-transparent border border-white"
            />
            <input
              name="telephone"
              placeholder="Telephone"
              value={formData.telephone}
              onChange={handleChange}
              className="p-2 text-white bg-transparent border border-white"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="p-2 text-white bg-transparent border border-white"
            >
              <option value="">Select Location</option>
              <option value="Dubai">Dubai</option>
            </select>
            <select
              name="department"
              value={formData.department}
              onChange={handleChange}
              className="p-2 text-white bg-transparent border border-white"
            >
              <option value="">Select Department</option>
              <option value="Men">Men</option>
              <option value="Women">Women</option>
              <option value="Tuxedos">Tuxedos</option>
              <option value="Wedding">Wedding</option>
              <option value="Fabric">Fabric</option>
              <option value="Alteration">Alteration</option>
            </select>
          </div>
          <textarea
            name="comment"
            placeholder="Comment"
            value={formData.comment}
            onChange={handleChange}
            className="w-full p-2 text-white bg-transparent border border-white"
            rows={4}
          ></textarea>
          <button
            onClick={handleSubmit}
            className="w-full bg-yellow-600 text-white py-3 uppercase tracking-wider hover:bg-yellow-700 transition"
          >
            Book Your Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
