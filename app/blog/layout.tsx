function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="animate-fadeIn m-auto w-3/5 text-4xl flex justify-center items-center">
      {children}
    </div>
  );
}

export default Layout;
