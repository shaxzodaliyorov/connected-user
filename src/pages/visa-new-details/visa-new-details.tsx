import {Button} from '@/components/common'
import {useGetVisaNewsQuery, useLazyGetAllVisaNewsQuery} from '@/features/news'
import {Link, useParams} from 'react-router-dom'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import dayjs from 'dayjs'
import {useEffect, useState} from 'react'
import {useHandleRequest} from '@/hooks'
import {Loader} from '@/components/loader'

export const VisaNewDetails = () => {
  const {id} = useParams()
  const {data: {data: news} = {}, isLoading} = useGetVisaNewsQuery(id as string)

  const [getAllVisaNews, {data: {data: visaNews = [], next_page} = {}, isFetching}] = useLazyGetAllVisaNewsQuery()
  const handleRequest = useHandleRequest()
  const [perPage, setPerPage] = useState(4)

  const fetchVisaNews = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllVisaNews({per_page: perPage})
        return response
      },
    })
  }

  const handlePerPage = () => {
    setPerPage(perPage + 4)
  }

  useEffect(() => {
    fetchVisaNews()
  }, [perPage])

  return (
    <section className="w-full">
      <div className="container">
        <div className="py-6">
          <Link to="/visa-news" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
      </div>
      <div className="w-full container flex justify-between">
        {isLoading ? (
          <div className="w-[66%] flex justify-center items-center h-min bg-white p-[30px] rounded-[15px]">
            <Loader className="h-80" />
          </div>
        ) : (
          <div className="w-[66%] h-min bg-white p-[30px] rounded-[15px]">
            <div className="flex justify-between">
              <p className="text-sm font-normal leading-[22.4px] text-left text-[#0C0C0C]">Immigration</p>
              <p className="text-sm font-normal leading-[22.4px] text-left text-[#0C0C0C]">
                Published: {dayjs(news?.created_at).format('MMM DD, YYYY')}
              </p>
            </div>
            <div className="pt-3">
              <h3 className="text-2xl font-medium leading-9 line-clamp-2 text-left">{news?.title}</h3>
              <div className="pt-6">
                <img className="w-full h-80 rounded-[15px]" src={news?.images[0]} alt={news?.title || ''} />
              </div>
              <div className="pt-[30px]">
                <div dangerouslySetInnerHTML={{__html: news?.desc || ''}}></div>
              </div>
            </div>
          </div>
        )}
        <div className="w-[33%] bg-white p-[30px] rounded-[15px] min-h-[680px]">
          <h1 className="text-[#0b0b0b] pb-6 text-xl font-semibold font-['Inter Display'] leading-7">More News</h1>
          {visaNews?.map((item, index) => (
            <>
              <Link to={`/visa-new/${item._id}`} key={index} className="flex gap-[14px]">
                <img
                  className="w-[90px] rounded-lg object-cover h-[125px] gap-0 opacity-[0px] rounded-2"
                  src={item.images[0]}
                  alt={item.title || ''}
                />
                <div className="flex flex-col">
                  <h4 className="text-[#0C0C0C] font-semibold line-clamp-1 text-left">{item.title}</h4>
                  <p className=" text-[#0b0b0b]  mt-[5px] line-clamp-3 pb-[13px] text-sm font-normal font-['Inter Display'] leading-snug ">
                    {item.desc}
                  </p>
                  <div className="text-[14px]  text-gray-500 mt-[13px]">
                    <span>Immigration</span> · <span>{dayjs(item?.created_at).format('MMM DD, YYYY')}</span>
                  </div>
                </div>
              </Link>
              <div className="py-6">
                <div className="w-full h-[1px] bg-[#F3F3F3]" />
              </div>
            </>
          ))}
          {next_page && (
            <Button
              fullWidth
              loading={isFetching}
              variant="outline"
              onClick={handlePerPage}
              className='"mt-6 px-8 py-3 mt-6'
            >
              Show more
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
