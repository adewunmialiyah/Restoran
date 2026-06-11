import { useState } from "react";
import { motion } from "framer-motion";

const services = [
  {
    id: 1,
    icon: <i className="fa-solid fa-user-tie"></i>,
    title: "Master Chefs",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 2,
    icon: <i className="fa-solid fa-utensils"></i>,
    title: "Quality Food",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 3,
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    title: "Online Order",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 4,
    icon: <i className="fa-solid fa-headset"></i>,
    title: "24/7 Service",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 5,
    icon: <i className="fa-solid fa-user-tie"></i>,
    title: "Master Chefs",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 6,
    icon: <i className="fa-solid fa-utensils"></i>,
    title: "Quality Food",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 7,
    icon: <i className="fa-solid fa-cart-shopping"></i>,
    title: "Online Order",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
  {
    id: 8,
    icon: <i className="fa-solid fa-headset"></i>,
    title: "24/7 Service",
    text: "Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam",
  },
];

// eslint-disable-next-line react/prop-types
export default function Cards({ limit = 4 }) {
  const [hover, setHover] = useState();
  const limitedData = services.slice(0, limit);

  const boxes = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 } ,
  };

  return (
    <div className="flex justify-center my-16">
      <motion.div
        className="grid grid-cols-4 grid-rows-1 w-[90%] gap-5"
        initial="hidden"
        animate="show"
      >
        {limitedData.map((content, index) => (
          <motion.div
            key={content.id}
            variants={boxes}
            initial="hidden"
            animate="show"
            transition={{
              duration: 0.5,
              ease: 'easeOut',
              delay: index * 0.5, // Delay based on index
            }}
            className={`${
              hover === index
                ? "bg-bgPrimary text-bgTertiary"
                : "bg-white text-bgSecondary"
            } py-10 px-6 cursor-pointer duration-500`}
            onMouseEnter={() => setHover(index)}
            onMouseLeave={() => setHover(null)}
          >
            <p
              className={`text-5xl ${
                hover === index ? "text-bgTertiary" : "text-bgPrimary"
              }`}
            >
              {content.icon}
            </p>
            <h1 className="font-bold text-xl my-4">{content.title}</h1>
            <p>{content.text}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
