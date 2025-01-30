import Approach from "@/components/Approach";
import Certifications from "@/components/Certifications";
import Clients from "@/components/Clients";
import CurvedLine from "@/components/CurvedLine";
import Experience from "@/components/Experience";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import RecentProjects from "@/components/RecentProjects";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { navItems } from "@/data";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">

      <div className="max-w-7xl w-full">
        <TracingBeam>
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <MyProjects />
          {/* <Clients /> */}
          <Certifications />
          {/* <Experience /> */}
          {/* <Approach /> */}
          <Footer />
          {/* <RecentProjects /> */}
          {/* <CurvedLine /> */}
        </TracingBeam>
      </div>
    </main>
  );
}
