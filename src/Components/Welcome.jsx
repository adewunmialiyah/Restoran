import Btn from "./Btn";
import { motion } from "framer-motion";

export default function Welcome() {
  const Zoom = {
    initial: { scale: 0 },
    animate: { scale: 1 },
    transition: { duration: 1, ease: "easeOut" },
  };
  return (
    <div className="flex justify-center">
      <div className="flex md:flex-row flex-col gap-10 w-[90%]">
        <motion.div className="md:w-[50%]" transition={{ duration: 3 }}>
          <div
            className="flex gap-2 md:gap-5 mb-2 md:mb-5"
          >
            <motion.div 
              initial={Zoom.initial}
              animate={Zoom.animate}
              transition={Zoom.transition}
              className="w-[50%] h-44 md:h-60 rounded-sm bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url(about-1.jpg)" }}
            ></motion.div>
            <div className="w-[50%]">
              <motion.div
                initial={Zoom.initial}
                animate={Zoom.animate}
                transition={Zoom.transition}
                className="bg-yellow-400 w-[75%] h-32 md:h-48 mt-12 rounded-sm bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: "url(about-2.jpg)" }}
              ></motion.div>
            </div>
          </div>
          <div className="flex gap-2 md:gap-5">
            <div className="w-[50%] flex justify-end">
              <motion.div
                initial={Zoom.initial}
                animate={Zoom.animate}
                transition={Zoom.transition}
                className="w-[75%] md:h-48 h-32 rounded-sm bg-cover bg-no-repeat bg-center"
                style={{ backgroundImage: "url(about-3.jpg)" }}
              ></motion.div>
            </div>
            <motion.div
              initial={Zoom.initial}
              animate={Zoom.animate}
              transition={Zoom.transition}
              className="w-[50%] md:h-60 h-44 rounded-sm bg-cover bg-no-repeat bg-center"
              style={{ backgroundImage: "url(about-4.jpg)" }}
            ></motion.div>
          </div>
        </motion.div>
        <div className="md:w-[50%] flex flex-col justify-center">
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-pacifico font-bold text-bgPrimary">
              about us{" "}
            </h1>
            <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
          </div>
          <h1 className="text-4xl font-extrabold my-4">
            Welcome to{" "}
            <span className="text-bgPrimary">
              <i className="fa-solid fa-utensils"></i>
            </span>{" "}
            Restoran
          </h1>
          <p className="text-slate-700">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem
            sit.
          </p>
          <p className="my-4 text-slate-700">
            Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
            diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
            lorem sit clita duo justo magna dolore erat amet
          </p>
          <div className="flex flex-col md:flex-row md:gap-0 gap-5 justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-1 h-14 bg-bgPrimary"></div>
                <p className="text-5xl font-extrabold text-bgPrimary">15</p>
              </div>
              <p className="text-slate-700">
                Years of
                <br />
                <span className="text-xl font-bold text-bgSecondary">
                  Experience
                </span>
              </p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex gap-4 items-center">
                <div className="w-1 h-14 bg-bgPrimary"></div>
                <p className="text-5xl font-extrabold text-bgPrimary">50</p>
              </div>
              <p className="text-slate-700">
                Popular
                <br />
                <span className="text-xl font-bold text-bgSecondary">
                  Master Chefs
                </span>
              </p>
            </div>
          </div>
          <Btn text="Read More" />
        </div>
      </div>
    </div>
  );
}
