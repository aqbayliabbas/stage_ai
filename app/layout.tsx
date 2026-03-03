import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const denton = localFont({
  src: [
    {
      path: "../public/fonts/denton-font/DentonTest-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/denton-font/DentonTest-Bold.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-serif",
});

const barlow = localFont({
  src: [
    {
      path: "../public/fonts/Barlow/Barlow-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow/Barlow-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow/Barlow-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/Barlow/Barlow-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Stage — Join the Waitlist",
  description:
    "Get early access to Stage — Your brand strategy done by AI. Built on 5 years of real methodology.",
  openGraph: {
    images: ["/opengraph-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${denton.variable} ${barlow.variable}`}>
        {children}
      </body>
    </html>
  );
}
