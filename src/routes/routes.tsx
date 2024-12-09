import {ROUTES_NAME} from '@/enum'
import {HomePage, SignUp} from '@/pages'

export const ROUTES = [
  {
    path: ROUTES_NAME.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES_NAME.SIGN_UP,
    element: <SignUp />,
  },
]
