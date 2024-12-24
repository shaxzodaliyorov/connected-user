export interface GetCompanyResponse {
  success: true;
  data: CompanyData;
}

export interface CompanyData {
  images: string[];
  _id: string;
  company_name: string;
  phone_number: string;
  email: string;
  tech_stack: string[];
  role: string;
  status: string;
  created_at: string;
  updated_at: string;
  date_founded: string;
  description: string;
  employee: string;
  industry: string;
  location: string;
  website: string;
  logo: string;
  social_links: {
    linkedin?: string;
    twitter?: string;
    facebook?: string;
  };
}
