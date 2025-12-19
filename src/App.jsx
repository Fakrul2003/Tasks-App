import Footer from "./Components/genarel/Footer";
import Hader from "./Components/genarel/Hader";
import HeroSecton from "./Components/genarel/HeroSecton";
import TaskBoard from "./Components/text/TaskBoard";


export default function App() {
  return (
    <div>
      <Hader/>
      <div className="flex flex-col justify-center items-center">
        <HeroSecton/>
        <TaskBoard/>
      </div>

      <Footer/>
    </div>
  )
}
