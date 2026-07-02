import { CurrentFocus } from "@/features/home/components/current-focus";
import { Hero } from "@/features/home/components/hero";
import { Philosophy } from "@/features/home/components/philosophy";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentFocus />
      <Philosophy />
    </>
  );
}
