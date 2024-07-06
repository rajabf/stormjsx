import heroBgImg from "../assets/images/Mask.png";

function SiteHero() {
  let heroText = document.createElement;
  return (
    <div
      className=" py-24 lg:pl-[165px] bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${heroBgImg})` }}
    >
      <h2 className="text-6xl font-sfPro font-bold text-white mb-14">
        ZAMON TALAB QILADIGAN <br /> KASBLARNI O'RGANING
      </h2>
      <form action="search" className="lg:w-[920px] relative">
        <input
          className="lg:w-[920px] py-3 border pl-4"
          type="text"
          name="search"
          id="search"
          placeholder="Kurslar bo’yicha izlash"
        />
        <button className="absolute right-1 top-1 bg-buttonColor py-2 px-3 text-white ">
          Izlash
        </button>
      </form>
    </div>
  );
}

export default SiteHero;
