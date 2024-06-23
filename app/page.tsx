import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/floating-navbar";
import { IconBriefcase, IconHome, IconMail } from "@tabler/icons-react";
import Grid from "@/components/Grid";

export default function Home() {
  return (
    <div className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav
          navItems={[
            { name: "Home", link: "/", icon: <IconHome /> },
            { name: "Projects", link: "/", icon: <IconBriefcase /> },
            { name: "Contact Me", link: "/", icon: <IconMail /> },
          ]}
        />
        <Hero />
        <Grid />
      </div>
    </div>
  );
}
