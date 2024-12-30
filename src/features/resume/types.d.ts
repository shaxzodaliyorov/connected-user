/* eslint-disable @typescript-eslint/no-empty-object-type */
import { Resume } from "@/types";

export interface GetAllMyResumeResponse {
  success: boolean;
  data: Resume[];
}
export interface GetAllMyResumeRequest {}

export interface GetResumeResponse {
  success: boolean;
  data: Resume;
}

export interface AddResumeResponse {}

export interface AddResumeResumeRequest {
  position: string;
  photo: string;
  full_name: string;
  phone_number: string;
  email: string;
  date_of_birth: string;
  gender: string;
  current_visa: string;
  languages: Language[];
  country: string;
  city: string;
  nationality: string;
  employee_type: string;
  working_experience: string;
  expected_salary: string;
  social_links?: Partial<SocialLinks>;
  about_me: string;
  education: Education[];
  experience: Experience[];
  skills: string[];
}

export interface Language {
  title: string;
  level: string;
}

export interface SocialLinks {
  instagram?: string;
  kakao_talk?: string;
  portfolio?: string;
  linkedin?: string;
}

export interface Education {
  major: string;
  university: string;
  category: string;
  region: string;
  admission_year: string;
  graduation_year: string;
  description: string;
}

export interface Experience {
  title: string;
  company: string;
  website: string;
  location: string;
  employment_type: string;
  joining_year: string;
  retirement_year: string;
  still_working: boolean;
  description: string;
}

export interface UpdateResumeResponse {}
export interface UpdateResumeResumeRequest {
  body: AddResumeResumeRequest;
  id: string;
}

export interface DeleteResumeResponse {}
export interface DeleteResumeResumeRequest {}
