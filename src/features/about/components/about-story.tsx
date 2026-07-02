import { H2 } from "@/components/ui/heading";

export function AboutStory() {
  return (
    <section className="space-y-6">
      <H2>My Story</H2>

      <div className="space-y-4 text-lg leading-8 text-neutral-600 dark:text-neutral-400">
        <p>
          {
            "I'm passionate about building software that solves real problems. I enjoy working across the stack, from backend systems to polished user interfaces."
          }
        </p>

        <p>
          {
            "My focus is on creating developer tools, AI-powered applications, and products that are simple to use but thoughtfully engineered."
          }
        </p>

        <p>
          {
            "I treat every project as an opportunity to learn, improve my engineering skills, and document the process so others can benefit from it."
          }
        </p>
      </div>
    </section>
  );
}
