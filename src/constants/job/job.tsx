import {Commuter, GiveBack, Healthcare, SkillDev, StudentIcon, Summits, Unlimited, Working} from '@/icons'
import {CertificateIcon} from '@/icons/certificat'
import {ChartIcon} from '@/icons/chart'
import {CheckVerifyIcon} from '@/icons/check-verify'
import {InternetIcon} from '@/icons/internet'
import {LaptopIcon} from '@/icons/labtop'
import {MessageIcon} from '@/icons/message'
import {Student2Icon} from '@/icons/student-2'
import React from 'react'

export type QualificationType = {
  name: string
  icon: React.ReactNode
}

export type BenefitType = {
  name: string
  icon: React.ReactNode
}

export const QUALIFICATIONS: QualificationType[] = [
  {
    name: 'Bachelor Degree or Higher',
    icon: <StudentIcon />,
  },
  {
    name: '1-2 years of experience',
    icon: <ChartIcon />,
  },
  {
    name: 'Associate Degree',
    icon: <Student2Icon />,
  },
  {
    name: 'Korean Proficiency',
    icon: <InternetIcon />,
  },

  {
    name: 'Relevant Certification',
    icon: <CheckVerifyIcon />,
  },
  {
    name: 'English Proficiency',
    icon: <InternetIcon />,
  },
  {
    name: 'Teaching Certificate',
    icon: <CertificateIcon />,
  },

  {
    name: 'Basic IT skills',
    icon: <LaptopIcon />,
  },
  {
    name: '3-5 years of experience',
    icon: <ChartIcon />,
  },
  {
    name: 'Strong Communication',
    icon: <MessageIcon />,
  },
]

export const BENEFIT: BenefitType[] = [
  {
    name: 'Full Healthcare',
    icon: <Healthcare className="text-[#1289F8]" />,
  },
  {
    name: 'Skill Development',
    icon: <SkillDev className="text-[#1289F8]" />,
  },
  {
    name: 'Team Summits',
    icon: <Summits className="text-[#1289F8]" />,
  },
  {
    name: 'Unlimited Vacation',
    icon: <Unlimited className="text-[#1289F8]" />,
  },
  {
    name: 'Remote Working',
    icon: <Working className="text-[#1289F8]" />,
  },
  {
    name: 'Commuter Benefits',
    icon: <Commuter className="text-[#1289F8]" />,
  },
  {
    name: 'We give back',
    icon: <GiveBack className="text-[#1289F8]" />,
  },
  // {
  //   name: 'Work Visa Sponsorship',
  //   icon: 'visa',
  // },
  // {
  //   name: 'Housing Allowance',
  //   icon: 'home',
  // },
  // {
  //   name: 'Paid Language Courses',
  //   icon: 'paid',
  // },
]
