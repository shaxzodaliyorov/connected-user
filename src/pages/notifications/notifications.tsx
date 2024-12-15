import {BoldTabs} from '@/components'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {useGetAllNotificationsQuery} from '@/features/notifications'
import {useState} from 'react'
import dayjs from 'dayjs'
import {Loader} from '@/components/loader'
import {NoNotifications} from '@/icons/no-notifications'

export const Notifications = () => {
  const {data: {data: notifications} = {}, isLoading} = useGetAllNotificationsQuery('')
  const [filter, setFilter] = useState<'all' | 'unread'>('all')

  return (
    <section className="w-full">
      <div className="w-full container flex flex-col">
        <div className="py-6">
          <Link to="/" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
        <h1 className="font-medium text-[32px] text-[#0C0C0C]">Notification</h1>
        <div className="pt-4">
          <BoldTabs
            onChange={value => setFilter(value as 'all' | 'unread')}
            tabs={[
              {
                label: `All (${notifications?.length})`,
                value: 'all',
              },
              {
                label: `Unread (${notifications?.map(item => item.is_read).filter(item => item === false).length})`,
                value: 'unread',
              },
            ]}
          />
          <section className="w-full">
            <div className="w-full container flex flex-col gap-y-4">
              {isLoading ? (
                <Loader className="w-full h-80 flex justify-center items-center" />
              ) : notifications?.length ? (
                notifications
                  ?.filter(c => (filter === 'all' ? true : !c.is_read))
                  ?.map((item, index) => (
                    <div key={index} className="w-full p-[20px] bg-white rounded-[15px]">
                      <div className="flex justify-between items-center">
                        <h1 className="w-3/4 text-[#0C0C0C] text-2xl font-medium leading-[30px]">{item.title}</h1>
                        {item.is_read ? ' ' : <span className="w-[10px] h-[10px] bg-[#12B76A] rounded-full"></span>}
                      </div>
                      <div className="flex justify-between items-end pt-4">
                        <p className="w-3/4 text-[#7D7D7D] text-base font-normal leading-[19.2px]">
                          {item.description}
                        </p>
                        <p className="text-[#7D7D7D] text-base font-normal leading-[19.2px]">
                          {dayjs(item.created_at).format('YYYY-MM-DD')}
                        </p>
                      </div>
                    </div>
                  ))
              ) : (
                <div className="w-full container">
                  <div className="py-[100px]">
                    <NoNotifications className="mx-auto text-[#7D7D7D]" />
                    <p className="text-center text-[#0b0b0b] mt-6 text-2xl font-normal font-['Inter Display'] leading-[33.60px]">
                      You have no notifications
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}
