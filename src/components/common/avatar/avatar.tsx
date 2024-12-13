import {Avatar as AvatarUI, AvatarFallback, AvatarImage} from '@/components/ui/avatar'
import {Props} from './types'
import {cn} from '@/lib/utils'

export const Avatar = ({name, src, className}: Props) => (
  <AvatarUI className={cn(className)}>
    <AvatarImage className="object-cover" src={src} alt={name} />
    <AvatarFallback>{name}</AvatarFallback>
  </AvatarUI>
)
