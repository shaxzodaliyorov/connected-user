import {ROUTES_NAME} from '@/enum'
import {
  ContactPage,
  HomePage,
  LogoutPage,
  NotFound,
  PrivatePolicy,
  SettingsPage,
  SignIn,
  SignUp,
  VisaNews,
} from '@/pages'

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
  {
    path: ROUTES_NAME.CONTACT_US,
    element: <ContactPage />,
  },
  {
    path: ROUTES_NAME.JOBS,
    element: <ContactPage />,
  },
  {
    path: ROUTES_NAME.PRIVACY_POLICY,
    element: <PrivatePolicy />,
  },
  {
    path: ROUTES_NAME.NOT_FOUND,
    element: <NotFound />,
  },
  {
    path: ROUTES_NAME.VISA_NEWS,
    element: <VisaNews />,
  },
  {
    path: ROUTES_NAME.SETTINGS,
    element: <SettingsPage />,
  },
  {
    path: ROUTES_NAME.LOGOUT,
    element: <LogoutPage />,
  },
]
