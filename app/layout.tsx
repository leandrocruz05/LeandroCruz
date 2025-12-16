import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="es">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}