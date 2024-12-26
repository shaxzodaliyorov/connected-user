import { cn } from "@/lib/utils";
import { FC, useState } from "react";
import { GridOptionsProps } from "./types";

export const GridOptions: FC<GridOptionsProps> = ({
  options,
  onChange,
  value,
}) => {
  const [active, setActive] = useState<number | undefined>(undefined);
  return (
    <div
      className={cn(
        "grid grid-cols-3 gap-x-[14px] gap-y-[16px] justify-between w-full"
      )}
    >
      {options.map((opt, index) => (
        <div
          key={index}
          onClick={() => {
            onChange(opt.value);
            setActive(index);
          }}
          className={` ${
            value === opt.value && active === index
              ? "bg-[#0062ff]"
              : "bg-white"
          } border flex cursor-pointer items-center justify-between py-[11px] px-[16px] rounded-lg border-solid w-full`}
        >
          <p
            className={cn(
              "text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-snug",
              value === opt.value && active === index && "text-white"
            )}
          >
            {opt.label}
          </p>
          <p
            className={cn(
              "text-right text-[#0062ff] text-base font-medium font-['Inter Display'] leading-normal",
              value === opt.value && active === index && "text-white"
            )}
          >
            {opt.value}p
          </p>
        </div>
      ))}
    </div>
  );
};
