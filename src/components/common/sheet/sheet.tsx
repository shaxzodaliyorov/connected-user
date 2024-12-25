import {
  Sheet as SheetUI,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Props } from "./types";
import { X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Sheet = ({
  children,
  onClose,
  open,
  subtitle,
  title,
  side,
  className,
}: Props) => (
  <SheetUI open={open} onOpenChange={onClose}>
    <SheetContent side={side} className={cn("overflow-y-auto", className)}>
      <SheetHeader>
        <button onClick={onClose}>
          <X className="h-4 w-4 absolute top-5 right-5" />
        </button>
        <SheetTitle className="text-[#0C0C0C] font-medium capitalize">
          {title}
        </SheetTitle>
        <SheetDescription>{subtitle}</SheetDescription>
        <div>{children}</div>
      </SheetHeader>
    </SheetContent>
  </SheetUI>
);
