import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Navigation} from 'swiper/modules'

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
  ]

  return (
    <section>
      <div className="container w-full">
        <div className="w-full flex justify-between items-center mt-[30px]">
          <div className="max-w-screen-lg mx-auto my-10">
            <div className="max-w-screen-lg mx-auto py-10">
              <Swiper
                modules={[Navigation]}
                spaceBetween={20}
                slidesPerView={3}
                navigation
                loop
                breakpoints={{
                  640: {slidesPerView: 1},
                  768: {slidesPerView: 2},
                  1024: {slidesPerView: 3},
                }}
              >
                {jobs.map((job, index) => (
                  <SwiperSlide key={index}>
                    <div className="border p-5 rounded-lg shadow-sm bg-white">
                      <h3 className="text-lg font-bold">{job.title}</h3>
                      <p className="text-blue-500 font-semibold">{job.salary}</p>
                      <p className="text-gray-600">{job.location}</p>
                      <p className="text-gray-600">{job.type}</p>
                      <div className="flex items-center mt-3">
                        <img src="https://via.placeholder.com/50" alt="company logo" className="w-10 h-10 mr-3" />
                        <p className="text-sm text-gray-500">{job.company}</p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
