import "./globals.css";
import Navbar from "../ServerActions/features/Navbar";
import { ThemeProvider } from "@/TypeScript/lib/ThemeContext";

export const metadata = {
  title: "Next Todos",
  description: "Created for Server Actions practice",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-futura dark:bg-slate-800">
        <ThemeProvider>
          {/* <Navbar /> */}
          <main className="mx-auto max-w-full p-4 bg-stone-200 min-h-screen text-black">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
