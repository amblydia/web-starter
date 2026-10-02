"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkProps = Omit<React.ComponentProps<typeof Link>, "href"> & {
  href: string;
};

/** Link that marks itself as the current page for assistive tech and styling. */
function NavLink({ href, ...props }: NavLinkProps) {
  const pathname = usePathname();
  // Hash links (e.g. "/#about") point inside a page and are never "current".
  const isCurrent = !href.includes("#") && pathname === href;

  return (
    <Link
      aria-current={isCurrent ? "page" : undefined}
      href={href}
      {...props}
    />
  );
}

export { NavLink };
