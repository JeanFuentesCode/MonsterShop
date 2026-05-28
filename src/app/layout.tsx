import './globals.css';
import type { Metadata } from 'next';
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: 'MonsterShop | Industrial Enterprise',
  description: 'Sistema de gestión industrial de alto rendimiento con arquitectura optimizada.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark" style={{ colorScheme: 'dark' }}>
      <body className={`${inter.variable} ${jakarta.variable} font-sans bg-background text-foreground overflow-x-hidden antialiased`}>
        {children}
      </body>
    </html>
  );
}
