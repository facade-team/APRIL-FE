import type { Metadata } from "next";
import "./globals.css";
import Topbar from "@/components/topbar";

export const metadata: Metadata = {
  title: "APRIL🌹",
  description: "AI Pattern behavior Routinization with IOT and LLM",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Topbar />
        <main className="w-full h-[calc(100%-4rem)]">{children}</main>
      </body>
    </html>
  );
}
