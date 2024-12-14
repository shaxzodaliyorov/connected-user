import {Calculate, Cards, Connected, Main, NewPositions, Partnering, RealTime} from './_components'

export const HomePage = () => (
  <section className="p-[30px]">
    <Main />
    <RealTime />
    <Calculate />
    <NewPositions />
    <Partnering />
    <Cards />
    <Connected />
  </section>
)
