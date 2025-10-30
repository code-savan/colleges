import { Geist,  Geist_Mono } from "next/font/google";
import "./globals.css";

import { Open_Sans } from "next/font/google";




const openSans = Open_Sans({
    subsets: ["latin"],
    variable: "--font-open-sans",
    weight: ["300","400", "500", "600", "700", "800"]
  });

export const metadata = {
  title: "British AUC University PathWay",
  description: "Achieving academic excellence and global success",
  icons: {
    icon: "/icon.jpeg",
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
