import { motion } from "framer-motion";
const teams = [
  {
    img: "team-1.jpg",
    name: "Anjola ",
    title: "CEO",
    id: 1
  },
  {
    img: "team-2.jpg",
    name: "Olamide",
    title: "Chief Chef",
    id: 2
  },
  {
    img: "team-3.jpg",
    name: "Shalom",
    title: "Manager",
    id: 3
  },
  {
    img: "team-4.jpg",
    name: "Peace",
    title: "Chef",
    id: 4
  },
  {
    img: "team-1.jpg",
    name: "Victor",
    title: "CEO",
    id: 5
  },
  {
    img: "team-2.jpg",
    name: "Shobowale Olamide",
    title: "Victory",
    id: 6
  },
  {
    img: "team-3.jpg",
    name: "Tomisin",
    title: "Manager",
    id: 7
  },
  {
    img: "team-4.jpg",
    name: "Nelson",
    title: "Chef",
    id: 8
  }
];

// eslint-disable-next-line react/prop-types
export default function Teams({limit = 4}) {
  const boxes = {
    hidden: { opacity: 0, y: 100 },
    show: { opacity: 1, y: 0 },
  };
  const limitedData = teams.slice(0, limit);
  return (
    <div className="mb-5 flex justify-center">
      <div className="w-[90%] relative">
        {/* Section Title */}
        <div className="flex items-center gap-4 justify-center">
          <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
          <p className="text-xl font-pacifico text-bgPrimary text-center">
            Team Members
          </p>
          <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
        </div>
        <h1 className="text-4xl font-extrabold text-bgSecondary mt-2 mb-6 text-center">
          Our Master Chefs
        </h1>
        <motion.div inherit="hidden" animate= "show" className="flex md:flex-row flex-col flex-wrap md:gap-0 gap-8 md:hover:gap-0 hover:gap-16 justify-between">
          {limitedData.map((team, index) => (
            <motion.div
              variants={boxes}
              initial = 'hidden'
              animate ='show'
              transition={{
                duration: 0.8,
                ease: 'easeOut',
                delay: index * 0.2, // Delay based on index
              }}
              key={team.id}
              className="bg-bgTertiary shadow-2xl md:w-[23%] p-4 mb-20 flex items-center flex-col group relative"
            >
              <div>
                <div className="py-2">
                  {/* Image with zoom-in and rotate effects */}
                  <img
                    src={team.img}
                    alt="Team Member"
                    className="w-52 h-52 rounded-full group-hover:scale-105 group-hover:rotate-3 object-cover transition-transform duration-500"
                  />
                </div>
                <div className="text-center mt-4">
                  <h1 className="font-bold text-xl">{team.name}</h1>
                  <p className="font-semibold">{team.title}</p>
                </div>
              </div>

              {/* Social Media Icons */}
              <div
                className="w-full absolute top-0 left-0 h-[64vh] opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              >
                <div className="flex items-center justify-center gap-4 h-full md:mt-[145px] mt-[100px]">
                  <div className="flex items-center justify-center gap-4 bg-bgTertiary w-full">
                    <p className="bg-bgPrimary px-4 py-3 text-bgTertiary rounded-t-full">
                      <i className="fa-brands fa-facebook-f"></i>
                    </p>
                    <p className="bg-bgPrimary px-4 py-3 text-bgTertiary rounded-t-full">
                      <i className="fa-brands fa-twitter"></i>
                    </p>
                    <p className="bg-bgPrimary px-4 py-3 text-bgTertiary rounded-t-full">
                      <i className="fa-brands fa-instagram"></i>
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
