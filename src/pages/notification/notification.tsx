import {BoldTabs} from '@/components'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {All, Unread} from '../notifications/components'
import {NoNotification} from './components/no-notifications'

const NOTIFICATION = [
  {
    id: 1,
    title: 'New features added! Explore the latest tools for job searching.',
    description:
      "We've added new filters to help you refine your job search by salary range, job type, and more. Try them out to find the perfect job faster!",
    date: '2024.08.06',
    is_read: false,
  },
  {
    id: 2,
    title: 'Your job application has been received!',
    description:
      "We have successfully received your job application for the Software Engineer position. We'll review it and get back to you soon.",
    date: '2024.08.06',
    is_read: true,
  },
  {
    id: 3,
    title: 'Weekly job recommendations are ready!',
    description:
      'Based on your preferences, we’ve found several new job opportunities for you this week. Check them out now!',
    date: '2024.08.06',
    is_read: false,
  },
  {
    id: 4,
    title: 'Update your profile for better matches.',
    description:
      'A completed profile gets 3x more job opportunities. Take a minute to update your skills and experience today.',
    date: '2024.08.06',
    is_read: false,
  },
  {
    id: 5,
    title: 'Interview scheduled: Frontend Developer role.',
    description:
      'Your interview for the Frontend Developer position is scheduled for August 10th at 10:00 AM. Please confirm your availability.',
    date: '2024.08.06',
    is_read: true,
  },
]

export const Notification = () => {
  const falseCount = NOTIFICATION?.filter(n => !n.is_read)?.length
  const unreadNotifications = NOTIFICATION?.filter(n => !n.is_read)

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
        {NOTIFICATION.length > 0 ? (
          <>
            <h1 className="font-medium text-[32px] text-[#0C0C0C]">Notification</h1>
            <div className="pt-4">
              <BoldTabs
                tabs={[
                  {
                    label: `All (${NOTIFICATION.length})`,
                    value: 'all',
                    children: <All children={NOTIFICATION} />,
                  },
                  {
                    label: `Unread (${falseCount})`,
                    value: 'unread',
                    children: <Unread children={unreadNotifications} />,
                  },
                ]}
              />
            </div>
          </>
        ) : (
          <NoNotification />
        )}
      </div>
    </section>
  )
}
