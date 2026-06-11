import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react"; // Import useState to manage the active slide index

export default function Testimony() {
  const [activeIndex, setActiveIndex] = useState(0); // Store the active index

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,  // Default for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    afterChange: (current) => setActiveIndex(current += 1), // Set active index when the slide changes
    responsive: [
      {
        breakpoint: 1024,  // For medium screens (tablets and up)
        settings: {
          slidesToShow: 2,  // Show 2 slides on medium screens
        },
      },
      {
        breakpoint: 640,  // For small screens (mobile)
        settings: {
          slidesToShow: 1,  // Show 1 slide on small screens
        },
      },
    ],
  };

  return (
    <div className="mb-28 flex justify-center">
      <div className="w-[90%]">
        <div className="text-center">
        <div className="flex items-center gap-4 justify-center mb-2">
          <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
          <p className="text-center text-xl font-pacifico text-bgPrimary">Testimonies</p>
          <div className="w-14 h-[2px] rounded bg-bgPrimary"></div>
        </div>
          <h1 className="text-4xl font-extrabold my-4">Our Clients Say!!!</h1>
        </div>
        <Slider {...settings}>
          {Test.map((items, index) => (
            <div
              key={index}
              className={`bg-bgTertiary border shadow-inner rounded-sm p-5 ${
                activeIndex === index ? "bg-orange-400 text-bgTertiary" : "" // Apply orange background when the slide is active
              }`}
            >
              <p>
                <i
                  className={`fa-solid fa-quote-left text-4xl text-bgPrimary ${
                    activeIndex === index ? "text-bgTertiary" : " text-bgPrimary"
                  }`}
                ></i>
              </p>
              <p className="mb-4 mt-2">{items.text}</p>
              <div className="flex gap-4 items-center">
                <img
                  src={items.img}
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h1 className="text-xl font-bold">{items.name}</h1>
                  <p className="font-semibold">{items.Profession}</p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

const Test = [
  {
    img: "testimonial-1.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repudiandae ipsa expedita.",
    name: "Client Name",
    Profession: "Profession",
  },
  {
    img: "testimonial-2.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repudiandae ipsa expedita.",
    name: "Client Name",
    Profession: "Profession",
  },
  {
    img: "testimonial-3.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repudiandae ipsa expedita.",
    name: "Client Name",
    Profession: "Profession",
  },
  {
    img: "testimonial-4.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, repudiandae ipsa expedita.",
    name: "Client Name",
    Profession: "Profession",
  },
];
