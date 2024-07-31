import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./Layouts/Navbar";
import Layout from "./Layouts/Layout";
import Footer from "./Layouts/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kanagroos",
  description: "Made by faxraddin",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar/>
        <Layout>{children}</Layout>
        <Footer/>
      </body>
    </html>
  );
}
