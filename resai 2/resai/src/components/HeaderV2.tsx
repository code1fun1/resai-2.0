import { FunctionComponent, useState } from "react";
import Button from "./Button";

export type HeaderV2Type = {
  className?: string;
};

const HeaderV2: FunctionComponent<HeaderV2Type> = ({ className = "" }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { text: "Challenges", active: true },
    { text: "How its Works?", active: false },
    { text: "Approach", active: false },
    { text: "Features", active: false },
    { text: "Testimonials", active: false },
    { text: "Pricing", active: false },
  ];

  return (
    <header
      className={`self-stretch w-full bg-white border-b-2 border-[#3f6aff] sticky top-0 z-[99] ${className}`}
    >
      <div className="w-full max-w-[1440px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-[100px] py-3">

        {/* Logo */}
        <img
          className="h-10 w-auto object-cover flex-shrink-0"
          loading="lazy"
          alt="Logo"
          src="/Frame-16100679301@2x.png"
        />

        {/* Nav — desktop only */}
        <nav className="hidden lg:flex items-center gap-8 text-base font-[Roboto] text-color-dark-500">
          {menuItems.map((item, index) => (
            <div
              key={index}
              className={`relative tracking-[-0.02em] leading-[150%] cursor-pointer transition-colors hover:text-[#4e3000] ${
                item.active ? "font-medium text-[#4e3000]" : "font-normal"
              }`}
            >
              {item.text}
            </div>
          ))}
        </nav>

        {/* Signup button — desktop only */}
        <div className="hidden lg:flex group items-center cursor-pointer">
          <Button
            iconOnly={false}
            size="lg"
            state="Active"
            type="Fill"
            text="Signup"
            buttonFontFamily="Roboto"
            buttonColor="#04040e"
            className="transition-all duration-300 group-hover:rounded-r-none group-hover:pr-2"
          />
          <div className="rounded-full bg-[#dabf67] flex items-center justify-center w-[48px] h-[48px] transition-all duration-300 group-hover:rounded-l-none group-hover:-translate-x-1">
            <img
              className="w-6 h-6 transition-transform duration-300 group-hover:rotate-45"
              alt=""
              src="/Huge-icon-arrows-outline-arrow-up.svg"
            />
          </div>
        </div>

        {/* Hamburger — mobile only */}
        <button
          className="flex lg:hidden p-2"
          aria-label="Toggle menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 px-4 py-6 flex flex-col gap-4 shadow-md">
          <nav className="flex flex-col gap-4">
            {menuItems.map((item, index) => (
              <button
                key={index}
                className={`text-base leading-[22px] text-left transition-colors hover:text-[#4e3000] font-[Roboto] ${
                  item.active ? "font-medium text-[#4e3000]" : "font-normal text-[#03030d]"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </button>
            ))}
          </nav>

          <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
            <Button
              iconOnly={false}
              size="lg"
              state="Active"
              type="Fill"
              text="Signup"
              buttonFontFamily="Roboto"
              buttonColor="#04040e"
            />
            <div className="rounded-full bg-[#dabf67] flex items-center justify-center w-[44px] h-[44px]"></div>
              <img
                className="w-6 h-6"
                alt=""
                src="/Huge-icon-arrows-outline-arrow-up.svg"
              />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderV2;