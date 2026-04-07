import { FunctionComponent } from "react";

export type FooterAreaType = {
  className?: string;
};

const FooterArea: FunctionComponent<FooterAreaType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-0 px-[16px] sm:px-[20px] lg:px-[100px] pb-5 box-border text-left text-[16px] sm:text-[17px] lg:text-lg text-secondary-grey-03 font-[Roboto] ${className}`}
    >
      <div className="w-full max-w-[1360px] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] bg-primary-02-black-01 overflow-hidden shrink-0 flex items-start py-[32px] sm:py-[48px] lg:py-14 px-[16px] sm:px-[24px] lg:px-10 box-border">
        <div className="w-full flex flex-col gap-[20px] sm:gap-[28px] lg:gap-7">
          <section className="w-full flex flex-col items-start gap-[32px] sm:gap-[48px] lg:gap-14 text-left text-[24px] sm:text-[32px] lg:text-[40px] text-color-netural-white font-[Roboto]">
            <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] sm:gap-[40px] lg:gap-5">
              <h1 className="m-0 relative text-[inherit] tracking-[-0.02em] leading-[125%] font-medium font-[inherit] inline-block shrink-0 flex-1">
                Stop guessing. Start transforming your career.
              </h1>
              <img
                className="h-[22.1px] w-[100px] sm:w-[115px] lg:w-[121px] relative max-h-full shrink-0"
                alt=""
                src="/Vector-9.svg"
              />
            </div>
            <div className="w-full h-px bg-[rgba(255,255,255,0.2)]" />
          </section>
          <section className="w-full flex flex-col sm:flex-row items-start justify-between gap-[24px] sm:gap-[20px] lg:gap-5 text-left text-[18px] sm:text-[20px] lg:text-2xl text-color-netural-white font-[Roboto] flex-wrap">
            <div className="w-full sm:w-auto flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[inherit] leading-[150%] font-medium font-[inherit]">
                Menu
              </h3>
              <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-3 text-[14px] sm:text-[15px] lg:text-lg text-secondary-grey-03">
                <div className="relative leading-[120%]">Product</div>
                <div className="relative leading-[120%]">Pricing</div>
                <div className="relative leading-[120%]">Career Roadmap</div>
                <div className="relative leading-[120%]">About ResAI</div>
                <div className="relative leading-[120%]">Blog</div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[inherit] leading-[150%] font-medium font-[inherit]">
                Placeholder
              </h3>
              <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-3 text-[14px] sm:text-[15px] lg:text-lg text-secondary-grey-03">
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[inherit] leading-[150%] font-medium font-[inherit]">
                Placeholder
              </h3>
              <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-3 text-[14px] sm:text-[15px] lg:text-lg text-secondary-grey-03">
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[inherit] leading-[150%] font-medium font-[inherit]">
                Placeholder
              </h3>
              <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-3 text-[14px] sm:text-[15px] lg:text-lg text-secondary-grey-03">
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
              </div>
            </div>
            <div className="w-full sm:w-auto flex flex-col items-start gap-4">
              <h3 className="m-0 relative text-[inherit] leading-[150%] font-medium font-[inherit]">
                Placeholder
              </h3>
              <div className="flex flex-col items-start gap-2 sm:gap-3 lg:gap-3 text-[14px] sm:text-[15px] lg:text-lg text-secondary-grey-03">
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
                <div className="relative leading-[120%]">Placeholder</div>
              </div>
            </div>
          </section>
          <div className="w-full h-px bg-[rgba(255,255,255,0.2)]" />
          <div className="w-full flex flex-col sm:flex-row items-start sm:items-center justify-between gap-[16px] sm:gap-[20px] lg:gap-5 flex-wrap">
            <img
              className="h-[30px] sm:h-[35px] lg:h-10 w-[100px] sm:w-[120px] lg:w-[132px] object-cover"
              loading="lazy"
              alt=""
              src="/Frame-1610068082@2x.png"
            />
            <div className="flex flex-wrap items-center gap-[12px] sm:gap-[15px] lg:gap-[19.9px]">
              <div className="relative leading-[120%] text-[14px] sm:text-[15px] lg:text-base">Facebook</div>
              <div className="relative leading-[120%] text-[14px] sm:text-[15px] lg:text-base">Linkdin</div>
              <div className="relative leading-[120%] text-[14px] sm:text-[15px] lg:text-base">Twitter</div>
              <div className="relative font-[Geist] text-[14px] sm:text-[15px] lg:text-base">|</div>
              <div className="relative leading-[120%] text-color-gray-300 text-[14px] sm:text-[15px] lg:text-base">Terms</div>
              <div className="relative leading-[120%] text-[14px] sm:text-[15px] lg:text-base">Privacy policy</div>
              <div className="relative font-[Geist] text-[14px] sm:text-[15px] lg:text-base">|</div>
              <div className="relative leading-[120%] text-color-gray-300 text-[12px] sm:text-[13px] lg:text-base">
                Copyright 2026 ©ResAi Company
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FooterArea;
