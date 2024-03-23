import type { Metadata } from "next";
import Header from "@/components/header";
import Footer from "@/components/footer";
import "./global.scss";

export const metadata: Metadata = {
  title: "Wallet dashboard",
  description: "Сайт для отслеживания информации по своим крипто-кошелькам",
  icons: {
    icon: "/favicon/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="body">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
