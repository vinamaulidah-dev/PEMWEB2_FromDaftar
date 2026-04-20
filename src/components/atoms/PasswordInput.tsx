import React, { forwardRef, useState } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const PasswordInput = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className = "", ...rest }, ref) => {
    const [show, setShow] = useState(false);

    let inputStyle =
      "w-full px-3 py-2 text-sm border rounded-md outline-none";

    if (error) {
      inputStyle += " border-red-500";
    } else {
      inputStyle += " border-gray-400";
    }

    inputStyle += " focus:border-black";

    return (
      <div className="flex flex-col mb-2">
        <label className="text-sm text-gray-700 mb-1">{label}</label>

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            ref={ref}
            {...rest}
            className={`${inputStyle} pr-16 ${className}`}
          />

          <button
            type="button"
            onClick={() => setShow(!show)}
            className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-600"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>

        {error && (
          <span className="text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default PasswordInput;