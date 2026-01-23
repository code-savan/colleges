import { Geist,  Geist_Mono } from "next/font/google";
import "./globals.css";

import { Open_Sans } from "next/font/google";




const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    weight: ["400", "600", "700"],
    display: "swap",
    preload: true,
  });

export const metadata = {
  title: "British AUC University Pathway",
  description: "Achieving academic excellence and global success",
  icons: {
    icon: "/icon.jpeg",
    shortcut: "/icon.jpeg",
  },
  openGraph: {
    images: ["/collegeslogo.png"],
  },
  twitter: {
    images: ["/collegeslogo.png"],
  },
  other: {
    "format-detection": "telephone=no",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
