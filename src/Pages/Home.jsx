import Btn from "../Components/Btn";
import Cards from "../Components/Cards";
import Food from "../Components/Food";
import Welcome from "../Components/Welcome";
import Teams from "../Components/Teams";
import Testimony from "../Components/Testimony";
import Contact from "../Components/Contact";
import { motion } from "framer-motion"

export default function Home() {
  const boxVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center flex items-center" style={{backgroundImage:'url(landing.png)'}}>
        <div className="flex items-center justify-center pt-40 pb-20 overflow-x-hidden">
          <div className="w-[90%] flex flex-col md:flex-row">
            <motion.div variants= {boxVariants} initial= 'hidden' animate='visible' transition={{duration: 1, ease: "easeInOut"}} className="text-bgTertiary md:w-[50%] flex flex-col justify-center md:items-start items-center">
              <h1 className="text-6xl font-extrabold leading-tight">Enjoy Our<br className=""/> Delicious Meal</h1>
              <p className="mt-3 mb-8">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
              <Btn text ='Book a Table'/>
            </motion.div>
            <div className="md:w-[50%] flex justify-end md:mt-0 mt-9">
              <img src="hero.png" alt="Delicious meal" className="animate-spin-smooth md:h-[515px]" />
            </div>
          </div>
        </div>
      </div>
      <Cards  />
      <Welcome />
      <Food />
      <Contact />
      <Teams />
      <Testimony />
    </div>
  )
}
