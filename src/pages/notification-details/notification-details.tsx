import {Loader} from '@/components/loader'
import {MainCard} from '@/components/main-card'
import {useGetNotificationQuery} from '@/features/notifications'
import dayjs from 'dayjs'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useParams} from 'react-router-dom'

export const NotificationDetails = () => {
  const {id} = useParams()
  const {data: {data: notification} = {}, isLoading} = useGetNotificationQuery(id as string)
  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6">
          <Link to="/notifications" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
        {isLoading ? (
          <Loader className="h-40" />
        ) : (
          <MainCard>
            <h1 className="text-[32px] font-medium text-left">{notification?.title}</h1>
            <div className="py-4">
              <p className="text-[16px] font-normal text-[#7D7D7D] text-left ">
                Published on: {dayjs(notification?.updated_at).format('YYYY.MM.DD')}
              </p>
            </div>
            <div className="py-4">
              <p className="text-xl font-normal text-left text-[#0C0C0C]">{notification?.description}</p>
            </div>
          </MainCard>
        )}
      </div>
    </section>
  )
}
