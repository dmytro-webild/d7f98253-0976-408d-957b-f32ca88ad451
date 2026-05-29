import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import Tag from "@/tag/Tag";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Roboto } from "next/font/google";



export const metadata: Metadata = {
  title: 'The Lord Heals Co. - Ghanaian Agricultural Export & Supply Chain',
  description: 'Leading exporter of premium raw cocoa beans and sustainable cocoa bean shells from Ghana to international markets like China and Malaysia. GACC certified.',
  keywords: ["cocoa beans, cocoa shells, agricultural export, Ghana, supply chain, GACC, China, Malaysia, sustainable agriculture"],
  openGraph: {
    "title": "The Lord Heals Co. - Ghanaian Agricultural Export & Supply Chain",
    "description": "Leading exporter of premium raw cocoa beans and sustainable cocoa bean shells from Ghana to international markets like China and Malaysia. GACC certified.",
    "url": "https://www.thelordhealsco.com",
    "siteName": "The Lord Heals Company Limited",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/low-angle-perspective-tree-with-beautiful-canopy_23-2151305130.jpg",
        "alt": "Ghanaian cocoa farm at sunset"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "The Lord Heals Co. - Ghanaian Agricultural Export & Supply Chain",
    "description": "Leading exporter of premium raw cocoa beans and sustainable cocoa bean shells from Ghana to international markets like China and Malaysia. GACC certified.",
    "images": [
      "http://img.b2bpic.net/free-photo/low-angle-perspective-tree-with-beautiful-canopy_23-2151305130.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${roboto.variable} antialiased`}>
          <Tag />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
