import "./globals.css";
import { Inter } from "next/font/google";
import Menu from "@/components/menu/menu.component";
import { Providers } from "./provider";

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
          <Providers>
            <Menu />
            {children}
          </Providers>
        </div>
      </body>
    </html>
  );
}
