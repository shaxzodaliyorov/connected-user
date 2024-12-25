import {Education, Resume} from '@/types/resume'

export type Props = {
  open: boolean
  close: () => void
  education: Education
  resume: Resume
}
