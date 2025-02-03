
import Certifications from "@/components/Certifications";

import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import MyProjects from "@/components/MyProjects";
import SmoothProjects from "@/components/SmoothProjects";
import TimelineSection from "@/components/TimelineSection";

import { FloatingNav } from "@/components/ui/FloatingNav";
import { TracingBeam } from "@/components/ui/tracing-beam";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">

      <div className="max-w-7xl w-full">
        {/* <TracingBeam> */}
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        {/* <MyProjects /> */}
        <SmoothProjects />
        {/* <Clients /> */}
        <Certifications />
        <TimelineSection />
        {/* <Experience /> */}
        {/* <Approach /> */}
        <Footer />
        {/* <RecentProjects /> */}
        {/* <CurvedLine /> */}
        {/* </TracingBeam> */}
      </div>
    </main>
  );
}
