import {Icon} from '@/components/common'
import {IconProps} from '@/components/common/icon/types'

export const WIcon = (props: IconProps) => (
  <Icon viewBox="0 0 24 24" fill="none" {...props}>
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <g clipPath="url(#clip0_2541_23049)">
        <rect width="24" height="24" fill="url(#pattern0_2541_23049)" />
      </g>
      <defs>
        <pattern id="pattern0_2541_23049" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use href="#image0_2541_23049" transform="scale(0.00195312)" />
        </pattern>
        <clipPath id="clip0_2541_23049">
          <rect width="24" height="24" fill="white" />
        </clipPath>
        <image
          id="image0_2541_23049"
          width="512"
          height="512"
          href="data:image/png;base64,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"
        />
      </defs>
    </svg>
  </Icon>
)