import { useState } from "react"
import Data from "../Data.json"
import { motion } from "framer-motion"

export default function Food() {
    const [open, setOpen] = useState(1)
    const handleClick = (id)=> {
        setOpen(id)
    } 
    const boxes = {
        hidden: { opacity: 0, y: 50 },
        show: { opacity: 1, y: 0 },
    }
  return (
    <div className="flex justify-center mt-16">
       <div className="bg-red- w-[90%]">
            <motion.div variants={boxes} initial='hidden' animate= 'show' transition={{duration: 1, ease: "easeInOut"}} className="flex items-center gap-4 justify-center mb-3">
                <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
                <p className="text-center text-xl font-pacifico text-bgPrimary">Food Menu</p>
                <div className="w-14 h-[2px] rounded bg-bgPrimary"></div>
            </motion.div>
            <motion.h1 variants={boxes} initial='hidden' animate= 'show' transition={{duration: 1.5, ease: "easeInOut"}} className="text-4xl font-extrabold mb-10 text-center">Most Popular Items</motion.h1>
            <motion.div variants={boxes} initial='hidden' animate= 'show' transition={{duration: 2, ease: "easeInOut"}} className="flex flex-wrap gap-8 justify-center mb-14">
                <div className={`flex items-center gap-4 cursor-pointer ${open === 1 ? 'border-b-2 border-bgPrimary' : 'border-none'}`} onClick={()=> handleClick(1)}>
                    <p><i className="fa-solid fa-mug-saucer text-bgPrimary text-3xl"></i></p>
                    <p>Popular <br/><span className="font-bold">Breakfast</span></p>
                </div>
                <div className={`flex items-center gap-4 cursor-pointer ${open === 2 ? 'border-b-2 border-bgPrimary' : 'border-none'}`} onClick={()=> handleClick(2)}>
                    <p><i className="fa-solid fa-burger text-bgPrimary text-3xl"></i></p>
                    <p>Special <br/><span className="font-bold">Launch</span></p>
                </div>
                <div className={`flex items-center gap-4 cursor-pointer ${open === 3 ? 'border-b-2 border-bgPrimary' : 'border-none'}`} onClick={()=> handleClick(3)}>
                    <p><i className="fa-solid fa-utensils text-bgPrimary text-3xl"></i></p>
                    <p>Lovely<br/><span className="font-bold">Dinner</span></p>
                </div>
            </motion.div>
            {/* content */}
            <div>
                <div className={`${open === 1 ? 'flex':'hidden'}`}>
                    <motion.div className="grid md:grid-cols-2 grid-rows-5 gap-4 w-[100%]" variants={boxes} initial='hidden' animate= 'show' transition={{duration: 2.5, ease: "easeInOut"}}>
                        {Data.map((items, index)=><div key={index}>
                            <div className="flex gap-4">
                                <div>
                                    <img src={items.image} alt="" className="rounded-sm" />
                                </div>
                                <div className="w-[80%]">
                                    <div className="flex text-xl font-extrabold justify-between border-b pb-2">
                                        <p>{items.title}</p>
                                        <p className="text-bgPrimary">${items.price}</p>
                                    </div>
                                    <p>{items.text}</p>
                                </div>
                            </div>
                        </div>)}
                    </motion.div>
                </div>
                <div className={`${open === 2 ? 'flex':'hidden'}`}>
                    <p>So good to see you</p>
                </div>
                <div className={`${open === 3 ? 'flex':'hidden'}`}>
                    <p>Lovely</p>
                </div>
            </div>
       </div>
    </div>
  )
}
