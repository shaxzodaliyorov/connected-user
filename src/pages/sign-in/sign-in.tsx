import {AuthNavigation} from '@/components/auth-navigation'
import {Link, useNavigate} from 'react-router-dom'
import {Form} from './_components'

export const SignIn = () => {
  const navigate = useNavigate()

  return (
    <section className="w-full pb-10 pt-10 md:pb-[0px] md:pt-[0px] min-h-screen flex flex-col justify-center items-center bg-[#fbfbfb]">
      <div className="max-w-[400px] px-5 md:px-4 xl:px-0 mx-auto">
        <AuthNavigation
          onClick={() => navigate('/')}
          title={
            <div className="flex gap-x-2.5 items-center">
              Welcome to
              <img src="/images/logo.svg" />
            </div>
          }
        />
        <p className="text-[#838383] text-base text-center mt-3 font-normal font-['Inter Display'] leading-normal">
          Your gateway to connecting with opportunities and professionals in Korea.
        </p>
        <div>
          <Form />
        </div>
        <div className="pt-[23px]">
          <p className="text-center text-[#838383] text-base font-normal font-['Inter Display']">
            Don’t have an account?{' '}
            <Link to={'/sign-up'} className="text-[#0062ff] font-medium font-['Inter Display'] link">
              Sign Up
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
      </div>
    </section>
  )
}
