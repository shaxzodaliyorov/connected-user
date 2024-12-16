import {Button} from '@/components'
import {MainCard} from '@/components/main-card'
import {SkillLevelTestIcons} from '@/icons'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link, useNavigate} from 'react-router-dom'
import {CategoryCard, QuestionCard} from './components'
import {SKILL_CATEGORIES} from '@/constants'

const questions = [
  {
    id: 1,
    title: 'What is the Skill Level Test?',
    content:
      'The Skill Level Test evaluates your expertise in specific job-related skills and provides a certificate recognized by Korean companies. You can choose from various fields like technology, management, design, or language proficiency.',
  },
  {
    id: 2,
    title: 'Is the certification recognized in South Korea?',
    content: 'This is a question',
  },
  {
    id: 3,
    title: 'How long does the test take?',
    content: 'This is a question',
  },
  {
    id: 4,
    title: 'WIn which languages is the test available?',
    content: 'This is a question',
  },
]

export const SkillLevelTest = () => {
  const navigate = useNavigate()
  return (
    <section className="w-full">
      <div className="w-full container">
        <div className="py-6">
          <Link to="/" className="flex items-center gap-x-2">
            <span>
              <MdOutlineArrowBackIos />
            </span>
            Back
          </Link>
        </div>
        <MainCard className="flex justify-between items-center">
          <div>
            <Button
              leftIcon={<SkillLevelTestIcons />}
              variant="secondary"
              className="rounded-full pb-[10px] px-6 text-#0C0C0C"
            >
              Skill level test
            </Button>
            <div className="pt-[49px]">
              <h1 className="w-[65%] text-[32px] text-[#0C0C0C] font-medium">
                Evaluate your skills and receive a certified qualification!
              </h1>
            </div>
            <div className="pt-[14px]">
              <p className="w-[75%] text-xl font-normal text-[#0C0C0C]">
                Take our professional test to showcase your capabilities and stand out to employers.
              </p>
            </div>
            <div className="pt-6">
              <Button onClick={() => navigate('/skill-level-test/test?testSetup=start')} variant="primary">
                Start Your Test
              </Button>
            </div>
          </div>
          <div>
            <img src="./images/skill-level-test.svg" alt="" />
          </div>
        </MainCard>

        <div className="pt-[120px]">
          <div className="pb-6">
            <h3 className="text-[32px] font-medium leading-[38.72px] text-left">Skill Categories</h3>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {SKILL_CATEGORIES.map((item, index) => (
              <CategoryCard key={index} icon={item.icon} title={item.title} description={item.description} />
            ))}
          </div>
        </div>
        <div className="pt-[120px]">
          <div className="pb-6">
            <h3 className="text-[32px] font-medium leading-[38.72px] text-left">Frequently asked questions</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {questions.map((item, index) => (
              <QuestionCard key={index} title={item.title} content={item.content} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
