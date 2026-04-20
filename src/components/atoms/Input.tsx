import React, { forwardRef } from "react";

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

const Input = forwardRef<HTMLInputElement, Props>(
  ({ label, error, className = "", ...rest }, ref) => {
    let inputStyle = "w-full px-3 py-2 text-sm border rounded-md outline-none";

    if (error) {
      inputStyle += " border-red-500";
    } else {
      inputStyle += " border-gray-400";
    }

    inputStyle += " focus:border-black";

    return (
      <div className="flex flex-col mb-2">
        <label className="text-sm text-gray-700 mb-1">{label}</label>

        <input
          ref={ref}
          {...rest}
          className={`${inputStyle} ${className}`}
        />

        {error && (
          <span className="text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;