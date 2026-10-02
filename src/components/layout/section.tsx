import { cva, type VariantProps } from "class-variance-authority";

import {
  Container,
  type containerVariants,
} from "@/components/layout/container";
import { cn } from "@/lib/utils";

const sectionVariants = cva("scroll-mt-16 py-16 md:py-24", {
  defaultVariants: { variant: "default" },
  variants: {
    variant: {
      default: "bg-background text-foreground",
      muted: "bg-muted/50 text-foreground",
      primary: "bg-primary text-primary-foreground",
    },
  },
});

type SectionProps = React.ComponentProps<"section"> &
  VariantProps<typeof sectionVariants> & {
    size?: VariantProps<typeof containerVariants>["size"];
  };

/**
 * A page band with consistent vertical spacing and a Container inside.
 * Give it `aria-labelledby` (pointing at its heading) so it becomes a landmark.
 */
function Section({
  variant,
  size,
  className,
  children,
  ...props
}: SectionProps) {
  return (
    <section className={cn(sectionVariants({ variant }), className)} {...props}>
      <Container size={size}>{children}</Container>
    </section>
  );
}

export { Section };
