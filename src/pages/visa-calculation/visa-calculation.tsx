import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {CalculationCard} from './components'

export const VisaCalculation = () => (
  <section className="w-full">
    <div className="container w-full">
      <Link to="/" className="flex items-center gap-x-2">
        <span>
          <MdOutlineArrowBackIos />
        </span>
        Back
      </Link>
      <CalculationCard />
    </div>
  </section>
)
