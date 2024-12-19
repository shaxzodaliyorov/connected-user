import {Form as FormUI} from '@/components/ui/form'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {FormValues, Props} from './types'
import {Button, Input} from '@/components'
import {useHandleRequest, useManageQuery, useValidationOptions} from '@/hooks'
import {InputOTP, InputOTPGroup, InputOTPSlot} from '@/components/ui/input-otp'
import {
  useUserForgotPasswordMutation,
  useUserForgotPasswordSendOtpMutation,
  useUserForgotPasswordVerifyOtpMutation,
} from '@/features/auth'
import {useTranslation} from 'react-i18next'
import {toast} from '@/components/ui/use-toast'
import {checkEmail} from '@/utils'
import {useNavigate} from 'react-router-dom'

export const Form = ({setSetup, setup}: Props) => {
  const form = useForm<FormValues>()
  const validationOptions = useValidationOptions()
  const [userForgotPasswordSendOtp, {isLoading}] = useUserForgotPasswordSendOtpMutation()
  const [userForgotPasswordVerifyOtp, {isLoading: otpLoading}] = useUserForgotPasswordVerifyOtpMutation()
  const [userForgotPassword, {isLoading: passwordLoading}] = useUserForgotPasswordMutation()
  const handleRequest = useHandleRequest()
  const {t} = useTranslation()
  const navigate = useNavigate()
  const {addQuery} = useManageQuery()

  const onSubmit: SubmitHandler<FormValues> = async formData => {
    if (setup === 'send-otp') {
      await handleRequest({
        request: async () => {
          const response = await userForgotPasswordSendOtp(formData)
          return response
        },
        onSuccess: () => {
          toast({
            title: 'Check your email',
          })
          setSetup('verify-otp')
          addQuery({
            email: formData.email as string,
          })
        },
      })
    }

    if (setup === 'verify-otp') {
      await handleRequest({
        request: async () => {
          const response = await userForgotPasswordVerifyOtp({
            email: formData.email as string,
            otp: Number(formData.otp),
          })
          return response
        },
        onSuccess: () => {
          setSetup('set-password')
        },
        onError: () => {
          toast({
            title: t('Invalid OTP'),
          })
        },
      })
    }

    if (setup === 'set-password') {
      await handleRequest({
        request: async () => {
          const response = await userForgotPassword({
            email: formData.email as string,
            new_password: formData.new_password as string,
          })
          return response
        },
        onSuccess: () => {
          toast({
            title: t('Password changed successfully'),
          })
          navigate('/sign-in')
        },
      })
    }
  }

  return (
    <FormUI {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto w-full pt-[30px] grid grid-cols-1">
        {setup === 'send-otp' && (
          <Controller
            name="email"
            control={form.control}
            rules={validationOptions(true, 3, 100, {
              validate: (email: string) => (checkEmail(email) ? t('Please enter correct email') : undefined),
            })}
            render={({field}) => (
              <Input
                type="text"
                name="email"
                onChange={field.onChange}
                value={field.value}
                label="Email address"
                placeholder="Enter your email"
                errorMessage={form.formState.errors.email?.message}
              />
            )}
          />
        )}
        {setup === 'verify-otp' && (
          <Controller
            name="otp"
            control={form.control}
            rules={validationOptions(true, 5, 100)}
            render={({field}) => (
              <InputOTP maxLength={5} {...field}>
                <InputOTPGroup className="gap-x-[10px] m-auto">
                  <InputOTPSlot
                    className="w-[70px] h-[80px] text-2xl rounded-[8px] bg-white border-[#C5C5C5] "
                    onChange={field.onChange}
                    index={0}
                  />
                  <InputOTPSlot
                    className="w-[70px] h-[80px] text-2xl rounded-[8px] bg-white border-[#C5C5C5] "
                    onChange={field.onChange}
                    index={1}
                  />
                  <InputOTPSlot
                    className="w-[70px] h-[80px] text-2xl rounded-[8px] bg-white border-[#C5C5C5] "
                    onChange={field.onChange}
                    index={2}
                  />
                  <InputOTPSlot
                    className="w-[70px] h-[80px] text-2xl rounded-[8px] bg-white border-[#C5C5C5] "
                    onChange={field.onChange}
                    index={3}
                  />
                  <InputOTPSlot
                    className="w-[70px] h-[80px] text-2xl rounded-[8px] bg-white border-[#C5C5C5] "
                    onChange={field.onChange}
                    index={4}
                  />
                </InputOTPGroup>
              </InputOTP>
            )}
          />
        )}

        {setup === 'set-password' && (
          <div className="flex flex-col gap-y-[30px]">
            <Controller
              name="new_password"
              control={form.control}
              rules={validationOptions(true, 8, 100)}
              render={({field}) => (
                <Input
                  type="password"
                  onChange={field.onChange}
                  value={field.value}
                  label={t('Create new password')}
                  placeholder={t('Enter your password')}
                  errorMessage={form.formState.errors.new_password?.message}
                />
              )}
            />
            <Controller
              name="confirm_password"
              control={form.control}
              rules={validationOptions(true, 8, 100, {
                validate: (confirm_password: string) =>
                  confirm_password === form.getValues('new_password') ? undefined : t('Password does not match'),
              })}
              render={({field}) => (
                <Input
                  type="password"
                  onChange={field.onChange}
                  value={field.value}
                  label={t('Confirm password')}
                  placeholder="Confirm your password"
                  errorMessage={form.formState.errors.confirm_password?.message}
                />
              )}
            />
          </div>
        )}

        <div className="flex gap-x-3 w-full">
          <Button className="mt-[30px] w-full" loading={isLoading || otpLoading || passwordLoading} type="submit">
            {setup === 'send-otp'
              ? t('Reset Password')
              : setup === 'verify-otp'
                ? t('Verify Code')
                : t('Update Password')}
          </Button>
        </div>
      </form>
    </FormUI>
  )
}
