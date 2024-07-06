import siteLogo from "../assets/images/Fill 3.svg";
import mottoBg from "../assets/images/Rectangle.png";

function SiteMotto() {
  return (
    <div className="px-[165px] mt-[124px] flex bg-white justify-between">
      <div className="pt-[80px]">
        <h2 className="text-6xl font-bold mb-[157px]">
          ISTALGAN <br />
          JOYDA. VAQTDA.
        </h2>
        <a className="flex items-center" href="/">
          <sup>
            <img
              className="w-5 h-5 rounded-full object-cover"
              src={siteLogo}
              alt="React Logo"
            />
          </sup>
          <h1 className="text-2xl font-bold m-2 ">STORM</h1>
        </a>
      </div>
      <div
        className="bg-cover w-[540px] h-[455px] mr-0"
        style={{ backgroundImage: `url(${mottoBg})` }}
      ></div>
    </div>
  );
}

export default SiteMotto;
