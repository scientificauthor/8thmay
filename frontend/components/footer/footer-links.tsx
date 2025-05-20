import Link from "next/link";
import { FooterLinksProps } from "@/types/footer";

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      <h3 className="text-[#A5A5A5]">{title}</h3>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <Link href={link.href} className="text-sm hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}