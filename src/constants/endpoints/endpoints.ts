export enum EndpointNameUserAuth {
  USER_LOGIN = 'user/login',
  USER_SIGNUP_SEND_OTP = 'user/signup-send-otp',
  USER_SIGNUP_VERIFY_OTP = 'user/signup-verify-otp',
  USER_SIGNUP = 'user/sign-up',
  USER_FORGOT_PASSWORD_SEND_OTP = 'user/forgot-send-otp',
  USER_FORGOT_PASSWORD_VERIFY_OTP = 'user/forgot-verify-otp',
  USER_FORGOT_PASSWORD = 'user/forgot-password',
  USER_UPDATE_EMAIL_SEND_OTP = 'user/update-email-send-otp',
}

export enum EndpointNameUser {
  USER_ME = 'user/me',
  USER_PROFILE = 'user/get-profile',
  UPDATE_USER_PROFILE = 'user/update',
  UPDATE_USER_EMAIL = 'user/update-email',
  UPDATE_PASSWORD = 'user/update-password',
  DELETE_USER_ACCOUNT = 'user/delete-account',
  REFRESH_TOKEN = '/user/refresh-token/',
  SET_VISA_HELP = '/user/set-visa-help',
}

export enum EndpointNameJobs {
  GET_ALL_JOBS = '/job/get-all',
  GET_FILTER_DATA = '/job/get-filter-data',
  GET_PUBLIC_JOB = '/job/get-public/',
  SET_SAVE = '/job/set-save/',
  GET_SAVE_JOB_IDS = '/job/save-job-ids',
  APPLY_JOB = '/job/apply',
  GET_SAVED_JOBS = '/job/my-save',
  GET_MY_APPLICATION = 'job/my-all-application',
  GET_TOTAL_JOBS_APPLIED = '/job/get-total-jobs-applied',
}

export enum EndpointNameUploads {
  UPLOAD_FILE = '/upload/file',
}

export enum EndpointNameVisaNews {
  GET_ALL_VISA_NEWS = '/visa-news/all',
  GET_VISA_NEWS = '/visa-news/get/',
}

export enum EndpointNameResume {
  GET_ALL_MY_RESUMES = '/resume/my-all',
  ADD_RESUME = '/resume/add',
  GET_RESUME = '/resume/get/',
  UPDATE_RESUME = '/resume/update/',
  DELETE_RESUME = '/resume/delete/',
}

export enum EndpointNameNotification {
  USER_NOTIFICATION = '/user-notification/all',
  USER_NOTIFICATION_GET = '/user-notification/get/',
  USER_NOTIFICATION_READ = '/user-notification/read-all',
}

export enum EndpointNameInfo {
  GET_ALL_UNIVERSITY = '/info/all-university',
  GET_POSITION = '/info/all-position',
  GET_ALL_COUNTRY = '/info/all-country',
  GET_ALL_NATIONALITY = '/info/all-nationality',
}

export enum EndpointNameMatchUp {
  GET_MATCH_UP_JOB = '/match-up/job',
}

export enum EndpointNameSkillLevelTest {
  GET_ALL_SKILL_TEST = '/skill-test/all',
  UPDATE_SKILL_TEST = '/skill-test/update',
}

export enum EndpointNameCompany {
  GET_COMPANY = '/company/get/',
}
