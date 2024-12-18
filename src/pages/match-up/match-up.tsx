import {Button, Input, MatchFilter, SelectedMatchFilters} from '@/components'
import {useEffect, useState} from 'react'
import {IoSearch} from 'react-icons/io5'
import {MatchItem, NoMatch} from './components'
import {useGetAllMatchUpJobsQuery} from '@/features/match-up'
import {Loader} from '@/components/loader'

export const MatchUp = () => {
  const [search, setSearch] = useState('')
  const [, setFilterData] = useState<SelectedMatchFilters>()

  const {data: {data: jobs = []} = {}, isLoading, isFetching} = useGetAllMatchUpJobsQuery({})

  const [aiLoading, setAiLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setAiLoading(false)
    }, 7000)

    return () => {
      setAiLoading(true)
    }
  }, [isFetching])

  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="p-5 bg-white rounded-[15px]">
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
              AI-compatible vacancies{' '}
              <span className="text-[#7D7D7D] font-normal">∙ {jobs?.length?.toLocaleString() || '0'}</span>
            </h4>
          </div>
        </div>
        <div className="flex gap-4 pt-4">
          <div className="w-[25%] h-min bg-white p-5 rounded-[15px]">
            <MatchFilter onChange={filter => setFilterData(filter)} />
          </div>
          <div className="w-[75%]  p-6 rounded-[15px]">
            <div className="flex flex-col gap-y-4">
              {isLoading || aiLoading ? (
                <Loader className="w-full h-80" />
              ) : jobs.length ? (
                jobs.map(job => <MatchItem key={job?.job_id} job={job} />)
              ) : (
                <NoMatch />
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
