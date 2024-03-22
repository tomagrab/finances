import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/app/globals.scss';
import { ClerkProvider } from '@clerk/nextjs';
import Header from '@/components/layout/Header/Header';
import { ScrollArea } from '@/components/ui/scroll-area';
import Navbar from '@/components/layout/Navbar/Navbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Finances',
  description: 'A personal finance app.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className={`flex min-h-[100dvh] w-full`}>
            <Navbar />
            <div className={`flex-1 flex-col`}>
              <Header />
              <div className={`bg-slate-200 p-4`}>
                <ScrollArea
                  className={`
                    bg-mint-cream
                    h-[calc(100dvh-10rem)]
                    w-full
                    rounded
                    p-4
                    shadow-xl
                    md:h-[calc(100dvh-6rem)]
                  `}
                >
                  {children}
                </ScrollArea>
              </div>
            </div>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
