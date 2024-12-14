import {MdOutlineArrowBackIos} from 'react-icons/md'
import {Link} from 'react-router-dom'
import {Account, BoldTabs, Security, VisaDetails} from './components'

export const SettingsPage = () => (
  <section className="w-full">
    <div className="w-full container">
      <div className="pt-6">
        <Link to="/" className="flex items-center gap-x-2">
          <span>
            <MdOutlineArrowBackIos />
          </span>
          Back
        </Link>
      </div>
      <div className="w-[85%] m-auto p-[30px] bg-white rounded-[15px]">
        <h4 className="text-[#0c0c0c] text-[32px] font-medium leading-[38.72px] text-left">Settings</h4>
        <div className="">
          <BoldTabs
            tabs={[
              {
                label: 'Account',
                value: 'account',
                children: <Account />,
              },
              {
                label: 'Visa details',
                value: 'visa-details',
                children: <VisaDetails />,
              },
              {
                label: 'Security',
                value: 'security',
                children: <Security />,
              },
            ]}
          />
        </div>
      </div>
    </div>
  </section>
)
