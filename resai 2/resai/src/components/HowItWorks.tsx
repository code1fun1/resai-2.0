import { FunctionComponent } from "react";
import Button from "./Button";

export type HowItWorksType = {
  className?: string;
};

const HowItWorks: FunctionComponent<HowItWorksType> = ({ className = "" }) => {
  return (
    <main
      className={`self-stretch bg-color-netural-white overflow-hidden flex flex-col items-center py-[32px] sm:py-[48px] lg:py-other-gap-18-2 px-[16px] sm:px-[20px] lg:px-[100px] gap-[40px] sm:gap-[60px] lg:gap-[85px] ${className}`}
    >
      {/* Heading */}
      <section className="self-stretch flex flex-col items-start gap-[16px] sm:gap-[18px] lg:gap-other-gap-9 text-left text-[14px] sm:text-[15px] lg:text-base text-color-netural-white font-[Roboto]">
        <div className="self-stretch flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-other-gap-5 shrink-0">

          <div className="h-[34px] rounded-[30px] bg-color-2 flex items-center justify-center py-[5px] px-[12px] sm:px-[16px] lg:px-5 box-border">
            <div className="relative tracking-[-0.02em] leading-[150%] font-medium text-[12px] sm:text-[13px] lg:text-base">
              How It Works?
            </div>
          </div>

          <h1 className="m-0 self-stretch relative text-[32px] sm:text-[48px] lg:text-6xl tracking-[-0.02em] leading-[125%] font-medium font-[inherit] text-color-dark-500">
            From resume to career <br />
            move in 3 steps.
          </h1>
        </div>

        <div className="w-full relative text-[14px] sm:text-[16px] lg:text-lg tracking-[-0.02em] leading-[155%] text-color-gray-700 whitespace-pre-wrap hidden shrink-0">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit lorem
          sagittis, <br />
          proin ut lectus sed ut.
        </div>
      </section>

      {/* Steps */}
      <div className="self-stretch flex flex-col items-start gap-[24px] sm:gap-[36px] lg:gap-other-gap-16">

        <section className="self-stretch flex flex-col sm:flex-row items-start justify-between gap-[20px] sm:gap-[15px] lg:gap-5 text-left font-[Roboto]">

          {/* Step 1 */}
          <div className="flex-1 min-w-full sm:min-w-[240px] flex flex-col items-start relative pt-[40px] sm:pt-[50px] lg:pt-10">
            <span className="absolute top-0 left-0 text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-none text-[#ebebeb] select-none z-[0]">
              01
            </span>
            <div className="flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-other-gap-5 z-[1] text-[20px] sm:text-[22px] lg:text-2xl text-color-dark-500 w-full">
              <div className="w-full tracking-[0.02em] leading-[132%] font-medium">
                Upload your resume or build one from scratch
              </div>
              <p className="m-0 w-full text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-normal text-p-1">
                It takes under 2 minutes.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex-1 min-w-full sm:min-w-[240px] flex flex-col items-start relative pt-[40px] sm:pt-[50px] lg:pt-10">
            <span className="absolute top-0 left-0 text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-none text-[#ebebeb] select-none z-[0]">
              02
            </span>
            <div className="flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-other-gap-5 z-[1] text-[20px] sm:text-[22px] lg:text-2xl text-color-dark-500 w-full">
              <div className="w-full tracking-[0.02em] leading-[132%] font-medium">
                Tell us your target role
              </div>
              <p className="m-0 w-full text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-normal text-p-1">
                Paste the job description for a 40% better ATS match.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex-1 min-w-full sm:min-w-[240px] flex flex-col items-start relative pt-[40px] sm:pt-[50px] lg:pt-10">
            <span className="absolute top-0 left-0 text-[48px] sm:text-[60px] lg:text-[72px] font-bold leading-none text-[#ebebeb] select-none z-[0]">
              03
            </span>
            <div className="flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-other-gap-5 z-[1] text-[20px] sm:text-[22px] lg:text-2xl text-color-dark-500 w-full">
              <div className="w-full tracking-[0.02em] leading-[132%] font-medium">
                Download your ATS-optimized resume
              </div>
              <p className="m-0 w-full text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-normal text-p-1">
                Unlock your personalized 6-month career roadmap.
              </p>
            </div>
          </div>
        </section>

        {/* Image Section */}
        <div className="self-stretch rounded-[20px] sm:rounded-[30px] lg:rounded-other-radius-xl2 overflow-hidden relative">

          {/* ✅ FIXED IMAGE */}
          <img
            className="w-full h-[260px] sm:h-[400px] lg:h-[650px] object-cover object-[center_top]"
            alt=""
            src="/image-1708@2x.png"
          />

          {/* CTA Button */}
          <div className="absolute top-[20px] sm:top-[30px] lg:top-[40px] left-[16px] sm:left-[30px] lg:left-[40px] flex items-center z-[1] group cursor-pointer">
            <Button
              iconOnly={false}
              size="lg"
              state="Active"
              type="Fill"
              text="Start Free Resume Analysis"
              leadingIcon={null}
              showTailingIcon={false}
              showLeadingIcon={false}
              buttonFontFamily="Roboto"
              buttonColor="#04040e"
              className="transition-all duration-300 group-hover:rounded-r-none group-hover:pr-2"
            />
            <div className="rounded-other-radius-full-corner bg-color flex items-center justify-center p-[8px] sm:p-[10px] lg:p-other-gap-7 transition-all duration-300 group-hover:rounded-l-none group-hover:-translate-x-1">
              <img
                className="w-[20px] sm:w-[24px] lg:w-6 h-[20px] sm:h-[24px] lg:h-6 relative transition-transform duration-300 group-hover:rotate-45"
                alt=""
                src="/Huge-icon-arrows-outline-arrow-up.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HowItWorks;