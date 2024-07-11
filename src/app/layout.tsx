import AllProviders from "@/lib/AllProviders";
import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import { Toaster } from 'sonner';
import { auth } from "../../auth";
import Favicon from '../../public/favicon.ico';
import LoginModel from "./_components/LoginModel";
import Navbar from "./_components/Navbar";
import RegisterModel from "./_components/RegisterModal";
import "./globals.css";

export const metadata: Metadata = {
  title: "DEXON | Eommerce platform",
  description: "Trending new latest stylish products available at DEXON",
  icons: [{ rel: 'icon', url: Favicon.src }],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()
  return (
    <AllProviders>
      <SessionProvider session={session}>
        <html lang="en">
          <body style={{ fontFamily: 'Conthrax' }} >
            <div className="w-full relative">
              <Navbar />
              <Toaster position="bottom-right" expand={false} richColors />
              <RegisterModel />
              <LoginModel />
              {children}
            </div>
          </body>
        </html>
      </SessionProvider>
    </AllProviders>
  );
}
