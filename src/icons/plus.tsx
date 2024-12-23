import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const PlusIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
      <g clipPath="url(#clip0_1051_20406)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12 4C12.5523 4 13 4.44772 13 5V19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19V5C11 4.44772 11.4477 4 12 4Z"
          fill="currentColor"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4 12C4 11.4477 4.44772 11 5 11H19C19.5523 11 20 11.4477 20 12C20 12.5523 19.5523 13 19 13H5C4.44772 13 4 12.5523 4 12Z"
          fill="currentColor"
        />
      </g>
      <defs>
        <clipPath id="clip0_1051_20406">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  </Icon>
)
