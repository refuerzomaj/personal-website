import React, { useId, useState } from "react";

const FloatingField = ({
  label,
  type = "text",
  name,
  as = "input",
  rows = 4,
}) => {
  const id = useId();
  const [value, setValue] = useState("");

  const hasValue = value.length > 0;

  return (
    <div className="relative w-full">
      {as === "textarea" ? (
        <textarea
          id={id}
          name={name}
          rows={rows}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" "
          className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          required
        />
      ) : (
        <input
          id={id}
          type={type}
          name={name}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder=" "
          className="peer w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      )}

      <label
        htmlFor={id}
        className={`
          absolute left-3 transition-all duration-200 bg-white px-1 cursor-text

          ${
            hasValue
              ? "top-0 text-xs text-blue-500 -translate-y-1/2"
              : "top-1/2 text-sm text-gray-400 -translate-y-1/2"
          }

          peer-focus:top-0
          peer-focus:text-xs
          peer-focus:text-blue-500
          peer-focus:-translate-y-1/2
        `}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingField;
