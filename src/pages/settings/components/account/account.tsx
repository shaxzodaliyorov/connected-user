/* eslint-disable unicorn/no-null */
import {Button} from '@/components/common'
import {AddPhoto, Trash} from '@/icons'
import {AccountForm} from '../account-form'
import {useEffect, useRef, useState} from 'react'
import {useFileUpload, useGetUser, useHandleRequest} from '@/hooks'
import {AccountFormValues} from '../account-form/types'
import {useUpdateUserProfileMutation} from '@/features/user'
import {toast} from '@/components/ui/use-toast'
import {useTranslation} from 'react-i18next'

export const Account = () => {
  const [avatar, setAvatar] = useState<File | string>('')
  const fileRef = useRef<HTMLInputElement>(null)
  const user = useGetUser()
  const handleRequest = useHandleRequest()
  const [updateUserProfile, {isLoading}] = useUpdateUserProfileMutation()
  const {handleFileUpload, isLoading: uploading} = useFileUpload()

  const {t} = useTranslation()

  const onSubmit = async (formData: AccountFormValues) => {
    if (typeof avatar !== 'string') {
      formData.profile_photo = (await handleFileUpload(avatar as unknown as File)) as string
    }
    await handleRequest({
      request: async () => {
        const response = await updateUserProfile(formData)
        return response
      },
      onSuccess: () => {
        toast({title: t('Update successfully'), variant: 'default'})
      },
    })
  }

  useEffect(() => {
    if (user) {
      setAvatar(user?.profile_photo || '')
    }
  }, [user])

  return (
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
              className="w-[120px] h-[120px] rounded-full object-cover border-[3px] border-white"
              src={typeof avatar === 'object' ? URL.createObjectURL(avatar) : avatar || '/images/placeholder.webp'}
              alt=""
            />
            <label>
              <input onChange={e => setAvatar(e.target.files?.[0] ?? '')} ref={fileRef} type="file" hidden />
            </label>
            <div className="flex gap-2 flex-col mr-10">
              <Button
                onClick={() => fileRef.current?.click()}
                variant="primary"
                className="text-white px-6 py-2 font-medium"
                leftIcon={<AddPhoto />}
              >
                Add photo
              </Button>

              <Button
                onClick={() => setAvatar(user?.profile_photo)}
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
        <AccountForm loading={isLoading || uploading} onSubmit={onSubmit} />
      </div>
    </section>
  )
}
