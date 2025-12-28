import { useState } from "react";

function contactform() {
  const [result, setResult] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "90483b94-9986-4eff-b182-295f7dcdb044");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setResult(data.success ? "Message send successfully!" : "Error");
  };

  return (
    <div
      id="contactform"
      className="flex items-center justify-center bg-black py-35"
    >
      <div className="w-full max-w-lg bg-white rounded-4xl shadow-md space-y-4">
        <form onSubmit={handleSubmit}>
          <div className="bg-orange-500 p-6 text-white rounded-tl-4xl rounded-tr-4xl">
            <h2 className="text-2xl font-bold text-center">Contact Me</h2>
          </div>

          <div className="p-6">
            {/* Name */}
            <label className="block text-sm font-medium mb-1">Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Your name"
              required
              className="w-full border px-3 py-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Email */}
            <label className="block text-sm font-medium mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
              className="w-full border px-3 py-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            {/* Message */}
            <label className="block text-sm font-medium mb-1">Message</label>
            <textarea
              name="message"
              placeholder="Your message..."
              rows="4"
              required
              className="w-full border px-3 py-2 rounded border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <p className="text-green-600">{result}</p>

            <button
              type="submit"
              className="w-full text-white py-2 rounded bg-orange-500 hover:bg-orange-500/90 hover:cursor-pointer transition-all duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default contactform;
