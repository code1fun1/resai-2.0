import { FunctionComponent } from "react";
import Button from "./Button";

export type ContentType = {
  className?: string;
};

const Content: FunctionComponent<ContentType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-center gap-[24px] sm:gap-[32px] lg:gap-other-gap-16 w-full z-[0] text-left text-color-dark-500 font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[8px] sm:gap-[12px] lg:gap-other-gap-5">
        <h1 style={{ fontSize: 'clamp(28px, 6vw, 72px)', lineHeight: '125%' }} className="m-0 w-full relative font-black font-[Roboto] inline-block shrink-0">
          <span>{`Your next career. `}</span>
          <span className="text-[#4e3000]">Engineered.</span>
        </h1>
        <div style={{ maxWidth: '420px', fontSize: 'clamp(14px, 3vw, 20px)' }} className="self-stretch relative leading-[155%] font-medium text-p-1 shrink-0">
          Build a role-specific resume, close your skill gaps, and get a
          step-by-step career roadmap — all in one platform, built for Indian
          professionals.
        </div>
      </div>
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[16px] sm:gap-[18px] lg:gap-[18px] max-w-full">
        <div className="w-full sm:w-auto group flex items-center [row-gap:20px] max-w-full cursor-pointer">
          <Button
            iconOnly={false}
            size="lg"
            state="Active"
            type="Fill"
            tailingIcon={
              <img
                className="h-6 w-6 relative hidden"
                alt=""
                src="/Huge-icon-arrows-outline-direction-right-01.svg"
              />
            }
            text="Start Free Resume Analysis"
            leadingIcon={null}
            showTailingIcon={false}
            showLeadingIcon={false}
            buttonFontFamily="Roboto"
            buttonColor="#04040e"
            className="transition-all duration-300 group-hover:rounded-r-none group-hover:pr-2"
          />
          <div className="rounded-other-radius-full-corner bg-color flex items-center justify-center p-other-gap-7 transition-all duration-300 group-hover:rounded-l-none group-hover:-translate-x-1">
            <img
              className="w-6 h-6 relative transition-transform duration-300 group-hover:rotate-45"
              alt=""
              src="/Huge-icon-arrows-outline-arrow-up.svg"
            />
          </div>
        </div>
        <Button
          iconOnly={false}
          size="lg"
          state="Active"
          type="Outline"
          tailingIcon={
            <img
              className="h-6 w-6 relative hidden"
              alt=""
              src="/Huge-icon-arrows-outline-direction-right-01.svg"
            />
          }
          text="See how it works"
          leadingIcon={null}
          showTailingIcon={false}
          showLeadingIcon={false}
          buttonFontFamily="Roboto"
          buttonColor="#04040e"
        />
      </div>
      <div style={{ maxWidth: '380px' }} className="flex flex-col items-start gap-4">
        <div className="flex items-center shrink-0">
          <img
            className="h-12 w-12 relative rounded-other-radius-full-corner object-cover"
            alt=""
            src="/Profile-Avatars2@2x.png"
          />
          <img
            className="h-12 w-12 relative rounded-other-radius-full-corner object-cover ml-[-20px]"
            alt=""
            src="/Profile-Avatars3@2x.png"
          />
          <img
            className="h-12 w-12 relative rounded-other-radius-full-corner object-cover ml-[-20px]"
            alt=""
            src="/Profile-Avatars1@2x.png"
          />
          <img
            className="h-12 w-12 relative rounded-other-radius-full-corner object-cover ml-[-20px]"
            alt=""
            src="/Profile-Avatars@2x.png"
          />
          <img
            className="h-12 w-12 relative rounded-other-radius-full-corner object-cover ml-[-20px]"
            loading="lazy"
            alt=""
            src="/Profile-Avatars4@2x.png"
          />
        </div>
        <div className="flex flex-col items-start gap-other-gap-3">
          <div className="relative tracking-[-0.02em] leading-[155%] font-medium text-lg">
            Join 3,200+
          </div>
          <div className="relative text-base leading-[130%] text-p-1">{`professionals who switched & Built careers with ResAI`}</div>
        </div>
      </div>
    </div>
  );
};

export default Content;
