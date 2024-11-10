function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="animate-fadeIn w-screen h-screen flex justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
