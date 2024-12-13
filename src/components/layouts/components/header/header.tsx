import {Input} from '@/components/common'
import {Link} from 'react-router-dom'
import {IoSearch} from 'react-icons/io5'
import {HEADER_PUBLIC_LINKS, PRIVATE_ROUTES} from '@/constants'
import {useGetUser} from '@/hooks'
import {LanguageDropdown} from '../language-dropdown'
import {useTranslation} from 'react-i18next'
import {FiUser} from 'react-icons/fi'
import {MdLogin} from 'react-icons/md'
import {Account} from '../account'

export const Header = () => {
  const user = useGetUser()
  const {t} = useTranslation()
  return (
    <div className="w-full  h-[58px] fixed z-20 top-4 left-1/2 -translate-x-1/2 ">
      <header className=" h-full w-full container px-5 justify-between flex items-center bg-white rounded-[15px]">
        <div className="flex items-center gap-x-6">
          <Link to="/">
            <img src="/images/logo.svg" alt="urconnected logo" />
          </Link>
          <div>
            <Input
              placeholder="Search"
              wrapperClassName="!bg-[#FAFAFA] rounded-lg border-none"
              inputSizeClassName="!h-[38px] w-[255px] "
              rightIcon={<IoSearch />}
              className="!bg-[#FAFAFA]"
            />
          </div>
          <div className="flex gap-x-[36px]">
            {HEADER_PUBLIC_LINKS.filter(item => (user ? true : !PRIVATE_ROUTES.includes(item.path))).map(item => (
              <Link
                key={item.path}
                className="text-[#0b0b0b] link text-base font-normal font-['Inter Display']"
                to={item.path}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex gap-x-8 ">
          <LanguageDropdown />
          {!user && (
            <div className="flex  items-center gap-x-[36px]">
              <Link
                to="/sign-in"
                className="text-[#0b0b0b] flex items-center gap-x-[6px] text-base font-medium font-['Inter Display']"
              >
                <FiUser />
                {t('For Employer')}
              </Link>
              <Link
                to="/sign-in"
                className="text-[#0b0b0b] flex items-center gap-x-[6px] text-base font-medium font-['Inter Display']"
              >
                <MdLogin />
                {t('Sign in')}
              </Link>
            </div>
          )}
          {user && <Account />}
        </div>
      </header>
    </div>
  )
}
