import DisplayItem from "@/app/components/atoms/DisplayItem";

interface CardListProps {
  title: string;
  itemsList: string[];
  icon: "sparkles" | "beaker" | "cornerUpRight";
}

export default function CardSingleList({
  title,
  itemsList,
  icon,
}: CardListProps) {
  return (
    <div
      className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-lg w-full flex justify-center text-sm 
    1xs:text-[15px] sm:w-max sm:px-32 md:text-lg 2xl:py-10 2xl:px-42"
    >
      <div>
        <h4 className="text-2xl font-semibold">{title}</h4>

        {itemsList.map((item, index) => (
          <DisplayItem key={item + index} item={item} icon={icon} />
        ))}
      </div>
    </div>
  );
}
