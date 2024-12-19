import {AuthNavigation} from '@/components/auth-navigation'
import {useNavigate} from 'react-router-dom'
import {Form} from './components'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useManageQuery} from '@/hooks'

export const ForgotPassword = () => {
  const [setup, setSetup] = useState<'send-otp' | 'verify-otp' | 'set-password'>('send-otp')
  const navigate = useNavigate()
  const {t} = useTranslation()
  const {getQuery} = useManageQuery()

  return (
    <section className="w-full pb-10 pt-10 md:pb-[0px] md:pt-[0px] min-h-screen flex flex-col justify-center items-center">
      <div className="max-w-[400px] px-5 md:px-4 xl:px-0 mx-auto">
        <AuthNavigation
          onClick={() => navigate('/')}
          title={
            <h1 className="text-2xl font-medium leading-[26.4px] text-center text-[#0C0C0C]">
              {setup === 'send-otp'
                ? t('Forgot password')
                : setup === 'verify-otp'
                  ? t('Forgot password')
                  : t('Set a new password')}
              ?
            </h1>
          }
        />
        <p className="text-base font-normal leading-6 text-center mt-[13px]">
          {setup === 'send-otp'
            ? t('Enter your email below to recover your password.')
            : setup === 'verify-otp'
              ? t(
                  `We sent a reset link to ${getQuery('email')?.slice(0, 4)}...${getQuery('email')?.slice(-10)}. Please enter 5 digit code that mentioned in the email`,
                )
              : t('Create a new password. Ensure it differs from previous ones for security.')}
        </p>
        <div>
          <Form setup={setup} setSetup={setSetup} />
        </div>
      </div>
    </section>
  )
}
