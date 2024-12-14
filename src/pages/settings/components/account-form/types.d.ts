export interface AccountFormValues {
  full_name: string
  email: string
  phone_number: string
  email: string
  profile_photo?: string
}

export interface AccountFormProps {
  onSubmit: (values: AccountFormValues) => void
  loading: boolean
}
