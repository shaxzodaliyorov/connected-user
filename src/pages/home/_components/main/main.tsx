export const Main = () => (
  <section className="w-full  ">
    <div className="w-full container flex justify-between h-[400px] bg-white rounded-[15px] ">
      <div className="flex flex-col justify-between p-[30px]">
        <img src="/images/light.png" alt="" className="w-[50px] h-[50px]" />
        <div>
          <h1 className="text_gradient text-[#1ec1ff] text-[44px] font-medium font-['Inter Display'] leading-[52.80px]">
            Company <br /> that support E-9 Visa
          </h1>
          <p className="text-[#0b0b0b] mt-2 pb-9 text-2xl font-normal font-['Inter Display'] leading-[33.60px]">
            We provide visa and accommodation.
          </p>
          <div className="flex gap-x-[6px]">
            <div className="w-6 h-1 bg-[#0062ff] rounded-[15px]"></div>
            <div className="w-6 h-1 bg-[#e7e7e7] rounded-[15px]"></div>
            <div className="w-6 h-1 bg-[#e7e7e7] rounded-[15px]"></div>
          </div>
        </div>
      </div>
      <div>
        <img className="" src="./images/main-image.svg" alt="" />
      </div>
    </div>
  </section>
)
