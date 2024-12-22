import {toast} from '@/components/ui/use-toast'
import {useUpdateUserProfileMutation} from '@/features/user'
import {useGetUser, useHandleRequest} from '@/hooks'
import {App as SendbirdApp} from 'sendbird-uikit'
import 'sendbird-uikit/dist/index.css'

const APP_ID = '4B57A0EB-D3C3-477D-A09E-B23328ED97DF'

export const Chat = () => {
  const user = useGetUser()
  const [updateUserProfile] = useUpdateUserProfileMutation()
  const handleRequest = useHandleRequest()

  const onSubmit = async (formData: SendBird.User) => {
    await handleRequest({
      request: async () => {
        const response = await updateUserProfile({
          full_name: formData.nickname,
          profile_photo: formData.profileUrl,
        })
        return response
      },
      onSuccess: () => {
        toast({title: 'Update successfully', variant: 'default'})
      },
    })
  }

  return (
    <section>
      <div className="container overflow-y-auto h-[80vh] pb-10 pt-[30px]">
        <SendbirdApp
          profileUrl={user?.profile_photo}
          nickname={user?.full_name}
          appId={APP_ID}
          userId={user?._id as string}
          allowProfileEdit
          onProfileEditSuccess={onSubmit}
        />
      </div>
    </section>
  )
}
