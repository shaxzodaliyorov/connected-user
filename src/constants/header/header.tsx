import { Grid, GridAdd, Notification, Settings, User } from "@/icons";
import { Like } from "@/icons/like";
import { Logout } from "@/icons/logout";

export const HEADER_PUBLIC_LINKS = [
  {
    label: "Jobs",
    path: "/jobs",
  },
  {
    label: "Match Up",
    path: "/match-up",
  },
  // {
  //   label: "Visa Roadmap",
  //   path: "/visa-roadmap",
  // },
  {
    label: "Skill Level Test",
    path: "/skill-level-test",
  },
  {
    label: "Visa News",
    path: "/visa-news",
  },
  {
    label: "Chat",
    path: "/chat",
  },
];

export const DASHBOARD_LINKS = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: <Grid className="w-6 h-6" />,
  },
  {
    label: "Application",
    path: "/application",
    icon: <GridAdd className="w-6 h-6 text-[#7D7D7D]" />,
  },
  {
    label: "Notification",
    path: "/notifications",
    icon: <Notification className="w-6 h-6" />,
  },
  {
    label: "Resume",
    path: "/my-resume",
    icon: <User className="w-6 h-6" />,
  },
  {
    label: "Saved Jobs",
    path: "/saved-jobs",
    icon: <Like className="w-6 h-6" />,
  },
  {
    label: "Settings",
    path: "/settings",
    icon: <Settings className="w-6 h-6" />,
  },
  {
    label: "Logout",
    path: "/logout",
    icon: <Logout className="w-6 h-6" />,
  },
];
