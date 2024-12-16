import {Card} from '@/components'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'

const jobs = [
  {
    id: 1,
    title: 'Middle UI Designer',
    salary: '$125K - $140K',
    location: 'Samsung | Jung-gu, Seoul · Remote · Full Time',
    status: 'Applied',
  },
  {
    id: 2,
    title: 'Middle UI Designer',
    salary: '$125K - $140K',
    location: 'Samsung | Jung-gu, Seoul · Remote · Full Time',
    status: 'Hired',
  },
  {
    id: 3,
    title: 'Middle UI Designer',
    salary: '$125K - $140K',
    location: 'Samsung | Jung-gu, Seoul · Remote · Full Time',
    status: 'Hired',
  },
]

export const Application = () => (
  <section className="w-full">
    <div className="w-full container">
      <div className="py-6">
        <Link to="/" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
        <div className="py-4">
          <h1 className="text-[32px] font-semibold lg:leading-[38.4px] text-left">Application</h1>
        </div>
      </div>
      <div className="flex flex-col gap-y-4">
        {jobs.map((item, index) => (
          <Card
            key={index}
            title={item.title}
            salary={item.salary}
            location={item.location}
            status={item.status as 'Applied' | 'Hired'}
          />
        ))}
      </div>
    </div>
  </section>
)
