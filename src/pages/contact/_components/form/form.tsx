import {Controller, useForm} from 'react-hook-form'
import {FormValues} from './types'
import {MainCard} from '@/components/main-card'
import {Button, Input, TextArea} from '@/components/common'

export const Form = () => {
  const form = useForm<FormValues>()

  const onSubmit = () => {}

  return (
    <section className="w-full container px-0 py-[120px]">
      <div className="w-full  gap-x-4 flex  ">
        <MainCard className="w-[40%]">
          <form className="grid grid-cols-1 gap-y-6" onSubmit={form.handleSubmit(onSubmit)}>
            <Controller
              name="name"
              control={form.control}
              render={() => <Input placeholder="Enter your name" label="Name" />}
            />

            <Controller
              name="email"
              control={form.control}
              render={() => <Input placeholder="Enter your email" label="Email" />}
            />

            <Controller
              name="message"
              control={form.control}
              render={() => <TextArea placeholder="Leave your message for us" label="Message" />}
            />
            <Button className="mt-[8px]">Submit</Button>
          </form>
        </MainCard>
        <MainCard className="w-[60%] p-0 ">
          <img src="/images/contact-form-image.png" alt="" />
        </MainCard>
      </div>
    </section>
  )
}
