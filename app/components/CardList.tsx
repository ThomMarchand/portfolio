import IconBeaker from "./icons/IconBeaker";
import IconCornerUpRight from "./icons/IconCornerUpRight";
import IconSparkles from "./icons/IconSparkles";

const icons = {
  sparkles: IconSparkles,
  beaker: IconBeaker,
  cornerUpRight: IconCornerUpRight,
} as const;

type IconType = keyof typeof icons;

interface CardListProps {
  title: string;
  itemsList: string[];
  icon: IconType;
}

export default function CardList({ title, itemsList, icon }: CardListProps) {
  const selectedIcon = icons[icon];

  return (
    <div className="p-5 shadow-3xl mt-4 bg-indigo-300 rounded-lg w-max text-sm 1xs:text-[15px] md:text-lg">
      <h4 className="text-2xl font-semibold">{title}</h4>

      {itemsList.map((item, index) => (
        <p key={item + index} className="flex items-center">
          {selectedIcon()}

          <span className="pl-2">{item}</span>
        </p>
      ))}
    </div>
  );
}
