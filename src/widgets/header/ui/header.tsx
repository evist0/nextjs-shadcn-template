import { forwardRef } from 'react';

import Link from 'next/link';

export type HeaderProps = Record<string, never>;

export const Header = forwardRef<HTMLDivElement, HeaderProps>((_, ref) => (
  <header
    className={
      'sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60'
    }
    ref={ref}
  >
    <div className={'container flex h-14 max-w-screen-2xl items-center'}>
      <Link href={'/'} className={'text-2xl font-medium'}>
        Awesome logo
      </Link>
    </div>
  </header>
));

Header.displayName = 'Header';
