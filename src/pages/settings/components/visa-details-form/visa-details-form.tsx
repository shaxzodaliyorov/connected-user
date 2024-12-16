import {Button, Input, Select} from '@/components/common'
import {Controller, useForm} from 'react-hook-form'
import {AccountFormValues} from '../account-form/types'

export const VisaDetailsForm = () => {
  const form = useForm<AccountFormValues>()

  const onSubmit = () => {}

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex  ">
        <div className="w-full">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 ">
              <Controller
                name="full_name"
                control={form.control}
                render={({field}) => (
                  <Select
                    label="Current visa"
                    value={field.value}
                    onChange={field.onChange}
                    options={[
                      {label: 'Option 1', value: '1'},
                      {label: 'Option 2', value: '2'},
                      {label: 'Option 3', value: '3'},
                    ]}
                    placeholder="Select your visa type"
                    size="md"
                    fullWidth
                    selectClass={''}
                  />
                )}
              />

              <Controller
                name="full_name"
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
            <div className="flex justify-end pt-[30px]">
              <Button type="submit" className="px-[76px] h-12">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
