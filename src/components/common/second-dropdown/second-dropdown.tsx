import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {Props} from './type'

export const SecondDropdown = ({options, children}: Props) => (
  <DropdownMenu>
    <DropdownMenuTrigger asChild>{children}</DropdownMenuTrigger>
    <DropdownMenuContent className="w-[140px] border border-[#D6DDEB] border-solid rounded-[12px] p-2">
      {options?.map((opt, index) => (
        <DropdownMenuItem
          key={index}
          onClick={(event: React.MouseEvent<HTMLDivElement | HTMLButtonElement>) => opt.onClick(event as any)}
          className="p-2 flex items-center gap-x-1 rounded-[10px] cursor-pointer text-sm font-medium lg:leading-[19.6px] text-left text-[#6E86FF] hover:!text-white hover:!bg-[#6E86FF]"
        >
          {opt.icon}
          <span>{opt.label}</span>
        </DropdownMenuItem>
      ))}
    </DropdownMenuContent>
  </DropdownMenu>
)
