import FaqCard from "./pages/FaqCard"
import { Footer } from "./components"

const App = () => {
  return (
    <div className="w-screen h-screen bg-gradient-to-t from-indigo-500 to-purple-500 flex flex-col justify-between items-center">
      <FaqCard />

      <Footer />
    </div>
  )
}
export default App
