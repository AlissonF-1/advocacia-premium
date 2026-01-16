import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd"; // Importe o componente criado

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

// Configuração Profissional de SEO
export const metadata: Metadata = {
  // Define a base para URLs relativas (essencial para imagens OG funcionarem)
  metadataBase: new URL("https://advocacia-premium-demo.vercel.app"), 

  title: {
    default: "Dr. Carlos Silva | Advocacia de Alta Performance",
    template: "%s | Silva & Associados", // Permite títulos como "Sobre | Silva & Associados"
  },
  description: "Especialista em Direito Civil, Trabalhista e Empresarial. Mais de 15 anos de experiência defendendo patrimônios e garantindo direitos. Agende sua consulta.",
  
  keywords: ["Advogado SP", "Direito Trabalhista", "Advocacia Premium", "Direito Civil", "Consultoria Jurídica"],
  
  authors: [{ name: "Silva & Associados" }],
  creator: "Seu Nome (Dev)",
  
  // Configuração para compartilhamento (WhatsApp, LinkedIn, Facebook)
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://advocacia-premium-demo.vercel.app",
    title: "Dr. Carlos Silva | Advocacia de Alta Performance",
    description: "Defesa estratégica para casos complexos. Recupere sua tranquilidade jurídica hoje mesmo.",
    siteName: "Silva & Associados",
    images: [
      {
        url: "/og-image.jpg", // Você precisaria colocar uma imagem chamada og-image.jpg na pasta public
        width: 1200,
        height: 630,
        alt: "Escritório Silva & Associados",
      },
    ],
  },

  // Configuração para Twitter
  twitter: {
    card: "summary_large_image",
    title: "Dr. Carlos Silva | Advocacia Estratégica",
    description: "Defesa estratégica para casos complexos.",
    images: ["/og-image.jpg"],
  },

  // Instruções para Robôs (Google, Bing)
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  // Ícones (Favicon)
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      {/* AQUI ESTÁ A CORREÇÃO: As classes de cor vão direto na className */}
      <body className={`${inter.variable} ${playfair.variable} font-sans antialiased bg-slate-50 text-slate-900`}>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}