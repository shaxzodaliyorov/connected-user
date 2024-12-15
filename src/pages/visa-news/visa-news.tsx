import {Button, Input} from '@/components/common'
import {IoSearch} from 'react-icons/io5'
import {Card} from './components'
import {useLazyGetAllVisaNewsQuery} from '@/features/news'
import {useHandleRequest} from '@/hooks'
import {useEffect, useState} from 'react'
import {Loader} from '@/components/loader'

export const VisaNews = () => {
  const [search, setSearch] = useState('')
  const [getAllVisaNews, {data: {data: visaNews = [], next_page} = {}, isLoading, isFetching}] =
    useLazyGetAllVisaNewsQuery()
  const handleRequest = useHandleRequest()
  const [hasMore, setHasMore] = useState(true)
  const [perPage, setPerPage] = useState(6)

  const fetchVisaNews = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllVisaNews({search, per_page: perPage})
        return response
      },
      onSuccess: data => {
        if (!data.next_page) {
          setHasMore(false)
        }
      },
    })
  }

  const handlePerPage = () => {
    setPerPage(perPage + 6)
  }

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop >= document.documentElement.offsetHeight - 200 &&
        hasMore
      ) {
        fetchVisaNews()
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [hasMore])

  useEffect(() => {
    fetchVisaNews()
  }, [search, perPage])

  return (
    <section className="w-full">
      <div className="w-full container m-auto bg-white p-[30px] rounded-[15px]">
        <div className="flex">
          <Input
            onChange={e => setSearch(e.target.value)}
            value={search}
            leftIcon={<IoSearch size={20} />}
            inputSizeClassName="h-12 pl-10"
            placeholder="Search"
            fullWidth
          />
          <Button className="ml-3 px-8 h-12">Search</Button>
        </div>
        <div className="w-full pt-[25px] justify-between">
          <h4 className="text-2xl font-semibold leading-[29.04px] text-left text-[#0C0C0C]">
            Visa News <span className="text-[#C5C5C5] font-normal">∙ {visaNews?.length || 0}</span>
          </h4>
        </div>
      </div>
      <div className="w-full container pt-4">
        <div className="grid grid-cols-3 gap-5">
          {isLoading || isFetching ? (
            <Loader className="col-span-3 h-80 w-full" />
          ) : visaNews?.length ? (
            visaNews?.map((newsItem, index) => <Card key={index} newsItem={newsItem} />)
          ) : (
            <div className="col-span-3 h-80 w-full flex justify-center items-center">
              <p className="col-span-3 text-center text-base text-gray-700">No news found</p>
            </div>
          )}
        </div>
        {next_page && (
          <Button fullWidth className="mt-4" variant="outline" onClick={handlePerPage} loading={isFetching}>
            Show more
          </Button>
        )}
      </div>
    </section>
  )
}
