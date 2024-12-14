import {VisaDetailsForm} from '../visa-details-form'

export const VisaDetails = () => (
    <section className="w-full">
      <div className="w-full flex flex-col justify-between ">
        <div className="flex flex-col">
          <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Basic Information</h4>
          <p className="text-base font-normal leading-6 text-left text-[#7D7D7D]">
            Manage your account details, preferences, and security settings below.
          </p>
        </div>
        <div className="py-[30px]">
          <div className="w-full h-[1px] bg-[#D9D9D9]" />
        </div>
        <div className="flex flex-col">
          <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Visa Details</h4>
          <p className="text-base font-normal leading-6 text-left text-[#7D7D7D]">Enter your visa informations</p>
        </div>
        <div className="py-[30px]">
          <VisaDetailsForm />
        </div>
      </div>
    </section>
  )
