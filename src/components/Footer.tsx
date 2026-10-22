import { links } from '../data/site';

const footLinks = [
  { label: '提示词', href: links.prompts },
  { label: '手册', href: links.book },
  { label: 'GitHub', href: links.github },
  { label: '许可证', href: links.license },
];

export function Footer() {
  return (
    <footer className="on-field bg-field text-field-ink">
      <div className="mx-auto w-full max-w-[1440px] px-5 pb-6 md:px-10">
        <div className="flex flex-col gap-2 border-0 pt-10 text-sm text-field-muted md:grid md:grid-cols-[1fr_auto_1fr] md:gap-6 md:pt-14">
          <p className="text-field-ink">prompts.chat</p>
          <p className="flex flex-wrap gap-x-6 gap-y-1 md:justify-center">
            {footLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('#') ? undefined : '_blank'}
                rel={item.href.startsWith('#') ? undefined : 'noopener noreferrer'}
                className="text-field-ink transition-colors hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </p>
          <p className="md:text-right">2026</p>
        </div>
      </div>
    </footer>
  );
}
