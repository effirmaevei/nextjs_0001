import "../node_modules/react-toastify/dist/ReactToastify.css";
import "./globals.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reminisce",
  description: "A place for memories",
  authors: [{ name: "jmferreirab", url: "https://github/jmferreirab" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
