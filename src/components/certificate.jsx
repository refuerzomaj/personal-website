import React, { useState, useEffect } from "react";

/* =======================
   IMPORT CERTIFICATES (IMAGES ONLY)
======================= */
import certWordpress from "../assets/certificates/wordpress.jpg";
import certWordpress2 from "../assets/certificates/wordpress2.jpg";
import certCreative from "../assets/certificates/webdesign.png";
import certWebDev from "../assets/certificates/webdevelopment.png";
import certPython from "../assets/certificates/python.png";
import certVB from "../assets/certificates/visualbasic.png";
import certDigital from "../assets/certificates/digital.png";
import certCrypto from "../assets/certificates/cryptography.png";
import certJava from "../assets/certificates/java.png";

/* =======================
   CERTIFICATE DATA
======================= */
const certificates = [
  {
    date: "January 22, 2026",
    title: "Unlock WordPress Power: Build Themes, Plugins & FSE Sites",
    issuer: "Udemy",
    image: certWordpress2,
  },
  {
    date: "April 02, 2024",
    title: "Become a Wordpress Developer: Unlocking Power with Code",
    issuer: "Udemy",
    image: certWordpress,
  },
  {
    date: "Nov 12 – Dec 07, 2021",
    title: "Certificate of Completion in Creative Web Design",
    issuer: "Mindtech Training and Development Institute Inc.",
    image: certCreative,
  },
  {
    date: "Aug 26 – Sep 22, 2021",
    title: "Certificate of Completion in Web Development",
    issuer: "Mindtech Training and Development Institute Inc.",
    image: certWebDev,
  },
  {
    date: "Aug 09 – 20, 2021",
    title: "Certificate of Completion in Python Programming Essentials",
    issuer: "Department of Information and Communication Technology",
    image: certPython,
  },
  {
    date: "June 11, 2021",
    title:
      "Certificate of Participation in Visual Basic .Net Tools for Data Visualization",
    issuer: "Department of Information and Communication Technology",
    image: certVB,
  },
  {
    date: "April 12 – 16, 2021",
    title:
      "Certificate of Attendance in Digital Transformative Technologies Training",
    issuer: "Department of Information and Communication Technology",
    image: certDigital,
  },
  {
    date: "May 29, 2020",
    title: "Certificate of Participation in Introduction to Cryptography",
    issuer: "IECEP Cavite Governor",
    image: certCrypto,
  },
  {
    date: "Oct 18 – Dec 05, 2017",
    title: "Career Entry Course for Software Developer Using Java",
    issuer: "Technical Education and Skills Development",
    image: certJava,
  },
];

/* =======================
   CERTIFICATE CARD
======================= */
const CertificateCard = ({ cert, onClick }) => (
  <div
    onClick={() => onClick(cert)}
    className="group relative overflow-hidden border p-6 bg-neutral-950/80 
               border-slate-600/40 rounded-4xl cursor-pointer
               transition-all duration-300
               hover:-translate-y-2 hover:scale-[1.02]
               hover:shadow-[0_25px_50px_rgba(0,0,0,0.7)]"
  >
    {/* Hover Image */}
    <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300">
      <img
        src={cert.image}
        alt={cert.title}
        className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-300"
      />
      <div className="absolute inset-0 bg-black/30"></div>
    </div>

    {/* Text (hidden on hover) */}
    <div className="relative z-20 grid gap-2 group-hover:opacity-0 transition-opacity duration-300">
      <h3 className="text-2xl text-orange-400/80 font-extrabold">
        {cert.date}
      </h3>
      <p className="text-2xl text-white font-extrabold uppercase">
        {cert.title}
      </p>
      <p className="text-xl text-white">{cert.issuer}</p>
    </div>
  </div>
);

/* =======================
   MODAL (WITH 300ms DELAY)
======================= */
const CertificateModal = ({ cert, onClose }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (cert) {
      setTimeout(() => setVisible(true), 10); // OPEN delay
    }
  }, [cert]);

  if (!cert) return null;

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/90
                  transition-opacity duration-300
                  ${visible ? "opacity-100" : "opacity-0"}`}
      onClick={() => {
        setVisible(false);
        setTimeout(onClose, 300); // CLOSE delay
      }}
    >
      <div
        className={`relative max-w-6xl w-full mx-6
                    transform transition-all duration-300
                    ${visible ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* <button
          onClick={() => {
            setVisible(false);
            setTimeout(onClose, 300);
          }}
          className="absolute -top-4 -right-4 w-10 h-10 
                     bg-black text-white rounded-full border
                     border-white/20 cursor-pointer hover:bg-orange-500 transition"
        >
          ✕
        </button> */}

        <img
          src={cert.image}
          alt={cert.title}
          className="w-full max-h-[90vh] object-contain rounded-3xl"
        />
      </div>
    </div>
  );
};

/* =======================
   CERTIFICATE COMPONENT
======================= */
const Certificate = () => {
  const [selectedCert, setSelectedCert] = useState(null);

  return (
    <div className="bg-black py-10 px-10 h-full grid gap-16" id="about">
      <div className="max-w-[1000px] mx-auto grid gap-6 animate-slide-in-top">
        <h1 className="text-3xl sm:text-5xl font-extrabold bg-gradient-to-r from-orange-400 via-white to-orange-400 text-transparent bg-clip-text">
          Certificates
        </h1>

        <div className="grid lg:grid-cols-2 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard
              key={index}
              cert={cert}
              onClick={setSelectedCert}
            />
          ))}
        </div>
      </div>

      <CertificateModal
        cert={selectedCert}
        onClose={() => setSelectedCert(null)}
      />
    </div>
  );
};

export default Certificate;
