import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: 'Car Hub',
  description: 'Discover cars',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="relative">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
