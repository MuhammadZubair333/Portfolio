// src/components/Header.jsx
export default function Header({ onHamburgerClick, isMenuOpen }) {
  return (
    <header className="header flex justify-between items-center px-9 py-4 bg-white shadow-md sticky top-0 z-20">
      <div className="header-title text-[1.7em] font-bold text-[#5a48fa] tracking-wide">
        Shashank Raj
      </div>
      <button
        className={`hamburger w-9 h-9 flex flex-col justify-center cursor-pointer bg-none border-none z-30 ${isMenuOpen ? 'active' : ''}`}
        id="hamburgerBtn"
        aria-label="Menu"
        type="button"
        onClick={onHamburgerClick}
      >
        <span className="block h-[4.5px] w-full bg-[#5a48fa] rounded-[2px] my-1 transition-all"></span>
        <span className="block h-[4.5px] w-full bg-[#5a48fa] rounded-[2px] my-1 transition-all"></span>
        <span className="block h-[4.5px] w-full bg-[#5a48fa] rounded-[2px] my-1 transition-all"></span>
      </button>
    </header>
  );
}
