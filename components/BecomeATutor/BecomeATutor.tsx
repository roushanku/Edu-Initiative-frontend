// pages/BecomeATutor.tsx
"use client";

import { useState } from "react";

const BecomeATutor = () => {
  const [formData, setFormData] = useState({
    userId: "",
    aadharNumber: "",
    whatsappNumber: "",
    qualifications: "",
    experience: "",
    subjects: [{ subjectId: "", class: "" }],
    expertise: "",
    timingPreferred: [{ day: "", timings: [{ startTime: "", endTime: "" }] }],
    applicationStatus: "PENDING",
    address: "",
    documents: [],
  });

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleArrayChange = (
    e: any,
    index: number,
    arrayName: keyof typeof formData
  ) => {
    const { name, value } = e.target;
    const newArray = [...(formData[arrayName] as any[])];
    newArray[index] = { ...newArray[index], [name]: value };
    setFormData({ ...formData, [arrayName]: newArray });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic here
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-6">
      <form
        onSubmit={handleSubmit}
        className="space-y-6 bg-white p-6 rounded-lg shadow-md"
      >
        <input
          type="text"
          name="userId"
          placeholder="User ID"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="number"
          name="aadharNumber"
          placeholder="Aadhar Number"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />
        <input
          type="number"
          name="whatsappNumber"
          placeholder="WhatsApp Number"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        <select
          name="qualifications"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Qualification</option>
          {["10th", "12th", "B.Tech", "B.Ed", "M.TECH", "PHD"].map((qual) => (
            <option key={qual} value={qual}>
              {qual}
            </option>
          ))}
        </select>

        <input
          type="number"
          name="experience"
          placeholder="Years of Experience"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        />

        {formData.subjects.map((subject, index) => (
          <div key={index} className="space-y-2">
            <div className="flex flex-col sm:flex-row sm:space-x-4">
              <input
                type="text"
                name="subjectId"
                placeholder="Subject ID"
                onChange={(e) => handleArrayChange(e, index, "subjects")}
                required
                className="w-full sm:flex-1 p-3 border rounded-lg"
              />
              <input
                type="text"
                name="class"
                placeholder="Class"
                onChange={(e) => handleArrayChange(e, index, "subjects")}
                required
                className="w-full sm:flex-1 p-3 border rounded-lg"
              />
            </div>
          </div>
        ))}

        <select
          name="expertise"
          onChange={handleChange}
          required
          className="w-full p-3 border rounded-lg"
        >
          <option value="">Select Expertise</option>
          {["MATH", "SCIENCE", "ENGLISH", "SOCIAL_STUDIES"].map((exp) => (
            <option key={exp} value={exp}>
              {exp}
            </option>
          ))}
        </select>

        {/* Timing Preferred */}
        {formData.timingPreferred.map((timing, index) => (
          <div key={index} className="space-y-4">
            <select
              name="day"
              onChange={(e) => handleArrayChange(e, index, "timingPreferred")}
              required
              className="w-full p-3 border rounded-lg"
            >
              <option value="">Select Day</option>
              {[
                "MONDAY",
                "TUESDAY",
                "WEDNESDAY",
                "THURSDAY",
                "FRIDAY",
                "SATURDAY",
                "SUNDAY",
              ].map((day) => (
                <option key={day} value={day}>
                  {day}
                </option>
              ))}
            </select>
            {/* Add timings input */}
            {timing.timings.map((timeSlot, timeIndex) => (
              <div
                key={timeIndex}
                className="flex flex-col sm:flex-row sm:space-x-4"
              >
                <input
                  type="time"
                  name="startTime"
                  placeholder="Start Time"
                  onChange={(e) =>
                    handleArrayChange(e, timeIndex, "timingPreferred")
                  }
                  required
                  className="w-full sm:flex-1 p-3 border rounded-lg"
                />
                <input
                  type="time"
                  name="endTime"
                  placeholder="End Time"
                  onChange={(e) =>
                    handleArrayChange(e, timeIndex, "timingPreferred")
                  }
                  required
                  className="w-full sm:flex-1 p-3 border rounded-lg"
                />
              </div>
            ))}
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-slate-300 hover:bg-slate-600 hover:text-white text-black py-3 rounded-lg transition-colors"
        >
          Submit Application
        </button>
      </form>
    </div>
  );
};

export default BecomeATutor;
