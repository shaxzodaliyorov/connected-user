import {ROUTES_NAME} from '@/enum'
import {HomePage, SignIn, SignUp} from '@/pages'

export const ROUTES = [
  {
    path: ROUTES_NAME.HOME,
    element: <HomePage />,
  },
  {
    path: ROUTES_NAME.SIGN_UP,
    element: <SignUp />,
  },
  {
    path: ROUTES_NAME.SIGNIN,
    element: <SignIn />,
  },
]
