import { useState } from "react";

export default function Form() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);

    // ✅ GET VALUES
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const projectTitle = formData.get("projectTitle");
    const projectType = formData.get("projectType");
    const budget = formData.get("budget");
    const description = formData.get("description");

    // ✅ COMBINE NAME
    const fullName = `${firstName} ${lastName}`;

    // ✅ COMBINE MESSAGE
    const message = `
      Project Title: ${projectTitle}
      Project Type: ${projectType}
      Budget: ${budget}

      Project Description:
      ${description}
        `;

    // ✅ CREATE NEW CLEAN DATA (ONLY 3 FIELDS)
    const newFormData = new FormData();
    newFormData.append("access_key", "d2982415-2e48-4a75-a713-fa9125a5ee01");
    newFormData.append("name", fullName);
    newFormData.append("email", email);
    newFormData.append("message", message);

    // ✅ SEND
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: newFormData,
    });

    const data = await response.json();

    if (data.success) {
      setSubmitted(true);
      form.reset(); // ✅ clear form

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);
    } else {
      alert("Failed to send request");
    }
  };

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="bg-black rounded-t-3xl p-6">
        <h2 className="text-2xl font-bold text-white">
          Hire Me for Your Project
        </h2>
      </div>
      <div>
        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-4 mb-2 text-center">
            <p className="text-green-700 text-[15px]">
              Your request has been sent successfully. We'll get back to you
              soon!
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>

      {/* 2-column grid for inputs */}
      <div className="px-6 pt-6 grid grid-cols-1  md:grid-cols-2 gap-3">
        <input
          type="text"
          placeholder="Your Firstname..."
          name="firstName"
          className="border p-2 rounded px-4 py-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Your Lastname..."
          name="lastName"
          className="border p-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="email"
          placeholder="Please Enter Your Email..."
          name="email"
          className="border p-2 rounded  border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <input
          type="text"
          placeholder="Your Project Title..."
          name="projectTitle"
          className="border p-2 rounded  border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />

        <select
          className="border p-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="projectType"
          required
        >
          <option value="">Select Project Type</option>
          <option value="website">Website Development</option>
          <option value="ecommerce">E-commerce Website</option>
          <option value="wordpress">WordPress / Elementor</option>
          <option value="react">React Web App</option>
          <option value="other">Other</option>
        </select>

        <select
          className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 border-gray-400"
          name="budget"
          required
        >
          <option value="">Budget Range</option>
          <option value="low">₱5000 - ₱8000</option>
          <option value="mid">₱8000 - ₱10000</option>
          <option value="high">₱10000+</option>
        </select>
      </div>

      {/* Full width textarea */}
      <textarea
        placeholder="Describe your project..."
        name="description"
        className="border p-2 rounded h-28 mx-6 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
        required
      ></textarea>

      <button
        type="submit"
        className=" text-white m-6 py-2 rounded-lg bg-orange-500 hover:bg-orange-500/90 hover:cursor-pointer transition-all duration-300 mt-2"
      >
        Send Request
      </button>

      <p className="text-xs text-gray-500 text-center p-6">
        I usually respond within 24 hours.
      </p>
    </form>
  );
}
