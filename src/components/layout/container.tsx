import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const containerVariants = cva("mx-auto w-full px-4 sm:px-6 lg:px-8", {
  defaultVariants: { size: "default" },
  variants: {
    size: {
      default: "max-w-6xl",
      narrow: "max-w-3xl",
      wide: "max-w-7xl",
    },
  },
});

type ContainerProps = React.ComponentProps<"div"> &
  VariantProps<typeof containerVariants>;

function Container({ size, className, ...props }: ContainerProps) {
  return (
    <div className={cn(containerVariants({ size }), className)} {...props} />
  );
}

export { Container, containerVariants };
