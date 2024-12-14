import {SwiperSlide, Swiper} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import {Card} from '../card'
import {useRef} from 'react'
import {MdOutlineArrowBackIos, MdOutlineArrowForwardIos} from 'react-icons/md'

export const RealTimeSwiper = () => {
  const swiperRef = useRef<any>(null)
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
  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev()
    }
  }

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext()
    }
  }

  return (
    <section className="py-10">
      <div className="container mx-auto">
        <div className="w-full flex justify-between items-center mb-6">
          <button
            onClick={handlePrev}
            className="w-10 h-10 rounded-full bg-white relative top-48 z-20 -left-5 shadow-[0px_1.82px_1.82px_0px_#00000026]"
          >
            <MdOutlineArrowBackIos className="ml-3" />
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 rounded-full bg-white relative top-48 z-20 left-5 shadow-[0px_1.82px_1.82px_0px_#00000026]"
          >
            <MdOutlineArrowForwardIos className="ml-3 " />
          </button>
        </div>

        <div className="w-full">
          <Swiper
            onSwiper={swiper => (swiperRef.current = swiper)}
            spaceBetween={15}
            slidesPerView={4}
            loop
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
    </section>
  )
}
