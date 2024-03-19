import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Food high score",
  description: "This is a simple app to track what your colleagues are eating  ",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      {/* iPhone 14 Pro Max */}
      <body className={`${inter.className} p-12 h-dvh w-dvw`}>
        {children}
      </body>
    </html>
  );
}
