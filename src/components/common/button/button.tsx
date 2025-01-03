import { cn } from "@/lib/utils";
import React from "react";
import { ButtonProps } from "./types";
import { Spinner } from "../spinner";

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className = "",
  type = "button",
  disabled = false,
  variant = "primary",
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth,
  size = "md",
  spinnerColor,
}) => {
  let buttonClasses = "";
  let paddingClasses = "";

  switch (variant) {
    case "primary":
      buttonClasses = "bg-[#0062FF] hover:bg-blue-600 text-white";
      break;
    case "secondary":
      buttonClasses = "bg-neutral-100 hover:bg-neutral-200 text-[#848484]";
      break;
    case "outline":
      buttonClasses =
        "border border-[#0b0b0b] text-[#0b0b0b] hover:bg-[#0b0b0b] hover:text-white";
      break;
    default:
      buttonClasses = "bg-blue-500 hover:bg-blue-600 text-white";
      break;
  }

  switch (size) {
    case "sm":
      paddingClasses = "px-5 py-[8px] text-sm";
      break;
    case "md":
      paddingClasses = "px-5 py-[15px] text-base";
      break;
    case "lg":
      paddingClasses = "px-6 py-[17px] text-lg";
      break;
    default:
      paddingClasses = "px-4 py-[15px] text-base";
      break;
  }

  return (
    <button
      type={type}
      onClick={onClick}
      className={cn(
        "rounded-lg font-semibold focus:outline-none  disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2",
        fullWidth && "w-full",
        paddingClasses,
        buttonClasses,
        className
      )}
      disabled={disabled || loading}
    >
      {loading && (
        <Spinner
          color={spinnerColor || variant === "outline" ? "#000" : "#fff"}
          size={12}
          thickness={1}
        />
      )}
      {!loading && leftIcon && <span className=" mr-2">{leftIcon}</span>}
      <span>{children}</span>
      {!loading && rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};
