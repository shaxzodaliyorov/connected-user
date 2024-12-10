// import {Avatar} from '@/components/common'
import {Avatar} from '@/components/common'
import {DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger} from '@/components/ui/dropdown-menu'
import {DASHBOARD_LINKS} from '@/constants'
import {useGetUser} from '@/hooks'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

export const Account = () => {
  const navigate = useNavigate()
  const user = useGetUser()
  const {t} = useTranslation()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <div className="flex items-center gap-x-[15px]">
          <Avatar
            className="w-8 h-8 object-cover"
            name="JD"
            src={user?.profile_photo || '/images/user-placeholder.png'}
          />
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent className=" z-[9999] rounded-lg shadow-lg w-[150px]">
        {DASHBOARD_LINKS.map(link => (
          <DropdownMenuItem
            key={link.path}
            onClick={() => navigate(link.path)}
            className="text-[#0b0b0b] text-base font-normal cursor-pointer font-['Inter Display']"
          >
            {/* <Icons
              className={`w-6 h-6 ${link.path === '/logout' ? 'text-[#B01212] ' : 'text-[#6E86FF]'} `}
              name={link.icon as any}
            /> */}
            {t(link.label)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
