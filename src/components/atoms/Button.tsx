import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: "primary" | "secondary"; // <-- Added variant
}

export const Button: React.FC<ButtonProps> = ({
  children,
  isLoading,
  variant = "primary", // Default to primary
  ...props
}) => {
  // Define different styles based on the variant
  const baseStyles =
    "px-6 py-3 rounded-xl font-semibold transition-all shadow-md active:scale-95 flex items-center justify-center";
  const primaryStyles = isLoading
    ? "bg-blue-400 text-white cursor-not-allowed"
    : "bg-blue-600 text-white hover:bg-blue-700";
  const secondaryStyles =
    "bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200 shadow-sm";

  return (
    <button
      {...props}
      disabled={isLoading || props.disabled}
      className={`${baseStyles} ${variant === "primary" ? primaryStyles : secondaryStyles}`}
    >
      {isLoading ? "Fetching..." : children}
    </button>
  );
};
