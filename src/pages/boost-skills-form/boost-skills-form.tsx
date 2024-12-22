import {Button, DatePicker, Input, Select} from '@/components'
import {MainCard} from '@/components/main-card'
import {useState} from 'react'
import {ItemRadio} from './components'
import {Link} from 'react-router-dom'
import {MdOutlineArrowBackIos} from 'react-icons/md'

const VISA_STATUS = [
  {value: 'option1', label: 'D-10'},
  {value: 'option2', label: 'E-10'},
  {value: 'option3', label: 'A-10'},
]

const BACKGROUND = [
  {name: 'one_radio', htmlFor: '1', label: "No, I didn't graduate"},
  {name: 'one_radio', htmlFor: '2', label: 'Master'},
  {name: 'one_radio', htmlFor: '3', label: 'Bachelor'},
  {name: 'one_radio', htmlFor: '4', label: 'PhD'},
]

const SKILLS = [
  {name: 'two_radio', htmlFor: '5', label: '0'},
  {name: 'two_radio', htmlFor: '6', label: '1'},
  {name: 'two_radio', htmlFor: '7', label: '2'},
  {name: 'two_radio', htmlFor: '8', label: '3'},
  {name: 'two_radio', htmlFor: '9', label: '4'},
  {name: 'two_radio', htmlFor: '10', label: '5'},
]

const LEVEL = [
  {name: 'three_radio', htmlFor: '5n', label: '0'},
  {name: 'three_radio', htmlFor: '6n', label: '1'},
  {name: 'three_radio', htmlFor: '7n', label: '2'},
  {name: 'three_radio', htmlFor: '8n', label: '3'},
  {name: 'three_radio', htmlFor: '9n', label: '4'},
  {name: 'three_radio', htmlFor: '10n', label: '5'},
  {name: 'three_radio', htmlFor: '11n', label: '6'},
]

const IMMIGRATION = [
  {name: 'radio', htmlFor: '5y', label: 'Yes, I have '},
  {name: 'radio', htmlFor: '6y', label: 'No immigration violations.'},
]

export const BoostSkillsForm = () => {
  const [selectedValue, setSelectedValue] = useState('')

  const handleChange = (value: string) => {
    setSelectedValue(value)
  }
  return (
    <div className="w-full container">
      <div className="py-6">
        <Link to="/dashboard" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <div className="w-[60%] m-auto">
        <MainCard className="mt-8">
          <div className="flex gap-6 justify-between items-center">
            <div className="w-2/3">
              <Select
                label="Visa status"
                value={selectedValue}
                onChange={handleChange}
                options={VISA_STATUS}
                placeholder="D-10"
                size="md"
                fullWidth={true}
                className="mb-4 "
              />
            </div>
            <div className="w-1/3">
              <DatePicker
                labelClassName="-mt-[18px]"
                label="Visa expire date"
                value={new Date()}
                className="h-[56px]"
                required
              />
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium leading-[24.2px] text-left">Educational background</h3>
            <div className="grid grid-cols-2 gap-y-4 mt-5">
              {BACKGROUND.map((item, index) => (
                <ItemRadio htmlFor={item.htmlFor} name="background" key={index} label={item.label} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium leading-[24.2px] text-left">Have you finished the KIIP program?</h3>
            <div className="flex gap-x-9 items-center mt-5">
              {SKILLS.map((item, index) => (
                <ItemRadio htmlFor={item.htmlFor} name="skills" key={index} label={item.label} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium leading-[24.2px] text-left">What is your Topik level?</h3>
            <div className="flex gap-x-9 items-center mt-5">
              {LEVEL.map((item, index) => (
                <ItemRadio htmlFor={item.htmlFor} name="level" key={index} label={item.label} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <h3 className="text-xl font-medium leading-[24.2px] text-left">
              Do you have any immigration violations or punishments?
            </h3>
            <div className="flex gap-x-[161px] items-center mt-5">
              {IMMIGRATION.map((item, index) => (
                <ItemRadio htmlFor={item.htmlFor} name="violations" key={index} label={item.label} />
              ))}
            </div>
          </div>
          <div className="mt-10">
            <Input placeholder="Please specify" label="Violation" />
          </div>
          <div className="py-[30px]">
            <Button variant="primary" fullWidth>
              Submit
            </Button>
          </div>
        </MainCard>
      </div>
    </div>
  )
}
