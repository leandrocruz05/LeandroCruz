import type { Metadata } from "next";
import "./globals.css";
import Nav from "@/components/nav/nav";
import HoverFooter from "@/components/hover-footer";
import { ThemeProvider } from "@/components/theme/theme-provider";
import Background from "@/components/background/background";

export const metadata: Metadata = {
  title: "Leandro Cruz - Portfolio",
  description:  "Analista Programador SSr - Tech Lead especializado en SQL, PL/SQL, React y desarrollo web",
};

export default function RootLayout({
  children,
}:  Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Background />
          <Nav />
          <main className="min-h-screen flex items-center justify-center p-6">
            {children}
          </main>
          <HoverFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}