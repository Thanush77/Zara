import { Outfit } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

import { CartProvider } from "@/context/CartContext";
import { AuthProvider } from "@/context/AuthContext";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata = {
  title: "Café Delight | Premium Coffee & Fresh Eats",
  description: "Experience the best coffee and fresh snacks in town. Order online or book a table.",
  manifest: "/manifest.json",
  openGraph: {
    title: "Café Delight Bangalore",
    description: "The Soul of Bangalore in Every Sip. Order Filter Kaapi and Bun Maska online!",
    type: "website",
  },
};

export const viewport = {
  themeColor: "#8B4513",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            {children}
            <WhatsAppButton />
            <Footer />
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
