/* eslint-disable object-shorthand */
import {Filter, SelectedFilters} from '@/components'
import {Button, Input} from '@/components/common'
import {useLazyGetAllJobsQuery} from '@/features/jobs'
import {useHandleRequest} from '@/hooks'
import {useEffect, useState} from 'react'
import {IoSearch} from 'react-icons/io5'
import {JobItem} from './_components'
import {Loader} from '@/components/loader'
export const Jobs = () => {
  const [search, setSearch] = useState('')
  const handleRequest = useHandleRequest()
  const [getAllJobs, {data: {data: jobs = [], next_page} = {}, isLoading, isFetching}] = useLazyGetAllJobsQuery()
  const [filterData, setFilterData] = useState<SelectedFilters>()
  const [perPage, setPerPage] = useState(5)

  const fetchJobs = async () => {
    await handleRequest({
      request: async () => {
        const response = await getAllJobs({search: search, per_page: perPage, ...filterData}).unwrap()
        return response
      },
    })
  }

  useEffect(() => {
    fetchJobs()
  }, [search, perPage, filterData])

  return (
    <section className="w-full">
      <div className="w-full container m-auto bg-white p-[20px] rounded-[15px]">
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
            Visa News <span className="text-[#7D7D7D] font-normal">∙ 10</span>
          </h4>
        </div>
      </div>
      <div className="w-full container flex gap-4 pt-4">
        <div className="w-[25%] h-min bg-white rounded-[15px]">
          <Filter onChange={filter => setFilterData(filter)} />
        </div>
        <div className="w-[75%]  flex flex-col gap-4">
          {isLoading ? (
            <Loader className="w-full h-80" />
          ) : jobs.length ? (
            jobs?.map((job, index) => <JobItem key={index} job={job} />)
          ) : (
            <div className="w-full h-80 flex items-center justify-center ">
              <p className="text-xl font-normal leading-6 text-center text-gray-600">No jobs found</p>
            </div>
          )}
          {!!jobs.length && next_page && (
            <Button
              disabled={!next_page}
              onClick={() => setPerPage(perPage + 5)}
              variant="outline"
              className=" px-6 py-2 font-medium"
              loading={isFetching}
            >
              Show more
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
