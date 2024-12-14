import {Button, Input} from '@/components/common'
import {MainCard} from '@/components/main-card'
import {Controller, useForm} from 'react-hook-form'
import {AccountFormValues} from './types'
import {MdOutlineLogout} from 'react-icons/md'

export const AcccountForm = () => {
  const form = useForm<AccountFormValues>()

  const onSubmit = () => {}

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex  ">
        <MainCard className="w-full">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Controller
                name="name"
                control={form.control}
                render={() => <Input placeholder="Enter your name" label="Full Name*" />}
              />

              <Controller
                name="number"
                control={form.control}
                render={() => <Input placeholder="+1 (555) 000-0000" label="Phone number" />}
              />
              <Controller
                name="email"
                control={form.control}
                render={() => <Input placeholder="example@gmail.com" label="Email*" />}
              />
            </div>
            <div className="pt-10">
              <div className="w-full h-[1px] bg-[#D9D9D9]" />
            </div>
            <div className="flex justify-between pt-[30px]">
              <Button
                leftIcon={<MdOutlineLogout size={20} color="red" />}
                className="px-[76px] h-12 text-[red] bg-white hover:bg-white"
              >
                Log out
              </Button>
              <Button type="submit" className="px-[76px] h-12">
                Save
              </Button>
            </div>
          </form>
        </MainCard>
      </div>
    </section>
  )
}
