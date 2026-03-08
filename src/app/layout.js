import { Raleway } from "next/font/google";
import Navbar from "@/components/shared/navber"; // বানান ঠিক করে দেওয়া হয়েছে (navber -> navbar)
import "./globals.css";
import { AuthProvider } from "@/contexts/authContext";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/shared/Footer";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-raleway",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Glowly | Premium Skincare Store",
  description: "Experience perfection in skincare with Glowly.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${raleway.variable} font-raleway antialiased`}
        suppressHydrationWarning={true}
      >
        <AuthProvider>
          {/* <Navbar /> */}

          <main>{children}</main>

          {/* <Footer /> */}

          <Toaster
            position="top-center"
            reverseOrder={false}
            toastOptions={{
              style: {
                fontFamily: "var(--font-raleway)",
                fontSize: "14px",
              },
            }}
          />
        </AuthProvider>
      </body>
    </html>
  );
}
