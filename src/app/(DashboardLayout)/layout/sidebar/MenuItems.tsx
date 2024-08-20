import {
  IconAperture,
  IconCopy,
  IconLayoutDashboard,
  IconLogin,
  IconMoodHappy,
  IconTypography,
  IconUserPlus,
  IconKey,
  IconSettings,
  IconTicket,
  IconBox,
} from "@tabler/icons-react";

import { uniqueId } from "lodash";

const Menuitems = [
  {
    navlabel: true,
    subheader: "Home",
  },

  {
    id: uniqueId(),
    title: "Dashboard",
    icon: IconLayoutDashboard,
    href: "/",
  },
  {
    navlabel: true,
    subheader: "Utilities",
  },
{
    id: uniqueId(),
    title: "Typography",
    icon: IconTypography,
    href: "/utilities/typography",
  },
  {
    id: uniqueId(),
    title: "Shadow",
    icon: IconCopy,
    href: "/utilities/shadow",
  },
  {
    id: uniqueId(),
    title: "Settings",
    icon: IconSettings,
    href: "/utilities/settings",
  },
  {
    navlabel: true,
    subheader: "Auth",
  },
{
    id: uniqueId(),
    title: "Login",
    icon: IconLogin,
    href: "/authentication/login",
  },
  {
    id: uniqueId(),
    title: "Register",
    icon: IconUserPlus,
    href: "/authentication/register",
  },
  {
    id: uniqueId(),
    title: "Reset Password",
    icon: IconKey,
    href: "/authentication/reset-password",
  },
  {
    navlabel: true,
    subheader: "Extra",
  },
{
    id: uniqueId(),
    title: "Icons",
    icon: IconMoodHappy,
    href: "/icons",
  },
  {
    id: uniqueId(),
    title: "Sample Page",
    icon: IconAperture,
    href: "/sample-page",
  },
  {
    id: uniqueId(),
    title: "Support Ticket",
    icon: IconTicket,
    href: "/support-ticket",
  },
  {
    id: uniqueId(),
    title: "Products",
    icon: IconBox,
    href: "/products",
  },
];

export default Menuitems;
