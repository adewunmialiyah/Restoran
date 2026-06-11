export default function Map() {
  return (
    <div className="flex justify-center">
      <div className='flex gap-5 w-[90%]'>
        <div className='w-[50%]'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31706.038990818775!2d3.300339841883883!3d6.615223626235097!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9173e61df681%3A0x8a503f3a85dda06e!2sAgege%2C%20Lagos%20102212%2C%20Lagos!5e0!3m2!1sen!2sng!4v1730479109432!5m2!1sen!2sng" className='w-full h-[374px]' style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <form className="w-[50%]">
            <div className="flex gap-4">
                <input type="text" name="" id="" placeholder="Your Name"   className="w-[50%] p-4 rounded-sm focus:outline-none border border-slate-400 focus:border-bgPrimary focus:border-2"/>
                <input type="text" name="" id="" placeholder="Your E-mail" className="w-[50%] p-4 rounded-sm focus:outline-none border border-slate-400 focus:border-bgPrimary focus:border-2"/>
            </div>
            <input type="text" name="" id="" placeholder="Subject" className="w-[100%] p-4 rounded-sm my-4 focus:outline-none border border-slate-400 focus:border-bgPrimary focus:border-2" /><br/>
            <textarea name="" id="" cols="30" rows="5" placeholder="Message" className="w-[100%] p-4 rounded-sm focus:outline-none border focus:border-2 border-slate-400 mb-2 focus:border-bgPrimary"></textarea>
            <button className="bg-bgPrimary text-bgTertiary w-full py-4 rounded-sm font-semibold">SEND MESSAGE</button>
        </form>
      </div>
    </div>
  )
}
