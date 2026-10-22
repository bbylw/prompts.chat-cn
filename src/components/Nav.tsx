import { links, nav } from '../data/site';
import { Logo } from './Logo';

const compact = new Set(['#proof', '#use', '#book']);

export function Nav() {
  return (
    <div className="mx-auto w-full max-w-[1440px] px-5 md:px-10">
      <nav aria-label="主导航" className="flex h-[56px] items-center justify-between md:h-[64px]">
        <a href="#top" className="flex items-center gap-2.5 text-base font-medium tracking-[-0.01em]">
          <Logo className="h-[22px] w-[22px] shrink-0" />
          <span>
            prompts<span className="text-muted">.chat</span>
          </span>
        </a>
        <div className="flex items-center gap-5 text-sm md:gap-7">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-muted transition-colors hover:text-ink ${
                compact.has(item.href) ? 'hidden md:inline' : ''
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ink transition-colors hover:text-accent-deep"
          >
            GitHub
          </a>
        </div>
      </nav>
    </div>
  );
}
