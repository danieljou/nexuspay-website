import { Inter } from 'next/font/google'
import { AuthProvider } from '../../context/AuthContext'
import { LanguageProvider } from '../../context/LanguageContext'
import { ThemeProvider } from '../../context/ThemeContext'

import { ToastProvider } from '../../context/ToastContext'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'NexusPay - The Cashless App',
  description: 'Experience seamless digital payments in Cameroon',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider>
          <LanguageProvider>
            <AuthProvider>
              <ToastProvider>
                {children}
              </ToastProvider>
            </AuthProvider>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}