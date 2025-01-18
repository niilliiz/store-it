import { ReactNode } from "react";
import Sidebar from "@/components/Sidebar";
import MobileNavigation from "@/components/MobileNavigation";
import Header from "@/components/Header";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex h-ful flex-1 flex-col">
        <MobileNavigation />
        <Header />
        <div className="main-content">{children}</div>
      </section>
    </main>
  );
}
