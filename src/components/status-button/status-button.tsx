import React from "react";
import { Button } from "@/components/ui/button";
import { Applied, Declined, Hired, Interview } from "@/icons";

export const StatusButton: React.FC<Props> = ({ label, variant }) => {
  const getButtonStyle = () => {
    switch (variant) {
      case "applied":
        return "bg-green-100 text-green-700 hover:bg-green-200";
      case "declined":
        return "bg-red-100 text-red-700 hover:bg-red-200";
      case "interview":
        return "bg-yellow-100 text-yellow-700 hover:bg-yellow-200";
      case "hired":
        return "bg-blue-100 text-blue-700 hover:bg-blue-200";
      case "offer":
        return "bg-indigo-100 text-indigo-700 hover:bg-indigo-200";
      default:
        return "";
    }
  };

  const getIcon = () => {
    switch (variant) {
      case "applied":
        return <Applied className="h-5 w-5 mr-2 text-green-700" />;
      case "declined":
        return <Declined className="h-5 w-5 mr-2 text-red-700" />;
      case "interview":
        return <Interview className="h-5 w-5 mr-2 text-yellow-700" />;
      case "hired":
        return <Hired className="h-5 w-5 mr-2 text-blue-700" />;
      case "offer":
        return <Hired className="h-5 w-5 mr-2 text-indigo-700" />;
      default:
        return "";
    }
  };
  return (
    <Button
      className={`w-[130px] flex items-center ${getButtonStyle()} shadow-sm`}
    >
      {getIcon()}
      <span className="text-base capitalize font-medium leading-6 text-left text-black">
        {label}
      </span>
    </Button>
  );
};
