import React, { forwardRef } from "react";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  label: string;
  error?: string;
};

const TextArea = forwardRef<HTMLTextAreaElement, Props>(
  ({ label, error, className = "", ...rest }, ref) => {
    let textareaStyle =
      "w-full px-3 py-2 text-sm border rounded-md outline-none resize-none";

    if (error) {
      textareaStyle += " border-red-500";
    } else {
      textareaStyle += " border-gray-400";
    }

    textareaStyle += " focus:border-black";

    return (
      <div className="flex flex-col mb-2">
        <label className="text-sm text-gray-700 mb-1">{label}</label>

        <textarea
          ref={ref}
          {...rest}
          rows={3}
          className={`${textareaStyle} ${className}`}
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

export default TextArea;