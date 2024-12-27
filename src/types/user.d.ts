import { ROLE } from "@/enum/role";

export interface User {
  _id: string;
  full_name: string;
  phone_number: string;
  email: string;
  role: ROLE;
  status: string;
  created_at: string;
  updated_at: string;
  profile: string;
  profile_photo: string;
  current_visa?: string;
  visa_issue_date?: string;
  visa_final_entry_date?: string;
  visa_help?: {
    educational_background: number;
    kiip: number;
    topik: number;
    violation: number;
    visa_expire_date: string;
    visa_status: string;
  };
}
