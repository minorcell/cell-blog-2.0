import { Suspense } from "react";
import GlobalLoading from "@/app/ui/global/GlobalLoading";
function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="w-full h-full text-4xl flex justify-center items-center">
      <Suspense fallback={<GlobalLoading />}>{children}</Suspense>
    </div>
  );
}

export default Layout;
