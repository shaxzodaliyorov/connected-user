import {SavedJobsData} from '@/features/jobs/types'
import {Job} from '@/types'

export type Props = {
  job: Job & SavedJobsData
}
