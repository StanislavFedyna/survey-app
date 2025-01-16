import type { Metadata } from 'next';
import { ReactNode } from 'react';

import StoreProvider from '@/redux/StoreProvider';

import './globals.css';

export const metadata: Metadata = {
  title: 'Nebula',
  description:
    'Discover meaningful connections through a thoughtfully crafted client quiz.',
};

interface RootLayoutProps {
  children: ReactNode;
}

const RootLayout = ({ children }: Readonly<RootLayoutProps>) => (
  <html lang="en">
    <body>
      <StoreProvider>{children}</StoreProvider>
    </body>
  </html>
);

export default RootLayout;
