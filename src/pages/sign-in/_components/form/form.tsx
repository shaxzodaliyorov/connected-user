import {Button, Input} from '@/components/common'
import {Checkbox} from '@/components/ui/checkbox'
import {useHandleRequest, useValidationOptions} from '@/hooks'
import {Controller, SubmitHandler, useForm} from 'react-hook-form'
import {Link} from 'react-router-dom'
import {Form as FormUI} from '@/components/ui/form'
import {FormValues} from './types'
import {checkEmail} from '@/utils'
import {useUserLoginMutation} from '@/features/auth'
import {useStorage} from '@/utils/storage'
import {toast} from '@/components/ui/use-toast'
import {useTranslation} from 'react-i18next'
import {RiKakaoTalkFill} from 'react-icons/ri'
import {FaApple} from 'react-icons/fa'
import {FaFacebook} from 'react-icons/fa'
import {FaGoogle} from 'react-icons/fa'

export const Form = () => {
  const form = useForm<FormValues>()
  const validationOptions = useValidationOptions()
  const [userLogin, {isLoading}] = useUserLoginMutation()
  const handleRequest = useHandleRequest()
  const {t} = useTranslation()

  const onSubmit: SubmitHandler<FormValues> = async formData => {
    await handleRequest({
      request: async () => {
        const response = await userLogin(formData)
        return response
      },
      onSuccess: data => {
        if (data?.data.access_token) {
          useStorage.setCredentials({accessToken: data?.data.access_token, refreshToken: data?.data.refresh_token})
          toast({
            description: t('Login successfully'),
          })
          window.location.href = '/'
        }
      },
    })
  }

  return (
    <FormUI {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="m-auto w-full pt-[30px] grid grid-cols-1">
        <Controller
          name="email"
          control={form.control}
          rules={validationOptions(true, 3, 100, {
            validate: (email: string) => (checkEmail(email) ? t('Please enter correct email') : undefined),
          })}
          render={({field}) => (
            <Input
              type="text"
              onChange={field.onChange}
              value={field.value}
              label={t('Email address')}
              placeholder={t('Enter your email')}
              errorMessage={form.formState.errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={form.control}
          rules={validationOptions(true, 6)}
          render={({field}) => (
            <Input
              type="password"
              onChange={field.onChange}
              value={field.value}
              label="Password"
              className="mt-6"
              placeholder={t('Enter your password')}
              errorMessage={form.formState.errors.password?.message}
            />
          )}
        />
        <div className="flex mt-[14px] justify-between items-center">
          <label className="flex select-none cursor-pointer items-center gap-x-[6px]">
            <Checkbox
              id="terms"
              className="w-5 h-5 data-[state=checked]:border-[#0062ff] data-[state=checked]:bg-[#0062ff]"
            />
            <span className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] ">{t('Remember me')}</span>
          </label>
          <Link
            to="/forgot-password"
            className="text-[#0062ff] text-base font-medium font-['Inter Display'] link leading-relaxed"
          >
            {t('Forgot your password?')}
          </Link>
        </div>
        <Button loading={isLoading} className="mt-[37px]" type="submit">
          {t('Sign in')}
        </Button>
        <div className="flex mt-[60px] mb-[33px] justify-between items-center">
          <div className="w-[30%] h-[1px] bg-[#838383]" />
          <p className="text-[#838383] text-base font-normal font-['Inter Display']">{t('or access quickly')}</p>
          <div className="w-[30%] h-[1px] bg-[#838383]" />
        </div>
        <div className="grid gap-x-2.5 grid-cols-4">
          <Button variant="secondary">
            <RiKakaoTalkFill />
          </Button>
          <Button variant="secondary">
            <FaApple />
          </Button>
          <Button variant="secondary">
            <FaFacebook />
          </Button>
          <Button variant="secondary">
            <FaGoogle />
          </Button>
        </div>
        {/* <div className="flex mb-[60px] justify-center w-full gap-x-[22px]">
          <motion.button
            className="w-[60px] bg-[#bfbfbf33] rounded-lg flex justify-center items-center h-[60px]"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            type="button"
          >
            <Icons name="google" className="w-[42.5px] h-[42.5px]" />
          </motion.button>

          <motion.button
            className="w-[60px] bg-[#1877F2] rounded-lg flex justify-center items-center h-[60px]"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            type="button"
          >
            <Icons name="facebook" className="w-[30px] h-[30px]" />
          </motion.button>

          <motion.button
            className="w-[60px] bg-[#FFE812] rounded-lg flex justify-center items-center h-[60px]"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
            type="button"
          >
            <Icons name="talk" className="w-[48.75px] h-[44.99px]" />
          </motion.button>

          <motion.button
            type="button"
            className="w-[60px] bg-[#000] rounded-lg flex justify-center items-center h-[60px]"
            whileHover={{scale: 1.1}}
            whileTap={{scale: 0.95}}
            transition={{duration: 0.3}}
          >
            <Icons className="w-[33.1px] h-[40px]" name="apple" />
          </motion.button>
        </div> */}
      </form>
    </FormUI>
  )
}
