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

      <CurrentFocus />

      <FeaturedProjects />

      <Philosophy />

      <ContactCTA />
    </>
  );
}
