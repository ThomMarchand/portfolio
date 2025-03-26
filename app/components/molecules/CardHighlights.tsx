import Text from "@/app/components/atoms/Text";

interface CardListProps {
  title: string;
  description: string;
}

export default function CardHighlights({ title, description }: CardListProps) {
  return (
    <div className="p-5 bg-white border border-indigo-500 my-7 rounded-2xl">
      <h4 className="text-lg font-semibold md:text-xl flex justify-center">
        {title}
      </h4>

      <Text>{description}</Text>
    </div>
  );
}
