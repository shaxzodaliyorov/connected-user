import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Card} from '../card'

export const RealTimeSwiper = () => {
  const jobs = [
    {
      title: 'Middle Graphic Designer',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Intermediate+ Communication designer + 3D',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Junior UX/UI designer',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Middle Web Designer (UX/UI designer)',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Middle Graphic Designer',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Intermediate+ Communication designer + 3D',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Junior UX/UI designer',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
    {
      title: 'Middle Web Designer (UX/UI designer)',
      salary: '$125K - $140K',
      location: 'Jung-gu, Seoul',
      type: 'Remote',
      company: 'Samsung Electronics',
    },
  ]

  return (
    <section>
      <div className="container w-full">
        <div className="w-full flex justify-between items-center">
          <div className="w-full mx-auto py-10">
            <Swiper
              spaceBetween={15}
              slidesPerView={4}
              breakpoints={{
                640: {slidesPerView: 1},
                768: {slidesPerView: 2},
                1024: {slidesPerView: 4},
              }}
            >
              {jobs.map((job, index) => (
                <SwiperSlide key={index}>
                  <Card company={job.company} title={job.title} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  )
}
