/* eslint-disable unicorn/no-null */
import {useManageQuery, useQuery} from '@/hooks'
import {Props} from './types'
import {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {useTranslation} from 'react-i18next'
import {Button} from '@/components'
import {motion} from 'framer-motion'
import {MainCard} from '@/components/main-card'
import {ListIcons} from '@/icons'

export const Test = ({setScore, score, quiz, setQuiz}: Props) => {
  const query = useQuery()
  const currentQuestion = Number(query.get('currentQuestion')) || 0
  const language = query.get('language')
  const [userAnswers, setUserAnswers] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)
  const [timeLeft, setTimeLeft] = useState<number>(20 * 60)

  const navigate = useNavigate()
  const {getQuery, addQuery} = useManageQuery()
  const {t} = useTranslation()

  const fetchQuiz = async () => {
    const response = await fetch(`/questions/${getQuery('skill')}.json`)
    const data = await response.json()
    setQuiz(data.middle)
  }

  const setAddAnswer = (selectedOption: string) => {
    const updatedAnswers = [...userAnswers]
    updatedAnswers[currentQuestion] = selectedOption
    setUserAnswers(updatedAnswers)
    setError(null)
  }

  const nextQuestionHandler = () => {
    if (!userAnswers[currentQuestion]) {
      setError('Please select an option before proceeding.')
      return
    }

    const nextQuestion = currentQuestion + 1
    if (nextQuestion < quiz.length) {
      navigate(
        `/skill-level-test/test?testSetup=test&language=${language}&accessibility=${query.get('accessibility')}&currentQuestion=${nextQuestion}&skill=${query.get('skill')}`,
        {replace: true},
      )
    }
  }

  const calculateScore = () => {
    let correctAnswers = 0
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === quiz[index]?.answer) {
        correctAnswers++
      }
    })
    setScore(correctAnswers)
  }

  const submitHandler = () => {
    if (!userAnswers[currentQuestion]) {
      setError('Please select an option before submitting.')
      return
    }

    calculateScore()
    addQuery({
      testSetup: 'congratulations',
    })
  }

  useEffect(() => {
    const handleBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }
    window.addEventListener('beforeunload', handleBeforeUnload)
    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])

  useEffect(() => {
    fetchQuiz()
  }, [])

  useEffect(() => {
    if (timeLeft > 0) {
      const timerId = setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1)
      }, 1000)

      return () => clearInterval(timerId)
    } else {
      alert('Time is up!')
      submitHandler()
    }
  }, [timeLeft])

  useEffect(() => {
    const redirectTimeout = setTimeout(
      () => {
        navigate('/skill-level-test')
      },
      20 * 60 * 1000,
    )

    return () => clearTimeout(redirectTimeout)
  }, [navigate])

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`
  }

  return (
    <>
      <MainCard className="mt-6">
        <div className="w-full flex justify-between">
          <h1 className="text-[#0b0b0b] text-[32px] font-medium font-['Inter Display'] leading-[41.60px]">
            {t('Manufacturing & Industrial Skill')}
          </h1>
          <p className="text-[32px] font-normal leading-[51.2px] text-[#6E86FF] text-left">{formatTime(timeLeft)}</p>
        </div>
      </MainCard>
      <MainCard className="mt-6">
        <motion.div
          key={currentQuestion}
          initial={{opacity: 0, y: 20}}
          animate={{opacity: 1, y: 0}}
          exit={{opacity: 0, y: -20}}
          transition={{duration: 0.6}}
          className="pt-6 mb-10"
        >
          <div className="flex">
            <p className="text-[#0b0b0b] text-xl font-medium font-['Inter Display'] leading-snug">
              {quiz[currentQuestion]?.question}
            </p>
          </div>
          <div className="py-6">
            <div className=" w-[120%] mr-[-10%] h-[1px] bg-[#F5F5F5] border-solid" />
          </div>

          <div className="flex flex-col gap-y-3  pt-6">
            {quiz[currentQuestion]?.options?.map((option, index) => (
              <>
                <motion.div
                  style={{cursor: 'pointer', gap: '6px'}}
                  onClick={() => setAddAnswer(option)}
                  key={index}
                  className="flex cursor-pointer items-center gap-x-1"
                  initial={{opacity: 0, y: 20}}
                  animate={{opacity: 1, y: 0}}
                  exit={{opacity: 0, y: -20}}
                  transition={{duration: 0.4, delay: index * 0.1}}
                  whileTap={{scale: 0.95}}
                >
                  <motion.div
                    className={`w-6 h-6 rounded-full border border-[#D6DDEB] ${
                      userAnswers[currentQuestion] === option ? 'bg-[#6E86FF]' : ''
                    }`}
                    animate={{
                      backgroundColor: userAnswers[currentQuestion] === option ? '#6E86FF' : '#fff',
                      borderColor: userAnswers[currentQuestion] === option ? '#6E86FF' : '#D6DDEB',
                    }}
                    whileTap={{scale: 1.1}}
                    transition={{duration: 0.3}}
                  ></motion.div>
                  <span className="text-[#0b0b0b] text-base font-normal font-['Inter Display'] leading-normal">
                    {option}
                  </span>
                </motion.div>
                <div className="w-full h-[1px] bg-[#F5F5F5]" />
              </>
            ))}
          </div>
          {error && <p className="text-red-500 mt-4">{error}</p>}
        </motion.div>

        <div className="w-full h-[12px] overflow-hidden rounded-[64px] bg-[#E0E0E0] relative ">
          <span
            style={{width: `${((currentQuestion + 1) / quiz.length) * 100}%`}}
            className="h-full transition-all duration-200 absolute left-0 bottom-0 bg-[#12B76A]"
          ></span>
        </div>
        <div className="flex pt-6 w-full items-start justify-between">
          <div className="flex gap-x-2 items-center gap-2 bg-[#FAFAFA] px-6 py-2.5 rounded-[20px]">
            <ListIcons />
            <p>
              {currentQuestion + 1}/{quiz.length}
            </p>
          </div>

          {currentQuestion + 1 === quiz.length ? (
            <Button className="w-auto px-[80px]" onClick={submitHandler}>
              Submit
            </Button>
          ) : (
            <Button className="w-auto px-[80px]" onClick={nextQuestionHandler}>
              Next
            </Button>
          )}
        </div>

        {score !== null && (
          <div className="pt-6">
            <h2 className="text-xl">
              {t('Your Score')}: {score} / {quiz.length}
            </h2>
          </div>
        )}
      </MainCard>
    </>
  )
}