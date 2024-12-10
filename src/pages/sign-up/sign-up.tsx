import {AuthNavigation} from '@/components/auth-navigation'
import {useUserRegisterMutation} from '@/features/auth'
import {useHandleRequest} from '@/hooks'
import {SubmitHandler, useForm, UseFormReturn} from 'react-hook-form'
import {useTranslation} from 'react-i18next'
import {Link, useNavigate} from 'react-router-dom'
import {FormValues} from './types'
import {useState} from 'react'
import {toast} from '@/components/ui/use-toast'
import {Form as FormUI} from '@/components/ui/form'
import {Button} from '@/components/common'
import {Form} from './_components'

const AGREE = [
  {
    label: 'You are over 15 years old',
    check: false,
    id: 1,
  },
  {
    label: '(Required) Personal Information \n Collection and Usage Agreement',
    check: false,
    id: 2,
  },
  {
    label: '(Required) Agree to Terms of Use',
    check: false,
    id: 3,
  },
]

export const SignUp = () => {
  const form = useForm<FormValues>()
  const navigate = useNavigate()
  const [companyRegister, {isLoading}] = useUserRegisterMutation()
  const [agreeData, setAgreeData] = useState(AGREE)
  const {t} = useTranslation()
  const handleRequest = useHandleRequest()

  const onSubmit: SubmitHandler<FormValues> = async (formData: FormValues) => {
    delete formData.confirm_password
    await handleRequest({
      request: async () => {
        const response = await companyRegister(formData)
        return response
      },
      onSuccess: () => {
        navigate('/login')
        toast({title: t('Register successfully'), variant: 'default'})
      },
    })
  }

  return (
    <section className="w-full pb-10 pt-10 md:pb-[80px] md:pt-[80px] bg-[#fbfbfb] ">
      <div className="max-w-[400px] px-5 md:px-4 xl:px-0 mx-auto">
        <AuthNavigation onClick={() => navigate('/')} title="Join the membership" />
        <p className="text-[#838383] text-base text-center mt-3 font-normal font-['Inter Display'] leading-normal">
          If you are corporate customer, please sign up through corporate services.
          <a
            target="_blank"
            href="https://company.urconnection.co.kr"
            className="text-[#0062ff] link text-base font-semibold font-['Inter Display'] leading-normal"
          >
            Go to corporate service
          </a>
        </p>
        <FormUI {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid gap-y-6 grid-rows-1 pt-[30px] ">
            <Form setAgreeData={setAgreeData} agreeData={agreeData} form={form as UseFormReturn<Partial<FormValues>>} />
            <Button disabled={!agreeData.every(item => item.check)} loading={isLoading} type="submit">
              {t('Sign Up')}
            </Button>
            <div>
              <p className="text-center text-[#838383] text-base font-normal font-['Inter Display']">
                Don’t have an account?{' '}
                <Link to={'/sign-in'} className="text-[#0062ff] font-medium font-['Inter Display'] link">
                  Sign In
                </Link>
              </p>
              <p className="text-center mt-[17px] text-[#838383] text-base font-normal font-['Inter Display']">
                Are you a corporate customer?
                <a
                  target="_blank"
                  className="text-[#0062ff] font-medium link font-['Inter Display']"
                  href="https://company.urconnection.co.kr"
                >
                  Go to corporate service
                </a>
              </p>
            </div>
          </form>
        </FormUI>
      </div>
    </section>
  )
}
