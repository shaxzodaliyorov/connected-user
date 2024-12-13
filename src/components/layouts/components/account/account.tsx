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
      <DropdownMenuContent className=" z-[9999] rounded-lg shadow-lg w-[198px]">
        <div className="pt-5  px-6 pb-4 border-b border-b-neutral-100">
          <p className="text-[#0b0b0b] text-base font-normal leading-[17.60px]">{user.full_name}</p>
        </div>
        <div className="pt-4 flex flex-col gap-y-[13px]">
          {DASHBOARD_LINKS.map(link => (
            <DropdownMenuItem
              key={link.path}
              onClick={() => navigate(link.path)}
              className="text-[#0b0b0b] text-base py-[7px] flex gap-x-[10px] px-6 font-normal cursor-pointer font-['Inter Display']"
            >
              <div className={`${link.path === '/logout' ? 'text-[#F13325]' : 'text-[#7D7D7D]'}`}>{link.icon}</div>
              <p className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-[17.60px]">
                {t(link.label)}
              </p>
            </DropdownMenuItem>
          ))}
        </div>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
