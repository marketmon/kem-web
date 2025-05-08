import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  weight: ['300', '500', '700', '800'],
  subsets: ["latin"],
  variable: '--font-manrope',
});

// Define metadata using the Metadata API
export const metadata = {
  title: 'The Future Resume | 3D Knowledge Graph',
  description: "Hi I'm Ethan and this is a 3d representation of everything I've ever done. Enjoy.",
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
