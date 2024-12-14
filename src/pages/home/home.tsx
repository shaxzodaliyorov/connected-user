import {Calculate, Cards, Connected, Main, Partnering, RealTime} from './_components'

export const HomePage = () => (
  <section className="p-[30px]">
    <Main />
    <RealTime />
    <Calculate />
    <Partnering />
    <Cards />
    <Connected />
  </section>
)
