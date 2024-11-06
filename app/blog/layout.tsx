function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-[87.5%] text-4xl flex justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
