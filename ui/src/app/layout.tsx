import './globals.css'
import LayoutProvider from './layoutProvider'
import Navbar from './navbar'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/*
        <head /> will contain the components returned by the nearest parent
        head.tsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />

      <body>
        <div className='relative block md:flex min-h-screen'>
          <LayoutProvider item={children}></LayoutProvider>
        </div>
      </body>
    </html>
  )
}
