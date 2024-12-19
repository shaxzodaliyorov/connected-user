import {Button, Select} from '@/components'
import {MainCard} from '@/components/main-card'
import {Popover, PopoverContent, PopoverTrigger} from '@/components/ui/popover'
import {LANGUAGES} from '@/constants'
import {Duration, Language, Questions, TestTypes} from '@/icons'
import {useState} from 'react'
import {useTranslation} from 'react-i18next'
import {useNavigate} from 'react-router-dom'

const ACCESSIBILITY = [
  {
    label: 'On',
    value: 'on',
  },
  {
    label: 'Off',
    value: 'off',
  },
]

const PROGRAMMING_LANGUAGES = [
  {
    label: 'Python',
    value: 'python',
  },
  {
    label: 'Cand C+',
    value: 'candc',
  },
  {
    label: 'Go',
    value: 'go',
  },
  {
    label: 'Java',
    value: 'java',
  },
  {
    label: 'JavaScript',
    value: 'javascript',
  },
  {
    label: 'Kotlin',
    value: 'kotlin',
  },
  {
    label: 'Php',
    value: 'php',
  },
  {
    label: 'Php',
    value: 'php',
  },
  {
    label: 'Reactjs',
    value: 'reactjs',
  },
]

export const Start = () => {
  const [accessibility, setAccessibility] = useState<string>('off')
  const [language, setLanguage] = useState('en')
  const [skill, setSkill] = useState<string>('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const navigate = useNavigate()

  const {t} = useTranslation()

  const startTest = () => {
    setIsSubmitted(true)
    if (skill && accessibility && language) {
      navigate(
        `/skill-level-test/test?testSetup=test&skill=${skill}&language=${language}&accessibility=${accessibility}&currentQuestion=0`,
      )
    }
  }

  return (
    <MainCard className="mt-6">
      <div className="flex justify-between">
        <h1 className="text-[32px] font-semibold leading-[51.2px] text-left text-[#161C1C]">{t('Skill Assessment')}</h1>
        <div className="flex gap-x-[50px]">
          <div className="flex items-center gap-x-2">
            <span>{t('Accessibility mode')}:</span>
            <Popover>
              <PopoverTrigger>
                <button className="flex font-[600] items-center gap-x-2">
                  {ACCESSIBILITY.find(c => c.value === accessibility)?.label}{' '}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                {ACCESSIBILITY.filter(c => c.value !== accessibility).map(({label, value}) => (
                  <button onClick={() => setAccessibility(value)} key={value}>
                    {label}
                  </button>
                ))}
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex items-center gap-x-2">
            <span>Language:</span>
            <Popover>
              <PopoverTrigger>
                <button className="flex font-[600] items-center gap-x-2">
                  {LANGUAGES.find(c => c.value === language)?.label}{' '}
                  {/* <Icons className="w-[12px] h-[7px]" name="arrow-down-bold" />{' '} */}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto">
                <div className="flex flex-col">
                  {LANGUAGES.filter(c => c.value !== language).map(({label, value}) => (
                    <button onClick={() => setLanguage(value)} key={value}>
                      {label}
                    </button>
                  ))}
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>

      <div className="pt-8">
        <Select
          options={PROGRAMMING_LANGUAGES}
          label="Select Your Skill Test"
          className="max-w-[499px]"
          placeholder="Language Proficiency"
          value={skill}
          onChange={value => setSkill(value)}
          errorMessage={!skill && isSubmitted ? 'Please select your skill test' : undefined}
        />
      </div>
      <div>
        <p className="text-xl mt-6 font-semibold leading-8 text-left">{t('Test Overview')}</p>
        <ul className="list-disc pl-5 mt-2 space-y-1">
          <li className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
            Each test is designed to evaluate your expertise in your chosen field.
          </li>
          <li className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
            Tests are timed and include multiple-choice questions, practical tasks, and situational assessments.
          </li>
          <li className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
            After completing the test, you will receive a skill certificate recognized by companies in South Korea.
          </li>
          <li className="text-base font-normal leading-6 text-left text-[#0C0C0C]">
            If you're not satisfied with your results, you can retake the test after a 7-day period to allow time for
            review and <br /> improvement. Your highest score will be recorded, and you can continue to enhance your
            certificate over time.
          </li>
        </ul>
      </div>
      <div className="pt-10">
        <p className="text-xl font-semibold leading-8 text-left">{t('Breakdown')}</p>
        <div className="w-full flex justify-between items-start">
          <div className="flex flex-col pt-4">
            <p className="text-base flex gap-2 items-center text-[#7D7D7D]">
              <span>
                <Duration className="w-4 h-4 " />
              </span>
              Duration:
            </p>
            <p className="text-[16px] font-medium leading-[22.4px] text-left">30-45 minutes</p>
          </div>
          <div className="flex flex-col pt-4">
            <p className="text-base flex gap-2 items-center text-[#7D7D7D]">
              <span>
                <Questions className="w-4 h-4 " />
              </span>
              Number of Questions:
            </p>
            <p className="text-[16px] font-medium leading-[22.4px] text-left">15 questions</p>
          </div>
          <div className="flex flex-col pt-4">
            <p className="text-base flex gap-2 items-center text-[#7D7D7D]">
              <span>
                <Language className="w-4 h-4 " />
              </span>
              Languages Available:
            </p>
            <p className="text-[16px] font-medium leading-[22.4px] text-left">
              English, Korean, Chinese,
              <br /> Vietnamese, and more
            </p>
          </div>
          <div className="flex flex-col pt-4">
            <p className="text-base flex gap-2 items-center text-[#7D7D7D]">
              <span>
                <TestTypes className="w-4 h-4 " />
              </span>
              Test Types:
            </p>
            <p className="text-[16px] font-medium leading-[22.4px] text-left">
              Beginner, Intermediate, <br /> Advanced, Expert
            </p>
          </div>
        </div>
      </div>
      <div className="pt-[70px] flex gap-4 justify-end">
        <Button variant="outline" className="px-16 py-[13px]">
          Practice
        </Button>
        <Button onClick={startTest} variant="primary" className="px-[75px] py-[13px]">
          Start
        </Button>
      </div>
    </MainCard>
  )
}
