export type FormValues = {
  email?: string
  otp?: string
  confirm_password?: string
  new_password?: string
}

export type Props = {
  setup: 'send-otp' | 'verify-otp' | 'set-password'
  setSetup: (setup: 'send-otp' | 'verify-otp' | 'set-password') => void
}
