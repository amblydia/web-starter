import { HugeiconsIcon, type IconSvgElement } from "@hugeicons/react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * One wrapper for every icon so sizing stays consistent.
 * - sm: inline with small text
 * - md: default UI icon (buttons, nav, form feedback)
 * - lg: card/feature icon
 * - xl: large decorative icon
 */
const iconVariants = cva("shrink-0", {
  defaultVariants: { size: "md" },
  variants: {
    size: {
      lg: "size-6",
      md: "size-5",
      sm: "size-4",
      xl: "size-10",
    },
  },
});

type IconProps = Omit<React.ComponentProps<"svg">, "ref" | "strokeWidth"> &
  VariantProps<typeof iconVariants> & {
    icon: IconSvgElement;
  };

function Icon({ icon, size, className, ...props }: IconProps) {
  return (
    <HugeiconsIcon
      aria-hidden="true"
      className={cn(iconVariants({ size }), className)}
      icon={icon}
      strokeWidth={1.75}
      {...props}
    />
  );
}

export { Icon };
