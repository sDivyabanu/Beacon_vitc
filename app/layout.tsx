import type { Metadata } from "next";
import { Playfair_Display, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "BEACON | Seven Clubs. One Community — VIT Chennai",
  description:
    "BEACON is a collaborative initiative uniting seven premier student clubs at VIT Chennai. Discover communities, events, recruitments, and endless possibilities.",
  keywords: [
    "BEACON",
    "VIT Chennai",
    "Student Clubs",
    "Office of Students' Welfare",
    "Recruitments",
    "University Movement",
    "Neo-Brutalism",
  ],
  openGraph: {
    title: "BEACON | Collaborative Student Initiative - VIT Chennai",
    description:
      "Seven Communities. One Place to Begin. Explore clubs, recruitments, and collaborative projects at VIT Chennai.",
    url: "https://beacon.vitchennai.ac.in",
    siteName: "BEACON VIT Chennai",
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
      lang="en"
      className={`${playfair.variable} ${jakarta.variable} scroll-smooth h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-[#F5EAD8] text-[#20232C] font-body-sans selection:bg-[#C86B1F] selection:text-[#F5EAD8]">
        {children}
      </body>
    </html>
  );
}
