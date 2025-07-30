import { Inter } from 'next/font/google';
import { AuthProvider } from '../context/AuthContext';


const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'NexusPay - The Cashless App',
  description: 'Experience seamless digital payments in Cameroon',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
