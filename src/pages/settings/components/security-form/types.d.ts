export type FormValues = {
  email: string
  otp: string
}

export type UpdatePasswordFormValues = {
  current_password: string
  confirm_password?: string
  new_password: string
}
