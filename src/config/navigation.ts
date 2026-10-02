export interface NavItem {
  href: string;
  label: string;
}

const main: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/#services", label: "Services" },
  { href: "/#about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/**
 * Single source of truth for the header, mobile menu and footer.
 */
export const navigation = {
  /** Optional call-to-action button shown in the header. */
  cta: {
    href: "/contact",
    label: "Get in touch",
  } satisfies NavItem as NavItem | null,
  /** Footer navigation. Defaults to the main links. */
  footer: main,
  /** e.g. { label: "Privacy Policy", href: "/privacy" } — add the page first. */
  legal: [] as NavItem[],
  main,
};
