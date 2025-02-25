import Image from "next/image";
import InlineIconText from "./InlineIconText";
import MissionIcon from "./MissionIcon";

const AboutUs = () => {
  return (
    <div className="container mx-auto flex flex-col w-full space-y-14 px-6 md:px-10 lg:px-20">
      {/* First section */}
      <div className="w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-14">
        <div className="flex flex-col flex-1 items-start space-y-6">
          <span className="text-3xl md:text-4xl font-extrabold text-center lg:text-left">
            100% Trusted Organic Food Store
          </span>
          <span className="text-gray-600 text-base md:text-lg text-center lg:text-left">
            Morbi porttitor ligula in nunc varius sagittis. Proin dui nisi,
            laoreet ut tempor ac, cursus vitae eros. Cras quis ultricies elit.
            Proin ac lectus arcu. Maecenas aliquet vel tellus at accumsan.
          </span>
        </div>
        <div className="flex flex-1 w-full">
          <Image
            src="/about/building.svg"
            alt="Building"
            width={716}
            height={492}
            className="object-cover rounded-lg w-full"
          />
        </div>
      </div>

      {/* Second section */}
      <div className="w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-14">
        <div className="relative flex flex-1 w-full">
          <Image
            src="/about/mission.svg"
            alt="Mission"
            width={1020}
            height={685}
            className="w-full"
          />
          <Image
            src="/about/doctor1.png"
            alt="Overlay"
            width={210}
            height={200}
            className="absolute left-[55%] md:left-[50%] lg:left-[60%] bottom-[0%]"
          />
        </div>
        <div className="flex flex-col flex-1 items-start space-y-4">
          <span className="text-3xl md:text-4xl font-extrabold">Mission</span>
          <span className="text-base md:text-lg text-gray-500">
            Pellentesque a ante vulputate leo porttitor luctus sed eget eros.
            Nulla et rhoncus neque. Duis non diam eget est luctus tincidunt a a
            mi.
          </span>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
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

      {/* Third section */}
      <div className="w-full flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-14">
        <div className="flex flex-col flex-1 items-start space-y-6">
          <span className="text-3xl md:text-4xl font-extrabold">Vision</span>
          <span className="text-gray-600 text-base md:text-lg">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions. Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </span>
          <div className="space-y-2">
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
          <button className="mt-4 px-8 py-3 text-white bg-green-700 rounded-full font-semibold flex items-center justify-center">
            <span>Shop Now</span>
          </button>
        </div>
        <div className="flex flex-1 w-full">
          <Image
            src="/about/doctor2.svg"
            alt="Doctor"
            width={716}
            height={492}
            className="rounded-lg w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;