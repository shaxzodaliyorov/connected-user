import {AuthNavigation} from '@/components/auth-navigation'
import {Link} from 'react-router-dom'

export const SignUp = () => (
  <section className="w-full pt-[80px] bg-[#fbfbfb] ">
    <div className="max-w-[400px] mx-auto">
      <AuthNavigation title="Join the membership" />
      <p className="text-[#838383] text-base text-center mt-3 font-normal font-['Inter Display'] leading-normal">
        If you are corporate customer, please sign up through corporate services.
        <Link to="/" className="text-[#0062ff] text-base font-semibold font-['Inter Display'] leading-normal">
          Go to corporate service
        </Link>
      </p>
    </div>
  </section>
)
