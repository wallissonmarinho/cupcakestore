import type { Metadata } from 'next';
import ThemeRegistry from '@/styles/theme/ThemeRegistry';
import { NextIntlProvider } from '@/shared/providers/NextIntlProvider';

export const metadata: Metadata = {
  title: 'Next App MUI',
  description: 'Generated by create next app'
};

export default async function RootLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  return (
    <html lang={locale}>
      <NextIntlProvider>
        <ThemeRegistry>
          <body>{children}</body>
        </ThemeRegistry>
      </NextIntlProvider>
    </html>
  );
}