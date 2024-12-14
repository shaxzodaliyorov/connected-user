import {useLocation} from 'react-router-dom'
import {Props} from './types'
import {useMemo} from 'react'
import {AUTH_ROUTE} from '@/constants'
import {Footer, Header} from './components'
import {HIDE_FOOTER} from '@/constants/routes'

export const MainLayout = ({children}: Props) => {
  const {pathname} = useLocation()

  const isAuthRoute = useMemo(() => Object.values(AUTH_ROUTE).some(route => pathname.includes(route)), [pathname])
  const isHideFooter = useMemo(() => Object.values(HIDE_FOOTER).some(route => pathname.includes(route)), [pathname])

  return (
    <>
      {!isAuthRoute && <Header />}
      <div className={`${!isAuthRoute && 'pt-8 xl:pt-[90px]'}`}>{children}</div>
      {!isAuthRoute ? !isHideFooter ? <Footer /> : '' : ''}
    </>
  )
}
