import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ['300', '500', '700', '800'],
  subsets: ["latin"],
  variable: '--font-manrope',
});

// Define metadata using the Metadata API
export const metadata = {
  title: 'Interactive Resume | 3D Skills Graph',
  description: 'Explore my skills, experience, and education in an interactive 3D graph',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body
        className={`antialiased text-white ${manrope.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
