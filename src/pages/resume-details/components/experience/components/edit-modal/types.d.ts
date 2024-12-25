import { Experience, Resume } from "@/types/resume";

export type Props = {
  open: boolean;
  close: () => void;
  experience: Experience;
  resume: Resume;
};
