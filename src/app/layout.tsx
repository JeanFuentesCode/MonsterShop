import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'MonsterShop | Industrial Core',
  description: 'Sistema de gestión industrial de alto rendimiento.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.className} bg-background text-foreground overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}