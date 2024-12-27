export interface AccountFormValues {
  full_name: string;
  email: string;
  phone_number: string;
  email: string;
  profile_photo?: string;
  current_visa?: string;
  visa_issue_date?: string;
  visa_final_entry_date?: string;
}

export interface AccountFormProps {
  onSubmit: (values: AccountFormValues) => void;
  loading: boolean;
}
