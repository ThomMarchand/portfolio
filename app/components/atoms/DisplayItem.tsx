import IconBeaker from "@/app/components/atoms/icons/IconBeaker";
import IconCornerUpRight from "@/app/components/atoms/icons/IconCornerUpRight";
import IconSparkles from "@/app/components/atoms/icons/IconSparkles";
import IconCornerDownRight from "./icons/IconCornerDownRight";

const icons = {
  sparkles: IconSparkles,
  beaker: IconBeaker,
  cornerUpRight: IconCornerUpRight,
  cornerDownRight: IconCornerDownRight,
} as const;

type IconType = keyof typeof icons;

interface DisplayItemProps {
  item: string;
  icon: IconType;
  displayText?: boolean;
}

export default function DisplayItem({
  item,
  icon,
  displayText,
}: DisplayItemProps) {
  const selectedIcon = icons[icon];

  return (
    <p
      className={`flex text-sm mt-2 1xs:text-[15px] md:text-lg ${
        displayText ? "text-justify" : "items-center"
      }`}
    >
      {selectedIcon()}{" "}
      <span className={`pl-2 ${displayText && "w-fit"}`}>{item}</span>
    </p>
  );
}
