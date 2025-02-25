import React from "react";
import Image from "next/image";

interface MissionIconProps {
  iconSrc: string;
  title: string;
  description: string;
}

const MissionIcon: React.FC<MissionIconProps> = ({
  iconSrc,
  title,
  description,
}) => {
  return (
    <div className="flex items-center space-x-[10px]">
      <Image src={iconSrc} alt="Icon" className="object-cover" width={52} height={52}/>
      <div className="flex flex-col items-start space-y-[10px]">
        <span className="text-[#1A1A1A] text-[14px] font-medium">{title}</span>
        <span className="text-[#808080] font-normal text-[10px]">
          {description}
        </span>
      </div>
    </div>
  );
};

export default MissionIcon;
