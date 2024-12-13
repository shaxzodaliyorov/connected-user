import {RealTimeSwiper} from '../real-time-swiper'

export const RealTime = () => (
  <section className="w-full mt-[120px]">
    <div className="w-full container flex flex-col">
      <h1 className="font-medium text-[32px] text-[#1289F8]">
        Real-time Popular position.
        <span className="font-normal text-[#0C0C0C]">
          This section updates frequently based on user interactions and job trends.
        </span>
      </h1>
      <div className="w-full flex justify-between mt-[30px]">
        <RealTimeSwiper />
      </div>
    </div>
  </section>
)
