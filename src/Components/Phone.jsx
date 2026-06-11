
export default function phone() {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[90%]">
        <div className="flex items-center gap-4 justify-center">
          <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
          <p className="text-center text-xl font-pacifico text-bgPrimary">Contact us</p>
          <div className="w-14 h-[2px] rounded bg-bgPrimary"></div>
        </div>
        <h1 className="text-[2.6em] font-extrabold text-center mb-4">Contact For Any Query</h1>
        <div className="flex gap-56 my-10">
          <div>
            <div className="flex gap-3 items-center font-pacifico text-xl text-bgPrimary mb-1">
              <h1>Booking</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <div className="flex gap-2 items-center">
              <p><i className="fa-solid fa-envelope-open text-bgPrimary"></i></p>
              <p>book@example.com</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3 items-center font-pacifico text-xl text-bgPrimary mb-1">
              <h1>General</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <div className="flex gap-2 items-center">
              <p><i className="fa-solid fa-envelope-open text-bgPrimary"></i></p>
              <p>info@example.com</p>
            </div>
          </div>
          <div>
            <div className="flex gap-3 items-center font-pacifico text-xl text-bgPrimary mb-1">
              <h1>Technical</h1>
              <p className="w-14 h-[2px] rounded bg-bgPrimary"></p>
            </div>
            <div className="flex gap-2 items-center">
              <p><i className="fa-solid fa-envelope-open text-bgPrimary"></i></p>
              <p>tech@example.com</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
