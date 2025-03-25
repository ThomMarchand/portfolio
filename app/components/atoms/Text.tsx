export default function Text({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <p className="flex justify-center text-justify text-sm mt-2 1xs:text-[15px] md:text-lg">
      {children}
    </p>
  );
}
