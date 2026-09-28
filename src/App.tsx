import hero1 from "./assets/images/image.png"
import b_icon from "./assets/icons/b_icon.png";
import cart_icon from "./assets/icons/cart_icon.png";

const App = () => {
  return (
    <div className=" w-full bg-[#003BE2] flex flex-col justify-center items-center">
      <section className="h-dvh max-h-256 bg-[#003BE2] w-full relative">
        <header className="h-30 flex flex-col justify-center">
          <div className="relative flex items-center ga-2">
            <img src={b_icon} alt=""  className="h-[31.5px] w-[28.88px]"/>
            <h1 className="text-white">ByteSpace</h1>
          </div>
        </header>
      </section>
     
    </div>
  )
}

export default App