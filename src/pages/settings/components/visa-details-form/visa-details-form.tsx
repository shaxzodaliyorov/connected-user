import {Button, Input, Select} from '@/components/common'
import {MainCard} from '@/components/main-card'
import {Controller, useForm} from 'react-hook-form'
import {AccountFormValues} from '../account-form/types'
import {useState} from 'react'

export const VisaDetailsForm = () => {
  const form = useForm<AccountFormValues>()

  const [selectedValue, setSelectedValue] = useState('')

  const onSubmit = () => {}

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex  ">
        <MainCard className="w-full">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-3 gap-x-6 gap-y-4 ">
              <Controller
                name="name"
                control={form.control}
                render={() => (
                  <Select
                    label="Current visa"
                    value={selectedValue}
                    onChange={e => setSelectedValue(e.target.value)}
                    options={[
                      {label: 'Option 1', value: '1'},
                      {label: 'Option 2', value: '2'},
                      {label: 'Option 3', value: '3'},
                    ]}
                    placeholder="Select your visa type"
                    size="md"
                    fullWidth
                  />
                )}
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
            <div className="flex justify-end pt-[30px]">
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
