import React, { forwardRef } from "react";

type Option = {
  value: string;
  label: string;
};

type Props = React.SelectHTMLAttributes<HTMLSelectElement> & {
  label: string;
  options: Option[];
  error?: string;
};

const Select = forwardRef<HTMLSelectElement, Props>(
  ({ label, options, error, className = "", ...rest }, ref) => {
    let selectStyle =
      "w-full px-3 py-2 text-sm border rounded-md outline-none bg-white";

    if (error) {
      selectStyle += " border-red-500";
    } else {
      selectStyle += " border-gray-400";
    }

    selectStyle += " focus:border-black";

    return (
      <div className="flex flex-col mb-2">
        <label className="text-sm text-gray-700 mb-1">{label}</label>

        <select
          ref={ref}
          {...rest}
          className={`${selectStyle} ${className}`}
        >
          <option value="">-- pilih kategori --</option>

          {options.map((opt, i) => (
            <option key={i} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>

        {error && (
          <span className="text-xs text-red-500 mt-1">
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Select;