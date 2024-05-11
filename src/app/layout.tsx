"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "MCecommerce",
//   description: "MC-Ecommerce",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="p-4">
          <ToastContainer />
          {children}
        </main>
      </body>
    </html>
  );
}
