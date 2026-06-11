import { NavLink } from "react-router-dom"
import { useState } from "react"
import Testimony from "../Components/Testimony"
export default function Test() {
  const [active, setActive] = useState('home')
  const click = (link) =>{
    setActive(link)
  }
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center flex items-center justify-center h-[60vh] mb-16" style={{backgroundImage:'url(landing.png)'}}>
        <div className="text-center text-bgTertiary">
          <h1 className="text-6xl font-extrabold">Testimonial</h1>
          <ul className="flex justify-center gap-3 font-semibold mt-4">
            <li><NavLink to='/' onClick={()=>click('home')} className={active === 'home'?'text-bgPrimary': 'text-white'}>Home</NavLink></li>
            <p>/</p>
            <li><NavLink to='/testimony'>Testimonial</NavLink></li>
          </ul>
        </div>
      </div>
      <Testimony />
    </div>
  )
}
