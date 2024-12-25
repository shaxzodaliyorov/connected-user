/* eslint-disable @typescript-eslint/no-explicit-any */
import { Experience } from "@/types/resume";
import { UseFormReturn } from "react-hook-form";

export type Props = {
  open: boolean;
  close: () => void;
  title: string;
  className?: string;
  loading: boolean;
  onSubmit: (formData: any) => void;
  form: UseFormReturn<Partial<Experience>>;
  buttonText?: string;
  loading: boolean;
  deleting?: boolean;
  onDelete?: () => void;
};

export type FormValues = {
  title: string;
  website: string;
  company: string;
  location: string;
  employment: string;
  join_date: string;
  end_date: string;
  description: string;
  still_working: boolean;
};
