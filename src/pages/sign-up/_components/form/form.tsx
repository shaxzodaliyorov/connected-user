import {Button, Input} from '@/components/common'
import {toast} from '@/components/ui/use-toast'
import {useSendOtpUserMutation, useVerifyOtpUserMutation} from '@/features/auth'
import {useHandleRequest, useValidationOptions} from '@/hooks'
import {checkEmail} from '@/utils'
import {useState} from 'react'
import {Controller} from 'react-hook-form'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'
import {Props} from './types'
import {Checkbox} from '@/components/ui/checkbox'
import {Link} from 'react-router-dom'

export const Form = ({form, agreeData, setAgreeData}: Props) => {
  const validationOptions = useValidationOptions()
  const [enterCode, setEnterCode] = useState(false)
  const handleRequest = useHandleRequest()
  const [sendOtpUser, {isLoading: sendOtpUserLoading}] = useSendOtpUserMutation()
  const [verifyOtpUser, {isLoading: verifyOtpUserLoading}] = useVerifyOtpUserMutation()
  const navigate = useNavigate()
  const {t} = useTranslation()

  const sendOtp = async () => {
    setEnterCode(true)
    await handleRequest({
      request: async () => {
        const response = await sendOtpUser({email: form.watch('email') as string})
        return response
      },
      onSuccess: () => {
        toast({title: t('Please check your email'), variant: 'default'})
      },
    })
  }

  const verifyOtp = async () => {
    await handleRequest({
      request: async () => {
        const response = await verifyOtpUser({
          email: form.watch('email') as string,
          otp: Number(form.watch('code')),
        })
        return response
      },
      onSuccess: () => {
        toast({title: t('Successfully verified'), variant: 'default'})
        navigate('/sign-up?step=registration&verify=true', {replace: true})
      },
      onError: () => {
        toast({title: 'Invalid code', variant: 'destructive'})
      },
    })
  }

  const allCheck = (check: boolean) => {
    if (check) {
      setAgreeData(agreeData.map(item => ({label: item.label, id: item.id, check: true})))
    } else {
      setAgreeData(agreeData.map(item => ({label: item.label, id: item.id, check: false})))
    }
  }

  const handleCheckItem = (id: number) => {
    const currentData = [...agreeData]
    currentData.forEach(item => {
      if (item.id === id) {
        item.check = !item.check
      }
    })
    setAgreeData(currentData)
  }

  return (
    <>
      <Controller
        name="email"
        control={form.control}
        rules={validationOptions(true, 3, 100, {
          validate: (email: string) => (checkEmail(email) ? 'Please enter correct email' : undefined),
        })}
        render={({field}) => (
          <Input
            rightIcon={
              <Button size="sm" loading={sendOtpUserLoading} type="button" onClick={sendOtp}>
                {t('Authenticate')}
              </Button>
            }
            errorMessage={form.formState.errors.email?.message}
            label="Email address"
            type="text"
            placeholder="Enter your email"
            onChange={field.onChange}
            value={field.value}
          />
        )}
      />
      {enterCode && (
        <Controller
          name="code"
          control={form.control}
          rules={validationOptions(true)}
          render={({field}) => (
            <Input
              label="Code"
              rightIcon={
                <Button
                  size="sm"
                  className="px-[42px]"
                  loading={verifyOtpUserLoading}
                  type="button"
                  onClick={verifyOtp}
                >
                  {t('Verify')}
                </Button>
              }
              errorMessage={form.formState.errors.code?.message}
              type="text"
              placeholder={t('Please enter verification code')}
              onChange={field.onChange}
              value={field.value}
            />
          )}
        />
      )}
      <Controller
        name="full_name"
        control={form.control}
        rules={validationOptions(true, 3, 100)}
        render={({field}) => (
          <Input
            errorMessage={form.formState.errors.full_name?.message}
            label="Name"
            type="text"
            onChange={field.onChange}
            placeholder={t('Enter your name')}
            value={field.value}
          />
        )}
      />
      <Controller
        name="phone_number"
        control={form.control}
        rules={validationOptions(true, 3, 100)}
        render={({field}) => (
          <Input
            errorMessage={form.formState.errors.phone_number?.message}
            label={t('Phone number')}
            type="text"
            onChange={field.onChange}
            placeholder={t('Enter your phone number')}
            value={field.value}
          />
        )}
      />

      <Controller
        name="password"
        control={form.control}
        rules={validationOptions(true, 3, 100)}
        render={({field}) => (
          <Input
            label={t('Password')}
            type="password"
            onChange={field.onChange}
            value={field.value}
            errorMessage={form.formState.errors.password?.message}
            placeholder={t('Enter your password')}
          />
        )}
      />
      <Controller
        name="confirm_password"
        control={form.control}
        rules={validationOptions(true, 3, 100, {
          validate: (value: string) => (value === form.watch('password') ? undefined : "Passwords don't match"),
        })}
        render={({field}) => (
          <Input
            label={t('Confirm password')}
            type="password"
            onChange={field.onChange}
            placeholder={t('Enter your password')}
            errorMessage={form.formState.errors.confirm_password?.message}
            value={field.value}
          />
        )}
      />
      <div className="flex flex-col gap-y-[14px]">
        <label className="flex items-center gap-x-[14px]">
          <Checkbox
            checked={agreeData.every(item => item.check)}
            onCheckedChange={allCheck}
            className="w-5 h-5 shadow-none border-[#D6DDEB] data-[state=checked]:border-[#0062ff] data-[state=checked]:bg-[#0062ff]"
          />
          <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-tight">
            {t('Agree to all')}
          </p>
        </label>
        {agreeData.map((item, index) => (
          <div key={index} className="flex items-center justify-between">
            <label className="flex items-start gap-x-[14px] shadow-none border-[#D6DDEB] data-[state=checked]:border-[#2BAC47] data-[state=checked]:bg-[#2BAC47]">
              <Checkbox
                onCheckedChange={() => handleCheckItem(item.id)}
                checked={item.check}
                className="w-5 h-5 shadow-none border-[#D6DDEB] data-[state=checked]:border-[#0062ff] data-[state=checked]:bg-[#0062ff]"
              />
              <p className=" text-[#0b0b0b] text-base w-[90%] font-normal font-['Inter Display'] leading-tight">
                {t(item.label)}
              </p>
            </label>
            <Link className="text-[#0062ff] hover:underline text-base font-medium font-['Inter Display']" to="/">
              {t('Details')}
            </Link>
          </div>
        ))}
      </div>
    </>
  )
}
