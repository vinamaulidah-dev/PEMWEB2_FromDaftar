import React from "react";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "outline";
  loading?: boolean;
};

const Button: React.FC<Props> = ({
  children,
  variant = "primary",
  loading = false,
  className = "",
  ...rest
}) => {

  let style = "px-5 py-2 text-sm rounded-md transition";

  if (variant === "primary") {
    style += " bg-black text-white hover:opacity-90";
  } else {
    style += " border border-black text-black hover:bg-gray-100";
  }

  return (
    <button
      {...rest}
      disabled={loading}
      className={`${style} ${className} ${loading ? "opacity-60 cursor-not-allowed" : ""}`}
    >
      {loading ? "Loading..." : children}
    </button>
  );
};

export default Button;