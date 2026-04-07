import { FunctionComponent } from "react";
import Header from "../components/HeaderV2";
import Content from "../components/Content";
import Image1 from "../components/Image1";
import Brands from "../components/Brands";
import Banner from "../components/Banner";
import OurCategories from "../components/OurCategories";
import Section from "../components/Section";
import HowItWorks from "../components/HowItWorks";
import Approach from "../components/Approach";
import FrameComponentV2 from "../components/FrameComponentV2";
import Testimonials from "../components/Testimonials";
import DefaultStatusIncludeCurrent from "../components/DefaultStatusIncludeCurrent";
import ResAINaukri from "../components/ResAINaukri";
import FooterArea from "../components/FooterArea";

const ResAILandingPageV2: FunctionComponent = () => {
  return (
    <div className="w-full relative bg-color-netural-white flex flex-col items-start leading-[normal] tracking-[normal]">
      <Header />
      <section style={{ minHeight: '680px' }} className="self-stretch bg-[#f6f6f6] flex flex-col lg:flex-row items-stretch justify-between gap-[20px] lg:gap-[40px] max-w-full text-left text-base text-color-dark-500 font-[Roboto]">
        <div className="w-full lg:w-[45%] flex flex-col items-start justify-center py-[32px] sm:py-[48px] lg:py-other-gap-18 px-[16px] sm:px-[24px] lg:pl-[100px] lg:pr-0 box-border">
          <Content />
        </div>
        <div className="w-full lg:w-[55%] relative hidden lg:flex">
          <Image1 />
          <div className="w-52 !m-0 absolute top-[394px] left-[21px] [backdrop-filter:blur(15px)] rounded-other-radius-xl bg-[rgba(255,255,255,0.9)] border-white border-solid border-[1px] box-border flex flex-col items-start py-3.5 px-other-gap-9 z-[10]">
            <div className="flex items-center gap-other-gap-7">
              <div className="rounded-[30px] bg-color-warning-50 flex flex-col items-start p-other-gap-7">
                <img
                  className="w-6 h-6 relative"
                  alt=""
                  src="/Huge-icon-interface-outline-star.svg"
                />
              </div>
              <div className="flex flex-col items-start gap-other-gap-3">
                <b className="self-stretch relative">4.8 / 5.0</b>
                <div className="self-stretch relative text-color-gray-700">
                  12.5K Reviews
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Brands />
      <Banner />
      <OurCategories />
      <Section />
      <HowItWorks />
      <Approach />
      <FrameComponentV2 />
      <Testimonials />
      <DefaultStatusIncludeCurrent />
      <ResAINaukri />
      <FooterArea />
    </div>
  );
};

export default ResAILandingPageV2;
