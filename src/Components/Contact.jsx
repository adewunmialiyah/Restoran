import Btn from "./Btn";
import { motion } from "framer-motion";

export default function Contact() {
    const boxes = {
        hidden: { opacity: 0, y: 100 },
        show: { opacity: 1, y: 0 },
    }
  return (
    <div className="flex md:flex-row flex-col mb-16">
        <div className="md:w-[50%] md:relative h-[84vh]">
            <video className="md:absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
                <source src="video.mp4" type="video/mp4" />
            </video>
            {/* <div className="relative z-10 text-white p-8">
                <h1 className="text-3xl font-bold">Your Content Here</h1>
                <p>This content is overlayed on top of the video.</p>
            </div> */}
        </div>


        <motion.form variants = {boxes} initial= 'hidden' animate='show' transition={{duration: 1, ease: 'easeInOut'}} action="" method="post" className="md:w-[50%] bg-bgSecondary p-6 md:p-12">
            <p className="text-2xl font-pacifico text-bgPrimary">Reservation</p>
            <h1 className="text-4xl font-extrabold text-white mt-2 mb-6">Book A Table Online</h1>
            <div className="w-[100%] flex flex-col md:flex-row justify-center gap-5">
                <div className="flex relative md:w-[50%]">
                    <input type="text" name="name" id="name" className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded"/>
                    <label htmlFor="name" className="absolute text-sm top-4 left-2 transition-all peer-focus:top-[0px] peer-focus:text-gray-500">Your Name</label>
                </div>
                <div className="flex relative md:w-[50%]">
                    <input type="email" name="E-mail" id="E-mail" className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded"/>
                    <label htmlFor="E-mail" className="absolute text-sm top-4 left-2 transition-all peer-focus:top-[0px] peer-focus:text-gray-500">Your E-mail</label>
                </div>
            </div>
            <div className="w-[100%] flex justify-center my-4 gap-4 flex-col md:flex-row">
                <div className="flex relative md:w-[50%]">
                    <input type="datetime-local" name="" id="" placeholder="transparent" className="p-3 w-full focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded" />
                    <label htmlFor="E-mail" className="absolute text-sm top-3 left-2 transition-all peer-focus:top-[0px] peer-focus:text-gray-500 peer-focus:text-sm peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400">Date&Time</label>
                </div>

                {/* <input type="" name="" id="" /> */}
                <select name="" id="" className="md:w-[50%] p-3 rounded focus:outline-none">
                    <option value="" hidden>No of people</option>
                    <option value="0">People 1</option>
                    <option value="1">People 2</option>
                    <option value="2">People 3</option>
                </select>
            </div>
            <div className="flex relative w-full mb-4">
                <textarea name="message" id="message" cols="20" rows="4" className="p-3 focus:border-2 focus:border-bgPrimary focus:outline-none peer rounded w-[100%]"></textarea>
                <label htmlFor="message" className="absolute text-sm top-4 left-2 transition-all peer-focus:top-[0px] peer-focus:text-gray-500">Message</label>
            </div>
            <Btn text="Book Now"/>
        </motion.form>
    </div>
  )
}
