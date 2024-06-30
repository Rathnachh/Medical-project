import Image from "next/image";
import InlineIconText from "./InlineIconText";
import MissionIcon from "./MissionIcon";

const AboutUs = () => {
  return (
    <div className="flex flex-col w-full space-y-[56px]">
      {/* First section */}
      <div className="w-full flex items-center space-x-[58px]">
        <div className="flex flex-col flex-1 items-start w-full space-y-[40px]">
          <span className="text-[52px] font-extrabold">
            100% Trusted Organic Food Store
          </span>
          <span className="text-[#666666] text-[18px] font-normal text-left">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan. Donec
            a eros non massa vulputate ornare. Vivamus ornare commodo ante, at
            commodo felis congue vitae.
          </span>
        </div>
        <div className="flex flex-1 w-full">
          <Image
            src="/about/building.svg"
            alt="Building"
            width={716}
            height={492}
            className="object-cover rounded-lg"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="w-full flex items-center space-x-[58px]">
      <div className="relative flex flex-1 w-full">
          <Image
            src="/about/mission.svg"
            alt="Mission"
            width={1020}
            height={685}
            className="object-cover rounded-lg"
          />
          <Image
            src="/about/doctor1.png"
            alt="Overlay"
            width={243}
            height={200}
            className="absolute left-[300px] opacity-100 rounded-lg"
          />
        </div>
        <div className="flex flex-col flex-1 items-start w-full space-y-[20px]">
          <span className="text-[52px] font-extrabold">Mission</span>
          <span className="text-[16px] font-normal text-[#808080]">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi. Nulla eu eros consequat tortor tincidunt feugiat.
          </span>
          <div className="flex w-full space-x-[20px]">
            <div className="flex flex-col items-start space-y-[20px] w-full">
              <MissionIcon
                iconSrc="/about/organic.svg"
                title="100% Organic food"
                description="100% healthy & Fresh food."
              />
              <MissionIcon
                iconSrc="/about/feedback.svg"
                title="Customer Feedback"
                description="Our happy customer"
              />
              <MissionIcon
                iconSrc="/about/shipping.svg"
                title="Free Shipping"
                description="Free shipping with discount"
              />
            </div>
            <div className="flex flex-col items-start space-y-[20px] w-full">
              <MissionIcon
                iconSrc="/about/support.svg"
                title="Great Support 24/7"
                description="Instant access to Contact"
              />
              <MissionIcon
                iconSrc="/about/payment.svg"
                title="100% Secure Payment"
                description="We ensure your money is safe"
              />
              <MissionIcon
                iconSrc="/about/food.svg"
                title="100% Organic Food"
                description="100% healthy & Fresh food."
              />
            </div>
          </div>
        </div>
      </div>

      {/* Third section */}
      <div className="w-full flex items-center space-x-[58px]">
        <div className="flex flex-col flex-1 items-start w-full space-y-[40px]">
          <span className="text-[52px] font-extrabold">Vision</span>
          <span className="text-[#666666] text-[18px] font-normal text-left">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </span>
          <div className="gap-2">
            <InlineIconText
              src="/about/thick.svg"
              alt="sign"
              text="Continuous integration and deployment"
            />
            <InlineIconText
              src="/about/thick.svg"
              alt="sign"
              text="Development workflow"
            />
            <InlineIconText
              src="/about/thick.svg"
              alt="sign"
              text="Knowledge management"
            />
          </div>
          <button className="mt-4 px-10 py-[16px] font-semibold bg-[#008001] text-white rounded-full flex items-center justify-center">
            <span>Shop Now</span>
          </button>
        </div>
        <div className="flex flex-1 w-full">
          <Image
            src="/about/doctor2.svg"
            alt="Doctor"
            width={716}
            height={492}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
