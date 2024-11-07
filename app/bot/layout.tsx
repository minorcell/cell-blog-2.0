export default function BotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="mx-auto w-3/5 h-full flex items-center justify-center border rounded-xl -mt-8 shadow-xl">
      {children}
    </div>
  );
}
