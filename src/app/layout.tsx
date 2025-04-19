// app/layout.tsx
import type { Metadata } from "next";
import "@/app/styles.scss";

export const metadata: Metadata = {
  title: "My Next Project",
  description: "Generated with custom CLI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
