import type { Metadata } from "next";
import { Cairo, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const poppins = Poppins({
  weight: ["200", "400", "600", "800"],
  subsets: ["latin"],
  display: "swap",
});
const cairo = Cairo({
  weight: ["200", "400", "600", "800"],
  subsets: ["arabic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Africoast",
  description: "The new vision of tunisian shopping",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const lang = "arabic";
  return lang == "arabic" ? (
    <html dir="rtl" lang="ar">
      <body className={cairo.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  ) : (
    <html dir="ltr" lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
