/* eslint-disable @typescript-eslint/no-explicit-any */
import { Education } from "@/types/resume";
import { UseFormReturn } from "react-hook-form";

export type Props = {
  open: boolean;
  close: () => void;
  title: string;
  className?: string;
  loading: boolean;
  onSubmit: (formData: any) => void;
  form: UseFormReturn<Partial<Education>>;
  buttonText?: string;
  onDelete?: () => void;
  deleting?: boolean;
};

export type FormValues = {
  major: string;
  university: string;
  category: string;
  region: string;
  admission_year: string;
  graduation_year: string;
  description: string;
};
