import { Resume } from "@/types";

export type Props = {
  open: boolean;
  close: () => void;
  resume: Resume;
};
