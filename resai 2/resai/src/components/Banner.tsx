import { FunctionComponent } from "react";

export type BannerType = {
  className?: string;
};

const Banner: FunctionComponent<BannerType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-center pt-[16px] sm:pt-[20px] lg:pt-[27.7px] px-[16px] sm:px-[20px] lg:px-[100px] pb-[24px] sm:pb-[32px] lg:pb-[49px] box-border max-w-full text-center text-[24px] sm:text-[32px] lg:text-[40px] text-color-netural-white font-[Roboto] ${className}`}
    >
      <div className="self-stretch flex items-start justify-end pb-0 pr-0 relative">
        <img
          className="w-[80px] sm:w-[100px] lg:w-[114px] h-[80px] sm:h-[100px] lg:h-[114px] relative rounded-[100px] shrink-0 z-[2]"
          loading="lazy"
          alt=""
          src="/Frame-427320788.svg"
        />
      </div>
      <div className="self-stretch flex items-start justify-center py-0 box-border max-w-full mt-[-60px] sm:mt-[-75px] lg:mt-[-92.7px] relative">
        <div className="w-full max-w-[1240px] rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] bg-primary-02-black-01 overflow-hidden shrink-0 flex items-start justify-center py-[20px] sm:py-[28px] lg:py-[37.5px] px-[16px] sm:px-[20px] lg:px-5 box-border relative isolate max-w-full">
          <img
            className="h-[1159px] w-[3640.6px] absolute !!m-[0 important] right-[-1458.4px] bottom-[-823.1px] z-[1] shrink-0"
            alt=""
            src="/Group-21.svg"
          />
          <div className="flex flex-col items-center gap-3 sm:gap-4 lg:gap-4 z-[1] shrink-0">
            <h1 className="m-0 w-full max-w-[855px] relative text-[inherit] leading-[125%] font-medium font-[inherit] whitespace-pre-wrap">{`ResAI helps professionals built careers as well as switch careers  `}</h1>
            <h3 className="m-0 w-full max-w-[700px] relative text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-normal font-[inherit]">{`With ATS-optimized resumes, personalized skill gap analysis, and a step-by-step career roadmap. `}</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
