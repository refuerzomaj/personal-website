import { useState } from "react";
import { Send } from "lucide-react";
import { div } from "motion/react-client";

function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append("access_key", "90483b94-9986-4eff-b182-295f7dcdb044");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div
      id="contactform"
      className="flex items-center justify-center bg-black py-20 px-4"
    >
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-6">
        {/* LEFT SIDE - MAP */}
        <div className="border bg-white border-white/10 rounded-3xl  shadow-md">
          <form onSubmit={handleSubmit}>
            <div className="p-10">
              <div>
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 p-4 mb-2 text-center">
                    <p className="text-green-700 text-[15px]">
                      Your message has been sent successfully. We'll get back to
                      you soon!
                    </p>
                  </div>
                ) : (
                  <div></div>
                )}
              </div>
              <h2 className="text-2xl font-bold mb-4">Send me a message</h2>

              {/* Name */}
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
                className="w-full border px-3 py-2 text-black bg-white rounded my-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              {/* Message */}
              <label className="block text-sm font-medium mb-1">Message</label>
              <textarea
                name="message"
                placeholder="Your message..."
                rows="4"
                required
                className="w-full border px-3 py-2 text-black bg-white rounded my-2 border-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />

              <button
                type="submit"
                className="w-full text-white py-2 rounded-lg bg-orange-500 hover:bg-orange-500/90 hover:cursor-pointer transition-all duration-300 mt-2"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
        {/* RIGHT SIDE - FORM */}
        <div className="w-full h-[400px] md:h-auto rounded-3xl overflow-hidden border border-white/10">
          <iframe
            src="https://www.google.com/maps?q=Taguig+Philippines&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
