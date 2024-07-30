import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "./Layouts/Layout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanagroos",
  description: "Made by faxraddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
