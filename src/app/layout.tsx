import './globals.css'
import Navbar from "../ServerActions/features/Navbar"

export const metadata = {
  title: 'Next Todos',
  description: 'Created for Server Actions practice',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        {/* <Navbar /> */}
        <main className="mx-auto max-w-full p-4 bg-stone-200 min-h-screen text-black">
          {children}
        </main>
      </body>
    </html>
  )
}
