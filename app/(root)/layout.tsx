import '../globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Topbar from '@/components/shared/Topbar'
import Bottombar from '@/components/shared/Bottombar'
import RightSidebar from '@/components/shared/RightSidebar'
import LeftSidebar from '@/components/shared/LeftSidebar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Threads',
  description: 'A Next js 13 Threads Clone',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        
        <Topbar/>
        <main>
          <LeftSidebar/>
          <section className='main-container'>
            <div className='w-full max-w-4xl'>

            </div>
          </section>
          <RightSidebar/>
        </main>
        <Bottombar/>

        {children}
        </body>
    </html>
  )
}
