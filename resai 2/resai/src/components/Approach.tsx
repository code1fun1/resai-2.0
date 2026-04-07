import { FunctionComponent, useState } from "react";
import PdfNote from "./PdfNote";
import ComputerMonitorChat from "./ComputerMonitorChat";

export type ApproachType = {
  className?: string;
};

const ApproachRow: FunctionComponent<{
  icon: React.ReactNode;
  text: string;
}> = ({ icon, text }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative self-stretch w-full">

      {/* WHITE BASE CARD — overflow hidden for full wipe effect */}
      <div className="relative overflow-hidden bg-color-netural-white rounded-[16px] sm:rounded-[20px] lg:rounded-other-radius-xl2 flex items-center px-[16px] sm:px-[18px] lg:px-other-gap-13 py-[16px] sm:py-[20px] lg:py-7 pr-[200px] sm:pr-[240px] lg:pr-[320px]">

        {/* Golden wipe overlay — fills from RIGHT to LEFT when arrow is hovered */}
        <div
          className="absolute inset-y-0 right-0 bg-color rounded-[16px] sm:rounded-[20px] lg:rounded-other-radius-xl2 z-0"
          style={{
            width: isHovered ? "100%" : "0%",
            transition: "width 0.5s ease-in-out",
          }}
        />

        {/* Content sits above the overlay */}
        <div className="relative z-10 flex items-center gap-2 sm:gap-3 lg:gap-3">
          {icon}
          <h3 className="m-0 text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-medium text-color-dark-500">
            {text}
          </h3>
        </div>
      </div>

      {/* RIGHT SIDE — HOVER TRIGGER */}
      <div
        className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center cursor-pointer hidden sm:flex"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Gold panel — expands left on hover */}
        <div
          className="bg-color rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] flex items-center justify-center pr-[20px] sm:pr-[24px] lg:pr-8 py-[16px] sm:py-[20px] lg:py-7 whitespace-nowrap shadow-md"
          style={{
            paddingLeft: isHovered ? "50px" : "30px",
            borderRadius: isHovered ? "9999px" : "30px",
            transition: "padding-left 0.3s ease, border-radius 0.3s ease",
          }}
        >
          <span className="text-[14px] sm:text-[16px] lg:text-xl font-medium text-color-dark-500 text-center">
            Hover to see what changes with us
          </span>
        </div>

        {/* Circle — slides into panel on hover */}
        <div
          className="absolute left-[-40px] sm:left-[-50px] lg:left-[-60px] top-1/2 -translate-y-1/2 w-[40px] sm:w-[48px] lg:w-[52px] h-[40px] sm:h-[48px] lg:h-[52px] bg-color flex items-center justify-center z-10"
          style={{
            borderRadius: isHovered ? "50% 0 0 50%" : "50%",
            transform: `translateY(-50%) translateX(${isHovered ? "10px" : "0px"})`,
            transition: "transform 0.3s ease, border-radius 0.3s ease",
          }}
        >
          <img
            className="w-[16px] sm:w-[18px] lg:w-5 h-[16px] sm:h-[18px] lg:h-5"
            alt=""
            src="/Huge-icon-arrows-outline-arrow-up.svg"
            style={{
              transform: isHovered ? "rotate(270deg)" : "rotate(225deg)",
              transition: "transform 0.3s ease",
            }}
          />
        </div>
      </div>
    </div>
  );
};

const Approach: FunctionComponent<ApproachType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#f6f6f6] overflow-visible flex flex-col items-center py-[32px] sm:py-[48px] lg:py-other-gap-18-2 px-[16px] sm:px-[20px] lg:px-[100px] box-border gap-[20px] sm:gap-[28px] lg:gap-6 ${className}`}
    >

      {/* Heading */}
      <section className="self-stretch flex flex-col items-start gap-[16px] sm:gap-[18px] lg:gap-other-gap-9 text-left text-[14px] sm:text-[15px] lg:text-base font-[Roboto]">
        <div className="self-stretch flex flex-col items-start gap-[8px] sm:gap-[10px] lg:gap-other-gap-5">

          <div className="rounded-[20px] sm:rounded-[25px] lg:rounded-[30px] bg-color-2 flex items-center justify-center py-[5px] px-[12px] sm:px-[16px] lg:px-5">
            <div className="tracking-[-0.02em] leading-[150%] font-medium text-white text-[12px] sm:text-[13px] lg:text-base">
              Approach
            </div>
          </div>

          <h2 className="m-0 text-[28px] sm:text-[40px] lg:text-6xl tracking-[-0.02em] leading-[125%] font-medium text-color-dark-500">
            The Difference Real Guidance Makes
          </h2>
        </div>
      </section>

      {/* Rows */}
      <section className="self-stretch flex flex-col gap-[12px] sm:gap-[16px] lg:gap-4 font-[Roboto]">

        {/* Row 1 */}
        <ApproachRow
          icon={<PdfNote property1="stroke" />}
          text="Same resume sent to every job"
        />

        {/* GOLD FULL ROW */}
        <div className="self-stretch bg-color rounded-[16px] sm:rounded-[20px] lg:rounded-other-radius-xl2 flex items-center px-[16px] sm:px-[18px] lg:px-other-gap-13 py-[16px] sm:py-[20px] lg:py-7">
          <div className="flex items-center gap-[12px] sm:gap-[18px] lg:gap-3">
            <img
              className="w-[32px] sm:w-[38px] lg:w-[42px] h-[32px] sm:h-[38px] lg:h-[42px] object-contain flex-shrink-0"
              alt=""
              src="/pdf-note@2x.png"
            />
            <h3 className="m-0 text-[16px] sm:text-[18px] lg:text-xl leading-[155%] font-medium text-color-dark-500">
              Clear skill gap report with specific skills to learn for your target role
            </h3>
          </div>
        </div>

        {/* Row 3 */}
        <ApproachRow
          icon={<ComputerMonitorChat property1="stroke" />}
          text="Applying randomly, hoping something sticks"
        />
      </section>
    </section>
  );
};

export default Approach;