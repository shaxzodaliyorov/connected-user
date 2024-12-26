import { FC } from "react";
import { RadioProps } from "./types";

export const RadioCard: FC<RadioProps> = ({
  options,
  name,
  value,
  onChange,
}) => {
  return (
    <div className="grid gap-x-5 grid-cols-3">
      {options.map((item) => {
        const id = `${name}-${item.value}`;
        return (
          <label
            key={item.value}
            htmlFor={id}
            className={`px-4 py-3 flex items-center justify-between 
                        bg-white cursor-pointer rounded-lg 
                        border 
                        ${
                          item.value === value
                            ? "border-[#0b0b0b]"
                            : "border-[#c5c5c5] "
                        }`}
          >
            <p className="text-gray-900 text-lg font-semibold font-['Inter Display']">
              {item.label}
            </p>
            <input
              id={id}
              type="radio"
              name={name}
              value={item.value}
              checked={item.value === value}
              onChange={() => onChange(item.value)}
              className="w-4 h-4"
            />
          </label>
        );
      })}
    </div>
  );
};
