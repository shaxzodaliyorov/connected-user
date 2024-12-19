/* eslint-disable unicorn/no-null */
import {cn} from '@/lib/utils'
import {Props} from './types'

export const Image = ({alt, src, className, defaultImageSrc}: Props) => {
  const imageErrorHandler = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    const el = e.target as HTMLImageElement
    el.onerror = null
    el.src = defaultImageSrc || '/images/placeholder.webp'
  }

  return <img onError={imageErrorHandler} src={src || defaultImageSrc} alt={alt} className={cn(className)} />
}
