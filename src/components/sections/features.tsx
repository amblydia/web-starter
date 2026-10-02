import {
  CustomerSupportIcon,
  Layers01Icon,
  Shield01Icon,
} from "@hugeicons/core-free-icons";

import { Section } from "@/components/layout/section";
import { Icon } from "@/components/ui/icon";

const features = [
  {
    description:
      "A short description of the first thing you offer and the result it delivers.",
    icon: Layers01Icon,
    title: "First service",
  },
  {
    description:
      "A short description of the second thing you offer and why customers value it.",
    icon: Shield01Icon,
    title: "Second service",
  },
  {
    description:
      "A short description of the third thing you offer and how you support people.",
    icon: CustomerSupportIcon,
    title: "Third service",
  },
];

function Features() {
  return (
    <Section aria-labelledby="services-heading" id="services" variant="muted">
      <div className="max-w-2xl space-y-4">
        <h2 id="services-heading">What we do</h2>
        <p className="text-lg text-muted-foreground">
          Introduce your services or key features in a sentence or two.
        </p>
      </div>
      <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <li
            className="rounded-xl border bg-card p-6 text-card-foreground"
            key={feature.title}
          >
            <Icon className="text-primary" icon={feature.icon} size="lg" />
            <h3 className="mt-4">{feature.title}</h3>
            <p className="mt-2 text-muted-foreground">{feature.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export { Features };
