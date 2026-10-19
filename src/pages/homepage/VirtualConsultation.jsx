
import { useState } from "react";

export default function VirtualConsultation() {
  const [formData, setFormData] = useState({
    name: "",
    doctor: "",
    location: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.doctor || !formData.location) {
      alert("Please complete all fields.");
      return;
    }

    alert("Your consultation request has been submitted!");
  };

  return (
    <section className="w-full bg-white px-4 py-10 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl rounded-[28px] bg-[#F3F8FD] px-6 py-8 sm:px-8 md:px-10 md:py-9">
        {/* Heading and rating */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <h2 className="text-2xl font-medium tracking-tight text-[#171717] sm:text-3xl">
            Virtual Consultation
          </h2>

          <div className="flex items-center gap-2">
            <div
              className="flex gap-0.5 text-[#FFB800]"
              aria-label="Rated 5 out of 5 stars"
            >
              {[1, 2, 3, 4, 5].map((star) => (
                <span key={star} className="text-lg">
                  ★
                </span>
              ))}
            </div>

            <span className="text-sm text-[#171717]">
              5.0 (980 Reviews)
            </span>
          </div>
        </div>

        {/* Consultation form */}
        <form
          onSubmit={handleSubmit}
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_1fr_136px] lg:items-end"
        >
          <div>
            <label
              htmlFor="consultation-name"
              className="mb-2 block text-sm text-[#444]"
            >
              Name
            </label>
            <input
              id="consultation-name"
              name="name"
              type="text"
              placeholder="Jane Smith"
              value={formData.name}
              onChange={handleChange}
              required
              className="h-10 w-full rounded-xl border border-transparent bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="consultation-doctor"
              className="mb-2 block text-sm text-[#444]"
            >
              Doctor
            </label>
            <input
              id="consultation-doctor"
              name="doctor"
              type="text"
              placeholder="Dr Maria Cleven"
              value={formData.doctor}
              onChange={handleChange}
              required
              className="h-10 w-full rounded-xl border border-transparent bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="consultation-location"
              className="mb-2 block text-sm text-[#444]"
            >
              Location
            </label>
            <input
              id="consultation-location"
              name="location"
              type="text"
              placeholder="Amsterdam"
              value={formData.location}
              onChange={handleChange}
              required
              className="h-10 w-full rounded-xl border border-transparent bg-white px-3 text-sm text-gray-800 outline-none transition focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <button
            type="submit"
            className="h-10 w-full rounded-full bg-[#9BBEFF] px-6 text-sm font-medium text-white transition duration-300 hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 lg:mb-0"
          >
            Submit
          </button>
        </form>

        {/* Patient statistics */}
        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2">
          <p className="text-4xl font-medium tracking-tight text-[#151515] sm:text-[40px]">
            200K+
          </p>

          <p className="max-w-[/210px/] text-sm leading-[/22px/] text-[#444]">
            Cured satisfied patients
            <br />
            around the globe
          </p>
        </div>
      </div>
    </section>
  );
}
