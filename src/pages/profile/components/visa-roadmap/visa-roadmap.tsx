import {motion} from 'framer-motion'
import {useState} from 'react'

const visaStages = ['D-10', 'E-7', 'F-2', 'F-5']

export const VisaRoadmap = () => {
  const [currentStage, setCurrentStage] = useState(0)

  const progressPercentage = (currentStage / (visaStages.length - 1)) * 100

  return (
    <div className="flex flex-col w-full p-6 bg-white rounded-lg shadow-md mt-10">
      <h2 className="font-semibold text-xl  leading-[22px] text-lef">Visa Roadmap</h2>

      <div className="relative w-full mt-4 h-2 bg-gray-200 rounded-full pt-8">
        <motion.div
          className="absolute top-0 left-0 h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
          style={{width: `${progressPercentage}%`}}
          initial={{width: 0}}
          animate={{width: `${progressPercentage}%`}}
          transition={{duration: 0.5}}
        />
      </div>
      <div className="relative flex justify-between w-full mt-4">
        {visaStages.map((stage, index) => (
          <div
            key={index}
            className="flex flex-col items-center w-1/4 cursor-pointer"
            onClick={() => setCurrentStage(index)}
          >
            <motion.div
              className={`w-8 h-8 rounded-full flex items-center justify-center ${
                index < currentStage
                  ? 'bg-green-500 text-white'
                  : index === currentStage
                    ? 'bg-green-500 text-white scale-110 shadow-lg'
                    : 'bg-gray-300 text-gray-600'
              }`}
              animate={{scale: index === currentStage ? 1.2 : 1}}
              transition={{type: 'spring', stiffness: 300}}
            >
              {index < currentStage ? '✅' : index === currentStage ? '👤' : ''}
            </motion.div>
            <span className="mt-2 text-sm font-medium text-gray-700">{stage}</span>
          </div>
        ))}
      </div>
    </div>
  )
}
