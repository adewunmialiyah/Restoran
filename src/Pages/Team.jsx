import { NavLink } from "react-router-dom";
import { useState } from "react";
import Teams from "../Components/Teams";
export default function Team() {
  const [active, setActive] = useState("home");
  const click = (link) => {
    setActive(link);
  };
  return (
    <div>
      <div
        className="bg-no-repeat bg-cover bg-center flex items-center justify-center h-[60vh] mb-16"
        style={{ backgroundImage: "url(landing.png)" }}
      >
        <div className="text-center text-bgTertiary">
          <h1 className="text-6xl font-extrabold">Booking</h1>
          <ul className="flex justify-center gap-3 font-semibold mt-4">
            <li>
              <NavLink
                to="/"
                onClick={() => click("home")}
                className={active === "home" ? "text-bgPrimary" : "text-white"}
              >
                Home
              </NavLink>
            </li>
            <p>/</p>
            <li>
              <NavLink to="/about">Team</NavLink>
            </li>
          </ul>
        </div>
      </div>
      <Teams limit= {8}/>
    </div>
  );
}
