import IconBeaker from "@/app/components/atoms/icons/IconBeaker";
import IconCornerUpRight from "@/app/components/atoms/icons/IconCornerUpRight";
import IconSparkles from "@/app/components/atoms/icons/IconSparkles";

const icons = {
  sparkles: IconSparkles,
  beaker: IconBeaker,
  cornerUpRight: IconCornerUpRight,
} as const;

type IconType = keyof typeof icons;

interface DisplayItemProps {
  item: string;
  icon: IconType;
}

export default function DisplayItem({ item, icon }: DisplayItemProps) {
  const selectedIcon = icons[icon];

  return (
    <p className="flex items-center">
      {selectedIcon()} <span className="pl-2">{item}</span>
    </p>
  );
}
