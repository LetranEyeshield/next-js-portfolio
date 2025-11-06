"use client";

import { useState } from "react";
import toast from "react-hot-toast";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      toast('Message Sent!', {
      style: {
      background: '#bdcff7ff',
      color: '#000',
      padding: '10px',
      },
    });
      setFormData({
        fullName: "",
        email: "",
        phone: "",
        message: "",
      });
    } else {
        toast('Something went wrong, please try again!', {
      style: {
      background: '#fa6d6dff',
      color: '#fff',
      padding: '10px',
      },
    });
    }
  };

  return (
    <>
      <form
      id="contact"
        onSubmit={handleSubmit}
        className="contact-form max-w-xl p-4 space-y-4 text-white mx-auto bg-gray-200 rounded-2xl mt-5"
      >
        <h2 id="contact-h2" className="mx-auto text-center text-3xl text-black">Contact Me</h2>
        <div className="flex gap-4 name-fields">
          <input
            type="text"
            name="fullName"
            placeholder="Name"
            className="w-full p-2 border rounded text-black border-black"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full p-2 border rounded text-black border-black"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          className="w-full p-2 border rounded text-black border-black"
          value={formData.phone}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Your message"
          rows={4}
          className="w-full p-2 border rounded text-black border-black"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button
          type="submit"
          className="text-white px-4 py-2 rounded bg-blue-300 hover:bg-blue-500 mx-auto block"
        >
          Send Message
        </button>
      </form>
    </>
  );
}


