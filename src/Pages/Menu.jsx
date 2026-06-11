import { NavLink } from "react-router-dom"
import { useState } from "react"
import Food from "../Components/Food"
export default function Menu() {
  const [active, setActive] = useState('home')
  const click = (link) =>{
    setActive(link)
  }
  return (
    <div>
      <div className="bg-no-repeat bg-cover bg-center flex items-center justify-center h-[60vh] mb-16" style={{backgroundImage:'url(landing.png)'}}>
        <div className="text-center text-bgTertiary">
          <h1 className="text-6xl font-extrabold">Food Menu</h1>
          <ul className="flex justify-center gap-3 font-semibold mt-4">
            <li><NavLink to='/' onClick={()=>click('home')} className={active === 'home'?'text-bgPrimary': 'text-white'}>Home</NavLink></li>
            <p>/</p>
            <li><NavLink to='/menu' onClick={()=>click('menu')} className={active === 'about'? 'text-bgPrimary':'text-white'}>Menu</NavLink></li>
          </ul>
        </div>
      </div>
      <Food />
    </div>
  )
}
