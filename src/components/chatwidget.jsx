import { useState, useEffect, useRef } from "react";
import { FaChevronDown } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { IoCloseCircleSharp } from "react-icons/io5";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const chatRef = useRef(null);
  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "Hi 👋 Want a website for your business?",
      time: new Date(),
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const randomReply = (replies) => {
    return replies[Math.floor(Math.random() * replies.length)];
  };

  const bottomRef = useRef(null);

  // 🔽 Auto scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isTyping]);

  useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event) => {
      if (chatRef.current && !chatRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  // 🕒 Smart time format
  const formatTime = (date) => {
    const now = new Date();
    const diff = Math.floor((now - new Date(date)) / 1000);

    if (diff < 60) return "Just now";

    const mins = Math.floor(diff / 60);
    if (mins < 60) return `${mins} min ago`;

    return new Date(date).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const hasKeyword = (msg) => {
    const keywords = [
      "website",
      "price",
      "business",
      "booking",
      "demo",
      "help",
    ];

    return keywords.some((k) => msg.includes(k));
  };

  const isGibberish = (text) => {
    const clean = text.toLowerCase().trim();

    // ❌ too short
    if (clean.length < 3) return true;

    // ❌ no spaces (like: asdasdasd)
    if (!clean.includes(" ") && clean.length > 10) return true;

    // ❌ no vowels (common in gibberish)
    if (!/[aeiou]/.test(clean) && clean.length > 5) return true;

    // ❌ too many repeating characters
    if (/(.)\1{4,}/.test(clean)) return true;

    return false;
  };

  const isMalicious = (text) => {
    const patterns = [
      "select *",
      "drop table",
      "insert into",
      "delete from",
      "--",
      ";--",
      "' or 1=1",
      "<script>",
      "</script>",
      "alert(",
      "onerror=",
    ];

    return patterns.some((p) => text.toLowerCase().includes(p));
  };

  // 🤖 Bot logic
  const getBotReply = (text) => {
    const msg = text.toLowerCase();

    // 🚫 Malicious FIRST (highest priority)
    if (isMalicious(msg)) {
      return randomReply([
        "⚠️ I can't process that request.",
        "That input looks unsafe. Please try something else.",
        "Sorry, I’m unable to respond to that.",
      ]);
    }

    // 🤯 Gibberish SECOND
    if (isGibberish(msg)) {
      return randomReply([
        "Hmm 🤔 I didn’t quite understand that.",
        "Can you rephrase your message? 😊",
        "Sorry, that looks unclear. What do you mean?",
        "I’m here to help! Can you explain it a bit more?",
      ]);
    }

    // 👋 Greeting
    if (msg.includes("hi") || msg.includes("hello")) {
      return randomReply([
        "Hey 👋 How can I help you today?",
        "Hello! 😊 Looking for a website?",
        "Hi there! Need help with your business online?",
      ]);
    }

    // 💻 Website
    if (msg.includes("website") || msg.includes("web")) {
      return randomReply([
        "Yes! I build modern websites 💻 What kind of business do you have?",
        "I can create a custom website 👍 What’s your business?",
        "Let’s build your website 🚀 What are you planning?",
      ]);
    }

    // 🧺 Laundry
    if (msg.includes("laundry")) {
      return randomReply([
        "Laundry business? 💧 Want online booking system?",
        "Nice 👍 I can add pickup & delivery booking.",
        "I can help you get more customers online 💼",
      ]);
    }

    // 🍔 Restaurant
    if (msg.includes("restaurant") || msg.includes("food")) {
      return randomReply([
        "I can build menu + online ordering 🍔",
        "Want customers to order online? 🔥",
        "Need delivery or pickup system? 🍕",
      ]);
    }

    // 🛒 Ecommerce
    if (msg.includes("shop") || msg.includes("store")) {
      return randomReply([
        "I can build your online store 🛒",
        "Do you want payment integration? 💳",
        "What products do you sell?",
      ]);
    }

    // 💰 Budget
    if (msg.includes("price") || msg.includes("budget")) {
      return randomReply([
        "Usually ₱5k–₱20k depending on features 💰",
        "Budget depends on your needs 👍",
        "What features do you want?",
      ]);
    }

    // 📅 Booking
    if (msg.includes("booking")) {
      return randomReply([
        "I can add booking system 📅",
        "Appointments or reservations?",
        "What type of booking do you need?",
      ]);
    }

    // 🖼️ Demo
    if (msg.includes("demo") || msg.includes("sample")) {
      return randomReply([
        "I can create a FREE demo 👍",
        "Want me to build a sample site?",
        "I’ll show you a live demo 💻",
      ]);
    }

    // ⏱️ Timeline
    if (msg.includes("how long")) {
      return randomReply([
        "Around 3–7 days ⏱️",
        "Usually within a week 👍",
        "Depends on features 🚀",
      ]);
    }

    // 📱 Mobile
    if (msg.includes("mobile")) {
      return randomReply([
        "Yes 👍 fully mobile-friendly",
        "Works on all devices 📱",
        "Responsive design included 🔥",
      ]);
    }

    // 📞 Hire
    if (msg.includes("hire") || msg.includes("contact")) {
      return randomReply([
        "I’m available 👍 Let’s start!",
        "Tell me your project 💼",
        "Let’s work together 🚀",
      ]);
    }

    // 🤔 No keyword fallback (uses your function now)
    if (!hasKeyword(msg)) {
      return randomReply([
        "Can you tell me more about your business?",
        "What kind of website do you need?",
        "I’d love to help! Give me more details 😊",
      ]);
    }

    // 🔄 Final fallback
    return randomReply([
      "Got it 👍 Tell me more!",
      "Sounds good 👀 What else?",
      "Let’s continue 😊",
    ]);
  };

  const sendMessage = () => {
    if (!input.trim()) return;

    const userText = input;

    const userMsg = {
      role: "user",
      text: userText,
      time: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInput("");

    // Show typing
    setIsTyping(true);

    // ⏳ 2 seconds delay
    setTimeout(() => {
      const replyText = getBotReply(userText);

      const botMsg = {
        role: "ai",
        text: replyText,
        time: new Date(),
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 bg-orange-500 hover:bg-orange-500/90 hover:cursor-pointer transition-all duration-300 text-white p-4 rounded-full shadow-lg cursor-pointer"
      >
        {open ? <IoCloseCircleSharp /> : <AiFillMessage />}
      </button>

      {/* Chat */}
      {open && (
        <div
          ref={chatRef}
          className="fixed 
    bottom-0 right-0
    w-full sm:w-[360px]
    h-full sm:h-[520px]
    sm:bottom-20 sm:right-6
    bg-[#0f172a] text-white 
    rounded-none sm:rounded-2xl 
    shadow-2xl flex flex-col 
    overflow-hidden border border-white/10
    z-50"
        >
          {/* Header */}
          <div className="bg-[#111827] p-4 font-semibold border-b border-white/10 flex items-center justify-between">
            <span>JG Assistant</span>

            {/* Close button (mobile + desktop safe) */}
            <button
              onClick={() => setOpen(false)}
              className="sm:hidden text-white/70 hover:text-white transition"
            >
              <IoCloseCircleSharp size={22} />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 p-3 overflow-y-auto space-y-3">
            {messages.map((msg, i) => (
              <div key={i} className="flex flex-col">
                <div
                  className={`p-3 rounded-2xl max-w-[75%] whitespace-pre-wrap break-words ${
                    msg.role === "user"
                      ? "bg-orange-500 ml-auto"
                      : "bg-gray-700"
                  }`}
                >
                  {msg.text}
                </div>

                {/* ⏱ Time */}
                <span
                  className={`text-[10px] mt-1 text-gray-400 ${
                    msg.role === "user" ? "text-right" : "text-left"
                  }`}
                >
                  {formatTime(msg.time)}
                </span>
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="bg-gray-700 px-3 py-2 rounded-2xl w-fit flex gap-1">
                <span className="w-2 h-2 bg-white rounded-full animate-bounce"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-100"></span>
                <span className="w-2 h-2 bg-white rounded-full animate-bounce delay-200"></span>
              </div>
            )}

            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <div className="p-2 border-t border-white/10 bg-[#020617]">
            <div className="flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault(); // prevent new line
                    sendMessage();
                  }
                }}
                className="flex-1 bg-gray-800 text-white rounded-full px-3 py-2 focus:outline-none focus:ring-2 focus:ring-white-500"
                placeholder="Type a message..."
              />
              <button
                onClick={sendMessage}
                className="bg-orange-500 hover:bg-orange-500/90 hover:cursor-pointer transition-all duration-300 px-4 rounded-full cursor-pointer"
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
