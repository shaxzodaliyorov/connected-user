import React from "react";
import { Props } from "./types";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

export const ProfileProgress: React.FC<Props> = ({ progress, className }) => (
  <div className="flex !w-full flex-col pt-4">
    <span className="text-base font-medium leading-[19.36px] text-left">
      {Math.floor(progress)}%
    </span>
    <div className="relative w-full h-2 mt-2">
      <Progress value={progress} className={cn("w-full ", className)} />
    </div>
  </div>
);
