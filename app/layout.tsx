import type { Metadata } from "next";
import { Unbounded, DM_Sans } from "next/font/google";
import "./globals.css";

const unbounded = Unbounded({
  subsets: ["latin"],
  variable: "--font-unbounded",
  weight: ["400", "700", "900"],
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Ovy Stars – Gymnastika · Tanec · Fitness Freestyle | Ostrava",
  description:
    "Kroužky gymnastiky, tance a fitness freestyle pro děti od 3 do 14 let v Ostravě. Profesionální trenéři, přátelská atmosféra. Přihlaste své dítě ještě dnes!",
  keywords: [
    "gymnastika děti Ostrava",
    "kroužky pro děti Ostrava",
    "tanec děti Ostrava",
    "fitness freestyle děti",
    "dětský sportovní kroužek Ostrava",
    "akrobacie děti Ostrava",
  ],
  openGraph: {
    title: "Ovy Stars – Kroužky pro děti v Ostravě",
    description:
      "Gymnastika, tanec a fitness freestyle pro děti od 3 do 14 let. Zapište dítě do Ovy Stars v Ostravě.",
    locale: "cs_CZ",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="cs"
      className={`${unbounded.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
