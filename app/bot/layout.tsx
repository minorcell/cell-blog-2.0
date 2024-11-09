export default function BotLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="animate-fadeIn mx-auto w-3/5 h-screen flex items-center justify-center rounded-xl -mt-24 shadow-2xl border">
      {children}
    </div>
  );
}
