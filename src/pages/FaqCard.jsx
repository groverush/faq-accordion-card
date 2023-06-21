import { Header, Accordion, Footer } from "../components"
const FaqCard = () => {
  return (
    <main className="flex-1 bg-white rounded-2xl w-[350px] max-h-[540px]  mt-[160px] lg:flex lg:max-h-[460px] lg:mt-[130px]   lg:w-[875px] shadow-lg shadow-gray-700 ">
      <Header />
      <Accordion />
    </main>
  )
}
export default FaqCard
