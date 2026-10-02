import { Container } from "@/components/layout/container";

export default function Loading() {
  return (
    <Container className="flex min-h-[50svh] items-center justify-center py-24">
      <div
        aria-live="polite"
        className="flex items-center gap-3 text-muted-foreground"
        role="status"
      >
        <span
          aria-hidden="true"
          className="size-5 animate-spin rounded-full border-2 border-current border-t-transparent motion-reduce:animate-none"
        />
        <span>Loading…</span>
      </div>
    </Container>
  );
}
