import './globals.css';
import { QuizProvider } from '../context/QuizContext';
import { formulalBold, formulalRegular, formulalWide } from '@/lib/fonts'

export const metadata = {
  title: 'F1 Fan Challenge',
  description: 'Quiz demonstration for brand activation at events.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${formulalBold.variable} ${formulalRegular.variable} ${formulalWide.variable}`}>
      <body>
        <QuizProvider>{children}</QuizProvider>
      </body>
    </html>
  );
}
