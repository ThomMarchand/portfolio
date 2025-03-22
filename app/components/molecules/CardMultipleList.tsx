import DisplayItem from "@/app/components/atoms/DisplayItem";
import Text from "@/app/components/atoms/Text";
import Title from "../atoms/Title";

interface CardMultipleListProps {
  children: React.ReactNode;
  technos: Array<{ title: string; itemsList: string[] }>;
  icon: "sparkles" | "beaker" | "cornerUpRight";
}

export default function CardMultipleList({
  children,
  technos,
  icon,
}: CardMultipleListProps) {
  return (
    <div className="py-5 shadow-3xl my-7 bg-indigo-300 rounded-2xl flex flex-col items-center">
      <Title renderAs="h4">{children}</Title>

      <div className="flex justify-around text-sm w-full 1xs:text-[15px] md:text-lg 2xl:justify-evenly">
        {technos.map((techno, index) => (
          <div key={techno.title + index} className="">
            <Text>{techno.title} :</Text>

            {techno.itemsList.map((item, index) => (
              <DisplayItem key={item + index} item={item} icon={icon} />
            ))}
          </div>
        ))}

        {technos.map((techno, index) => (
          <div key={techno.title + index} className="flex flex-col">
            <Text>{techno.title} :</Text>

            {techno.itemsList.map((item, index) => (
              <DisplayItem key={item + index} item={item} icon={icon} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
