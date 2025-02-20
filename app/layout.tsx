import '@/app/ui/global.css'
import { inter } from "@/app/ui/fonts";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Acme Dashboard",
  description: "Official Acme Dashboard",
  metadataBase: new URL("https://dashboard.acme.com"),
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
