import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "@/components/menu/menu.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "WW - IndieGameBazaar",
  description: "game publisher and store for game lovers and indie developers",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="min-h-screen overflow-hidden">
          <Menu />
          {children}
        </div>
      </body>
    </html>
  );
}
