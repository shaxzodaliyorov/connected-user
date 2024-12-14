import {Button} from '@/components/common'
import {AddPhoto, Trash} from '@/icons'
import {AcccountForm} from '../account-form'

export const Account = () => (
    <section className="w-full">
      <div>
        <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Basic Information</h4>
        <p className="text-base font-normal leading-6 text-left text-[#7D7D7D] pb-5">
          This is your personal information that you can update anytime.
        </p>
        <div className="w-full flex justify-between bg-[#FAFAFA] p-5 rounded-xl pt-5">
          <div className="">
            <h4 className="text-[#0c0c0c] text-[20px] font-medium leading-[38.72px] text-left">Photo</h4>
            <p className="w-[70%] text-base font-normal leading-6 text-left text-[#7D7D7D]">
              This public profile picture will help recruiters recognize you!
            </p>
            <div className="pt-[18px]">
              <h5 className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
                SVG, PNG, JPG or GIF (max. 400 x 400px)
              </h5>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <img
              className="w-[120px] h-[120px] rounded-full border-[3px] border-white"
              src="https://mighty.tools/mockmind-api/content/human/57.jpg"
              alt=""
            />
            <div className="flex gap-2 flex-col mr-10">
              <Button variant="primary" className="text-white px-6 py-2 font-medium" leftIcon={<AddPhoto />}>
                Add photo
              </Button>
              <Button
                variant="outline"
                className="text-[#0C0C0C] border-[#0C0C0C] px-[35px] py-2 font-medium hover:bg-[#FAFAFA] hover:text-[#0C0C0C]"
                leftIcon={<Trash className="text-[#F13325]" />}
              >
                Delete
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <h4 className="text-[#0c0c0c] text-[24px] font-medium leading-[38.72px] text-left">Personal Details</h4>
        <AcccountForm />
      </div>
    </section>
  )
