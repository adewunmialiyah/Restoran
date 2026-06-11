import { NavLink } from "react-router-dom"
import { useState } from "react"
import Phone from "../Components/Phone"
import Map from "../Components/Map"
export default function Contact() {
  const [active, setActive] = useState('home')
    const click = (link) =>{
      setActive(link)
    }
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center flex items-center justify-center h-[60vh]" style={{backgroundImage:'url(landing.png)'}}>
        <div className="text-center text-bgTertiary">
          <h1 className="text-6xl font-extrabold">Contact Us</h1>
          <ul className="flex justify-center gap-3 font-semibold mt-4">
            <li><NavLink to='/' onClick={()=>click('home')} className={active === 'home'?'text-bgPrimary': 'text-white'}>Home</NavLink></li>
            <p>/</p>
            <li><NavLink to='/about' onClick={()=>click('about')} className={active === 'about'? 'text-bgPrimary':'text-white'}>Contact us</NavLink></li>
          </ul>
        </div>
      </div>
      <div className="my-24">
        <Phone />
        <Map />
      </div>
    </div>
  )
}
