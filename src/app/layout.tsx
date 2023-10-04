import './global.css'
import type { Metadata } from 'next'
import { Sora } from 'next/font/google'

const inter = Sora({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'HelpMeOut  ',
  description: 'To ensure the availability and privacy of your video, we recommend saving it to your account.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
