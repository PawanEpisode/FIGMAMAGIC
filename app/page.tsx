"Use client";

import LeftSidebar from "@/components/LeftSidebar";
import Live from "@/components/Live";
import Navbar from "@/components/Navbar";
import RightSidebar from "@/components/RightSidebar";

export default function Page() {
  return (
    <main className="h-screen overflow-hidden">
      <Navbar />

      <section className="flex h-full flex-row">
        <LeftSidebar />
        
        <Live />

        <RightSidebar />
      </section>
    </main>
  );
}