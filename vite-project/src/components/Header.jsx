import siteLogo from "../assets/images/Fill 3.svg";
import menuLogo from "../assets/images/menu copy.png";

const Header = () => {
  return (
    <header className="py-3 px-[165px] shadow-sm">
      <div className="flex items-center justify-between">
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

        <ul className="flex justify-between w-9/12 items-center text-lg">
          <li>
            <a
              className="hover:text-neutral-800 flex items-center gap-2"
              href="/"
            >
              <img className="h-3" src={menuLogo} alt="" />
              <span>Kurslar</span>
            </a>
          </li>
          <li>
            <form action="search" className="relative">
              <input
                className="w-72 p-2 border"
                name="search"
                type="text"
                placeholder="Kurslar bo’yicha izlash"
              />
              <img
                className="absolute right-3 top-3"
                width="20"
                height="20"
                src="https://img.icons8.com/ios-filled/50/search--v1.png"
                alt="search--v1"
              />
            </form>
          </li>
          <li>
            <a className="hover:text-neutral-800" href="/about">
              <span>A'zo bo'lish</span>
            </a>
          </li>
          <li>
            <a
              className="hover:text-neutral-800 flex items-center gap-2"
              href="/contact"
            >
              <img
                width="30"
                height="30"
                src="https://img.icons8.com/ios-filled/50/user-male-circle.png"
                alt="user-male-circle"
              />
              <span>Kirish</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
