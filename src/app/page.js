import Hero from "@/components/home/Hero";
import Featured from "@/components/home/Featured";
import AboutSnippet from "@/components/home/AboutSnippet";
import Testimonials from "@/components/home/Testimonials";
import InstagramFeed from "@/components/home/InstagramFeed";

export default function Home() {
  return (
    <main>
      <Hero />
      <Featured />
      <AboutSnippet />
      <Testimonials />
      <InstagramFeed />
    </main>
  );
}
