import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { LANGUAGES } from "@/constants";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { TbWorld } from "react-icons/tb";

export const LanguageDropdown = () => {
  const [open, setOpen] = useState(false);

  const { i18n } = useTranslation();

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={setOpen}>
      <DropdownMenuTrigger
        className={`text-[#0b0b0b] text-base flex items-center gap-x-[6px] font-medium font-['Inter Display']`}
      >
        <TbWorld className="w-4 h-4 " />
        {LANGUAGES.find((item) => item.code === i18n.resolvedLanguage)?.label}
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" w-[20px] z-[999]">
        {LANGUAGES.map((item) => (
          <DropdownMenuItem
            onClick={() => i18n.changeLanguage(item.value)}
            key={item.value}
          >
            {item.label}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
