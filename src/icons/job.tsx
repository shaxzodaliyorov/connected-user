import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const JobIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8 2C4 2 2 4 2 8V21C2 21.55 2.45 22 3 22H16C20 22 22 20 22 16V8C22 4 20 2 16 2H8Z"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M7 9.5H17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    <path d="M7 14.5H14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </Icon>
)
