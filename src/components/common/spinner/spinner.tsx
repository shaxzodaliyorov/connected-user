import React from 'react'
import {SpinnerProps} from './types'

export const Spinner: React.FC<SpinnerProps> = ({size = 24, color = '#fff', thickness = 3}) => {
  const spinnerStyles = {
    width: size,
    height: size,
    borderTopColor: color,
    borderWidth: thickness,
  }

  return (
    <div className="spinner-container flex items-center justify-center">
      <div
        className="spinner animate-spin border-solid border-transparent border-t-[3px] rounded-full"
        style={spinnerStyles}
      />
    </div>
  )
}
