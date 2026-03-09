// Logo icon
import logo from "../../images/logo.svg";

// Icons
import search from "../../images/search.svg";
import profile from "../../images/profile.svg";
import buy from "../../images/buy.svg";

function Header() {
  return (
    <>
      {/* Header */}
      <header className="py-[30px]">
        <div className="container">
          <div className="flexes justify-between">
            <a href="/" className="">
              <img src={logo} className="" />
            </a>

            {/* Header Navigation */}
            <nav className="px-[100px] pr-[151px]">
              <ul className="flexes gap-[30px]">
                <li className="">
                  <a href="#" className="link-hover">
                    Home +
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link-hover">
                    Category
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link-hover">
                    Shop
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link-hover">
                    Blog
                  </a>
                </li>
                <li className="">
                  <a href="#" className="link-hover">
                    Page
                  </a>
                </li>
              </ul>
            </nav>

            {/* Header right */}
            <div className="flexes gap-[20px]">
              {/* Search Input */}
              <div className="flexes bg-[#E21A431A]">
                <input
                  type="text"
                  className="pl-[15px] h-[50px] outline-none"
                  placeholder="Search..."
                />
                <a href="#">
                  <img src={search} className="" />
                </a>
              </div>

              {/* Profile */}
              <a href="#" className="">
                <img src={profile} className="" />
              </a>

              {/* Buys */}
              <a href="#" className="">
                <img src={buy} className="" />
              </a>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
