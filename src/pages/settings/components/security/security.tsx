import {SecurityForm} from '../security-form'

export const Security = () => (
  <section className="w-full">
    <div className="w-full flex flex-col justify-between ">
      <div className="flex flex-col">
        <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Basic Information</h4>
        <p className="text-base font-normal leading-6 text-left text-[#7D7D7D]">
          Manage your account details, preferences, and security settings below.
        </p>
      </div>
      <div className="py-[30px]">
        <div className="w-full h-[1px] bg-neutral-100" />
      </div>
      <div className="flex flex-col">
        <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Update Email</h4>
        <p className="text-base font-normal leading-6 text-left text-[#7D7D7D]">
          Update your email address to make sure it is safe.{' '}
          <span className="text-base font-medium leading-6 text-left text-[#0C0C0C]">jakegyll@email.com</span>
        </p>
      </div>
      <div className="py-[30px]">
        <SecurityForm />
      </div>
    </div>
  </section>
)
