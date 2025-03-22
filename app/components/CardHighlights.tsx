import Text from "./atoms/Text";

interface CardListProps {
  title: string;
  description: string;
}

export default function CardHighlights({ title, description }: CardListProps) {
  return (
    <div className="p-5 shadow-3xl my-7 bg-indigo-300 rounded-lg">
      <h4 className="text-lg font-semibold md:text-xl">{title}</h4>

      <Text>{description}</Text>
    </div>
  );
}
