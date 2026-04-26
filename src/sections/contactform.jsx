import { useState } from "react";
import { Send } from "lucide-react";
import { div } from "motion/react-client";
import { FaLinkedinIn } from "react-icons/fa6";
import { IoIosHome, IoIosCall } from "react-icons/io";
import { BiLogoGmail } from "react-icons/bi";
import FloatingInput from "../components/floatingInput";

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
    <div id="contactform" className=" bg-black">
      <div className="max-w-[1150px] mx-auto ">
        <div className="flex items-center justify-center py-20 px-10">
          <div className="w-full grid lg:grid-cols-2 gap-6">
            {/* LEFT SIDE - MAP */}
            <div className="border bg-white border-white/10 rounded-3xl  shadow-md">
              <form onSubmit={handleSubmit}>
                <div className="p-10">
                  <div>
                    {submitted ? (
                      <div className="bg-green-50 border border-green-200 p-4 mb-2 text-center">
                        <p className="text-green-700 text-[15px]">
                          Your message has been sent successfully. We'll get
                          back to you soon!
                        </p>
                      </div>
                    ) : (
                      <div></div>
                    )}
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Send me a message</h2>

                  {/* Name */}
                  <div className="mb-2">
                    <FloatingInput label="Full Name" name="name" />
                  </div>

                  {/* Email */}
                  <div className="mb-2">
                    <FloatingInput
                      label="Email Address"
                      type="email"
                      name="email"
                    />
                  </div>

                  {/* Message */}
                  <div className="mb-2">
                    <FloatingInput
                      label="Message"
                      name="message"
                      as="textarea"
                      rows={2}
                    />
                  </div>

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
            <div
              className="w-full h-[400px] gap-6 md:h-auto rounded-3xl overflow-hidden border bg-neutral-950/80 
  border-white/10 p-10"
            >
              <div className="text-white text-2xl font-extrabold pb-6">
                <h2>Contact Address</h2>
              </div>

              <div className="flex justify-start gap-4 p-2">
                <IoIosHome className="text-white text-2xl" />
                <p className="text-white">Taguig City</p>
              </div>

              {/* FIXED EMAIL */}
              <div className="flex justify-start gap-4 p-2 min-w-0">
                <BiLogoGmail className="text-white text-2xl flex-shrink-0" />
                <p className="text-white break-all">
                  gabitanan.jomardon@gmail.com
                </p>
              </div>

              <div className="flex justify-start gap-4 p-2">
                <IoIosCall className="text-white text-2xl" />
                <p className="text-white">0977 754 7404</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="w-full mx-auto h-[300px] md:h-[400px] overflow-hidden border border-white/10 shadow-lg">
        <iframe
          src="https://www.google.com/maps?q=Taguig+Philippines&output=embed"
          className="w-full h-full"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          title="Taguig Map"
        ></iframe>
      </div>
    </div>
  );
}

export default ContactForm;
