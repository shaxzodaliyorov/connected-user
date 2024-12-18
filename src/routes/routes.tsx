import {ROUTES_NAME} from '@/enum'
import {
  Application,
  Company,
  ContactPage,
  HomePage,
  JobDetails,
  Jobs,
  LogoutPage,
  MatchUp,
  MyResume,
  NotFound,
  NotificationDetails,
  Notifications,
  PrivatePolicy,
  Profile,
  SavedJobs,
  SettingsPage,
  SignIn,
  SignUp,
  SkillLevelTest,
  VisaNewDetails,
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
    element: <Jobs />,
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
    path: ROUTES_NAME.VISA_NEWS_DETAIL,
    element: <VisaNewDetails />,
  },
  {
    path: ROUTES_NAME.SETTINGS,
    element: <SettingsPage />,
  },
  {
    path: ROUTES_NAME.LOGOUT,
    element: <LogoutPage />,
  },
  {
    path: ROUTES_NAME.JOB_DETAIL,
    element: <JobDetails />,
  },
  {
    path: ROUTES_NAME.NOTIFICATIONS,
    element: <Notifications />,
  },
  {
    path: ROUTES_NAME.NOTIFICATION_DETAILS,
    element: <NotificationDetails />,
  },
  {
    path: ROUTES_NAME.APPLICATION,
    element: <Application />,
  },
  {
    path: ROUTES_NAME.SKILL_LEVEL_TEST,
    element: <SkillLevelTest />,
  },
  {
    path: ROUTES_NAME.SAVED_JOBS,
    element: <SavedJobs />,
  },
  {
    path: ROUTES_NAME.JOB_DETAIL_COMPANY,
    element: <Company />,
  },
  {
    path: ROUTES_NAME.MATCH_UP,
    element: <MatchUp />,
  },
  {
    path: ROUTES_NAME.PROFILE,
    element: <Profile />,
  },
  {
    path: ROUTES_NAME.MY_RESUME,
    element: <MyResume />,
  },
]
