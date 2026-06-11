export default function Footer() {
  return (
    <div className="bg-bgSecondary flex justify-center">
      <div className="w-[90%]">
        <div className="flex flex-col md:flex-row gap-8 md:gap-0 justify-between text-bgTertiary py-14">
          <div className="md:w-[24%]">
            <div className="flex gap-3 items-center font-pacifico text-2xl text-bgPrimary mb-4">
              <h1>Company</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <p>About Us</p>
            <p className="my-2">Contact Us</p>
            <p>Reservation</p>
            <p className="my-2">Privacy Policy</p>
            <p>Teams & Condition</p>
          </div>
          <div className="md:w-[24%]">
            <div className="flex gap-3 items-center font-pacifico text-2xl text-bgPrimary">
              <h1>Contact</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <div className="my-4">
              <div className="flex gap-4">
                <p>
                  <i className="fa-solid fa-location-dot"></i>
                </p>
                <p>123 Street, New York, USA</p>
              </div>
              <div className="flex gap-4 my-2">
                <p>
                  <i className="fa-solid fa-phone"></i>
                </p>
                <p>09038186039</p>
              </div>
              <div className="flex gap-4">
                <p>
                  <i className="fa-solid fa-envelope"></i>
                </p>
                <p>info@example.com</p>
              </div>
            </div>
            <div className="flex gap-1">
              <p className="h-10 w-10 rounded-full border hover:bg-bgTertiary hover:text-bgPrimary duration-500 border-bgTertiary flex justify-center items-center">
                <i className="fa-brands fa-twitter"></i>
              </p>
              <p className="h-10 w-10 rounded-full border border-bgTertiary hover:bg-bgTertiary hover:text-bgPrimary duration-500  flex justify-center items-center">
                <i className="fa-brands fa-facebook-f"></i>
              </p>
              <p className="h-10 w-10 rounded-full border hover:bg-bgTertiary hover:text-bgPrimary duration-500  border-bgTertiary flex justify-center items-center">
                <i className="fa-brands fa-instagram"></i>
              </p>
              <p className="h-10 w-10 rounded-full border hover:bg-bgTertiary hover:text-bgPrimary duration-500  border-bgTertiary flex justify-center items-center">
                <i className="fa-brands fa-youtube"></i>
              </p>
            </div>
          </div>
          <div className="md:w-[24%]">
            <div className="flex gap-3 items-center font-pacifico text-2xl text-bgPrimary">
              <h1>Opening</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <div className="my-4">
              <p>Monday - Saturday</p>
              <p>09AM - 09PM</p>
            </div>
            <div>
              <p>Sunday</p>
              <p>10AM - 08PM</p>
            </div>
          </div>
          <div className="md:w-[24%]">
            <div className="flex gap-3 items-center font-pacifico text-2xl text-bgPrimary">
              <h1>Newsletter</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <p className="my-4">
              Dolor amet sit justo amet elitr clita ipsum elitr est.
            </p>
            <input
              type="email"
              name="Email"
              placeholder="Your E-mail"
              className="p-4 w-[100%] text-bgSecondary focus:outline-none rounded focus:border-2 focus:border-bgPrimary relative"
            />
            <button className="px-4 py-3 bg-bgPrimary text-bgTertiary font-bold absolute right-[66px] rounded-sm mt-1">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md:items-center justify-between text-bgTertiary border-t border-t-slate-600 py-5">
          <div className="flex">
            <p className="text-center md:text-start"><span className="underline">Restoran,</span> All Right Reserved. Designed By <span className="underline">Shalom</span></p>
          </div>
          <div className="flex gap-4">
            <p>Home</p>
            <p>Cookies</p>
            <p>Help</p>
            <p>FQAs</p>
          </div>
        </div>
      </div>
    </div>
  );
}
