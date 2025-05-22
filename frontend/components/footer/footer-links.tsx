import { FooterLinksProps } from "@/types/footer";

export function FooterLinks({ title, links }: FooterLinksProps) {
  return (
    <div className="space-y-4">
      {title && (
        <h3 className="text-sm font-medium text-white dark:text-gray-200">
          {title}
        </h3>
      )}
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm text-gray-300 dark:text-gray-400 hover:text-white dark:hover:text-gray-200 transition-colors"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}