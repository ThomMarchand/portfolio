const titleStyle = {
  h1: "font-bold md:text-2xl lg:text-3xl xl:text-5xl",
  h2: "mb-5 text-4xl font-bold flex justify-center",
  h3: "text-3xl font-bold scroll-mt-64 md:scroll-mt-30 flex justify-center mt-20 mb-10",
  h4: "text-2xl font-semibold flex justify-center mt-15 mb-10",
  h5: "text-xl font-medium mt-4 mb-1",
} as const;

type TitleStyleType = keyof typeof titleStyle;

interface TitleProps {
  children: React.ReactNode;
  renderAs: TitleStyleType;
  id?: string;
}

export default function Title({ children, renderAs, id }: TitleProps) {
  const Tag = renderAs;

  return (
    <Tag id={id} className={titleStyle[renderAs]}>
      {children}
    </Tag>
  );
}
