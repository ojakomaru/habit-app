import type { Metadata } from 'next';
import { Noto_Sans_JP } from 'next/font/google';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import NextAuthProvider from './api/auth/NextAuthProvider';
import { AppThemeProvider } from '../theme';
import { Apps } from '@mui/icons-material';
import AppStore from '../store';

const inter = Noto_Sans_JP({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Ojako Habit App',
  description: 'Ojakoの習慣管理アプリケーションです',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
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
