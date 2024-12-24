import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Navigation } from '@/components/navigation';
import { Toaster } from '@/components/ui/toaster';
import './globals.css';
import { SnowOverlay } from 'react-snow-overlay';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Aman's Cove",
  description: 'Personal portfolio and blog showcasing my work and thoughts',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="min-h-screen bg-background">
            <SnowOverlay />
            <Navigation />
            <main className="container mx-auto px-4 py-8">{children}</main>
            <Toaster />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}