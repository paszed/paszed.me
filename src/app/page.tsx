import {
  ContactCTA,
  CurrentFocus,
  FeaturedProjects,
  Hero,
  Philosophy,
} from "@/features/home";

export default function HomePage() {
  return (
    <>
      <Hero />

      <FeaturedProjects />

      <CurrentFocus />

      <Philosophy />

      <ContactCTA />
    </>
  );
}
