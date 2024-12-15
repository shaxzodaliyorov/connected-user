import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {FormValues, UpdatePasswordFormValues} from './types'
import {useHandleRequest, useValidationOptions} from '@/hooks'
import {Button, Input} from '@/components/common'
import {checkEmail} from '@/utils'
import {useState} from 'react'
import {useSendOtpUpdateEmailMutation} from '@/features/auth'
import {toast} from '@/components/ui/use-toast'
import {useUpdateUserEmailMutation, useUpdateUserPasswordMutation} from '@/features/user'
import {useTranslation} from 'react-i18next'

export const SecurityForm = () => {
  const form = useForm<FormValues>()
  const formUpdatePassword = useForm<UpdatePasswordFormValues>()
  const validationOptions = useValidationOptions()
  const [changeEmail, setChangeEmail] = useState<'1' | '2'>('1')
  const handleRequest = useHandleRequest()
  const [sendOtpUser, {isLoading: isLoadingOtp}] = useSendOtpUpdateEmailMutation()
  const [updateEmail, {isLoading: isLoadingUpdate}] = useUpdateUserEmailMutation()
  const [userUpdatePassword, {isLoading: isLoadingUpdatePassword}] = useUpdateUserPasswordMutation()
  const {t} = useTranslation()

  const onSubmit: SubmitHandler<FormValues> = async formData => {
    if (changeEmail === '1') {
      await handleRequest({
        request: async () => {
          const response = await sendOtpUser({email: formData.email as string})
          return response
        },
        onSuccess: () => {
          toast({title: t('Please check your email'), variant: 'default'})
          setChangeEmail('2')
        },
      })
    }

    if (changeEmail === '2') {
      await handleRequest({
        request: async () => {
          const response = await updateEmail({email: formData.email as string, otp: Number(formData.otp)})
          return response
        },
        onSuccess: () => {
          toast({title: t('Update successfully'), variant: 'default'})
        },
      })
    }
  }

  const updatePassword: SubmitHandler<UpdatePasswordFormValues> = async formData => {
    delete formData.confirm_password

    await handleRequest({
      request: async () => {
        const response = await userUpdatePassword(formData)
        return response
      },
      onSuccess: () => {
        toast({title: t('Update successfully'), variant: 'default'})
        formUpdatePassword.setValue('confirm_password', '')
        formUpdatePassword.setValue('new_password', '')
        formUpdatePassword.setValue('current_password', '')
      },
    })
  }

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex flex-col">
        <div className="w-full">
          <form onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="email"
              control={form.control}
              rules={validationOptions(true, 3, 100, {
                validate: (email: string) => (checkEmail(email) ? t('Please enter correct email') : undefined),
              })}
              render={({field}) => (
                <Input
                  onChange={field.onChange}
                  value={field.value}
                  placeholder="Enter your new email"
                  className="w-1/2"
                  label="Update Email"
                  errorMessage={form.formState.errors.email?.message}
                />
              )}
            />
            {changeEmail === '2' && (
              <div className="mt-5">
                <Controller
                  name="otp"
                  control={form.control}
                  rules={validationOptions(true, 5, 5)}
                  render={({field}) => (
                    <Input
                      type="text"
                      label={t('Code')}
                      className="w-full"
                      onChange={field.onChange}
                      placeholder="12345"
                      value={field.value}
                      errorMessage={form.formState.errors.otp?.message}
                    />
                  )}
                />
              </div>
            )}

            <div className="pt-4">
              <Button loading={isLoadingOtp || isLoadingUpdate} type="submit" className="px-[23px] py-[13px]">
                Update Email
              </Button>
            </div>
          </form>
        </div>
        <div className="pt-10 pb-[30px]">
          <div className="w-full  h-px bg-neutral-100" />
        </div>
        <div className="w-full">
          <form onSubmit={formUpdatePassword.handleSubmit(updatePassword)}>
            <Controller
              name="current_password"
              control={formUpdatePassword.control}
              rules={validationOptions(true, 8, 100)}
              render={() => (
                <Input
                  type="password"
                  errorMessage={formUpdatePassword.formState.errors.current_password?.message}
                  placeholder="Enter your old password"
                  className="w-[49%]"
                  label="Old Password"
                />
              )}
            />
            <div className="flex justify-between gap-6 pt-4">
              <Controller
                name="new_password"
                control={formUpdatePassword.control}
                rules={validationOptions(true, 8, 100)}
                render={() => (
                  <Input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-1/2"
                    label="New Password"
                    errorMessage={formUpdatePassword.formState.errors.new_password?.message}
                  />
                )}
              />
              <Controller
                name="confirm_password"
                control={formUpdatePassword.control}
                rules={validationOptions(true, 8, 100, {
                  validate: (password: string) =>
                    password === formUpdatePassword.getValues('new_password') || t('Password does not match'),
                })}
                render={() => (
                  <Input
                    type="password"
                    placeholder="Enter your new password"
                    className="w-1/2"
                    label="Confirm Password"
                    errorMessage={formUpdatePassword.formState.errors.confirm_password?.message}
                  />
                )}
              />
            </div>
            <div className="pt-4">
              <Button loading={isLoadingUpdatePassword} type="submit" className="px-[23px] py-[13px]">
                Change Password
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
