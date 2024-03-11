import { ThemeProvider } from "@/components/theme-provider";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import DarkMode from "@/components/dark-mode";

const jetbrains_mono = JetBrains_Mono({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${jetbrains_mono.className} bg-dark`}>
        <ThemeProvider
          attribute="Class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <DarkMode />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
