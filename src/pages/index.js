import Navbar from "@/components/landing-page/navbar";
import Hero from "@/components/landing-page/hero";
import Footer from "@/components/landing-page/footer";
import JobDescription from "@/components/landing-page/jobdescription";
import Team from "@/components/landing-page/team";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero /> 
      <JobDescription />
      <Team />
      <Footer />
    </div>
  );
}
