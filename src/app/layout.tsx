import { Apps } from '@mui/icons-material';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import AppStore from '../store';
import { AppThemeProvider } from '../theme';
import NextAuthProvider from './api/auth/NextAuthProvider';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ojako Habit App',
  description: 'Ojakoの習慣管理アプリケーションです',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <AppStore>
            <AppThemeProvider>
              <NextAuthProvider>{children}</NextAuthProvider>
            </AppThemeProvider>
          </AppStore>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
