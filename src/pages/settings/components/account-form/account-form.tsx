import {Button, Input} from '@/components/common'
import {Controller, useForm} from 'react-hook-form'
import {AccountFormProps, AccountFormValues} from './types'
import {FC, useEffect} from 'react'
import {useGetUser, useHandleRequest, useValidationOptions} from '@/hooks'
import {FaTrashAlt} from 'react-icons/fa'
import {useDeleteUserAccountMutation} from '@/features/user'
import {toast} from '@/components/ui/use-toast'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

export const AccountForm: FC<AccountFormProps> = ({onSubmit, loading}) => {
  const form = useForm<AccountFormValues>()
  const validationOptions = useValidationOptions()
  const user = useGetUser()

  const handleRequest = useHandleRequest()
  const {t} = useTranslation()
  const [deleteUserAccount] = useDeleteUserAccountMutation()
  const navigate = useNavigate()

  const deleteUserAccountHandler = async () => {
    if (!user) {
      return
    }

    if (!confirm('Are you sure you want to delete your account?')) {
      return
    }

    await handleRequest({
      request: async () => {
        const response = await deleteUserAccount()
        return response
      },
      onSuccess: () => {
        toast({title: t('Delete successfully'), variant: 'default'})
        navigate('/login')
      },
    })
  }

  useEffect(() => {
    form.setValue('full_name', user?.full_name || '')
    form.setValue('phone_number', user?.phone_number || '')
    form.setValue('email', user?.email || '')
    form.setValue('profile_photo', user?.profile_photo || '')
  }, [form, user])

  return (
    <section className="w-full container">
      <div className="w-full  gap-x-4 flex  ">
        <div className="w-full  ">
          <form className="" onSubmit={form.handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-6 gap-y-4">
              <Controller
                name="full_name"
                control={form.control}
                rules={validationOptions(true)}
                render={({field}) => (
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.full_name?.message}
                    placeholder="Enter your name"
                    label="Full Name"
                  />
                )}
              />

              <Controller
                name="phone_number"
                rules={validationOptions(true)}
                control={form.control}
                render={({field}) => (
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.phone_number?.message}
                    placeholder="+1 (555) 000-0000"
                    label="Phone number"
                  />
                )}
              />
              <Controller
                name="email"
                control={form.control}
                rules={validationOptions(true)}
                render={({field}) => (
                  <Input
                    onChange={field.onChange}
                    value={field.value}
                    errorMessage={form.formState.errors.phone_number?.message}
                    placeholder="example@gmail.com"
                    label="Email"
                  />
                )}
              />
            </div>
            <div className="pt-10">
              <div className="w-full h-[1px] bg-[#D9D9D9]" />
            </div>
            <div className="flex justify-between w-full pt-[30px]">
              <button
                type="button"
                onClick={deleteUserAccountHandler}
                className="flex items-center gap-x-2 text-center text-[#f13225] text-lg font-medium font-['Inter Display']"
              >
                <FaTrashAlt /> Delete Account
              </button>
              <Button loading={loading} type="submit" className="px-[76px] h-12">
                Save
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
