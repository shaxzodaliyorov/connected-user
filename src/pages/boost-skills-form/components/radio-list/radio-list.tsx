import { FC } from "react";
import { RadioListProps } from "./types";
import { cn } from "@/lib/utils";

export const RadioList: FC<RadioListProps> = ({
  options,
  name,
  onChange,
  value,
  className,
}) => (
  <div className={cn("flex gap-x-9 items-center mt-5", className)}>
    {options.map((option) => (
      <label
        key={option.value.toString()}
        className="flex gap-[10px] items-center cursor-pointer"
      >
        <input
          type="radio"
          name={name}
          value={option.value}
          checked={value === option.value}
          onChange={onChange}
          className="w-5 h-5 cursor-pointer"
        />
        <span className="text-base font-normal leading-[20.8px] text-left text-[#0C0C0C]">
          {option.label}
        </span>
      </label>
    ))}
  </div>
);
