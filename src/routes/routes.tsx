import {ROUTES_NAME} from '@/enum'
import {
  Application,
  Company,
  ContactPage,
  CreateResume,
  ForgotPassword,
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
  ResumeDetails,
  SavedJobs,
  SettingsPage,
  SignIn,
  SignUp,
  SkillLevelTest,
  SkillTestPage,
  VisaNewDetails,
  VisaNews,
  VisaRoadMapPage,
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
    path: ROUTES_NAME.SKILL_LEVEL_START_TEST,
    element: <SkillTestPage />,
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
    path: ROUTES_NAME.DASHBOARD,
    element: <Profile />,
  },
  {
    path: ROUTES_NAME.MY_RESUME,
    element: <MyResume />,
  },
  {
    path: ROUTES_NAME.FORGOT_PASSWORD,
    element: <ForgotPassword />,
  },
  {
    path: ROUTES_NAME.ADD_RESUME,
    element: <CreateResume />,
  },
  {
    path: ROUTES_NAME.VISA_ROADMAP,
    element: <VisaRoadMapPage />,
  },
  {
    path: ROUTES_NAME.RESUME_DETAIL,
    element: <ResumeDetails />,
  },
]
