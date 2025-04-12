interface TextProps {
  children: React.ReactNode;
  textCenter?: boolean;
}

export default function Text({ children, textCenter = true }: TextProps) {
  return (
    <p
      className={`text-justify ${
        textCenter && "flex justify-center"
      } text-sm mt-2 1xs:text-[15px] md:text-lg`}
    >
      {children}
    </p>
  );
}
