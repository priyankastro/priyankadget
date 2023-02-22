import './globals.css'
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
        <Navbar />
        <main className='relative h-screen z-10'>
          <div className='px-16 py-10'>
            {children}
          </div>
          <div className='skewpart'></div>
        </main>
      </body>
    </html>
  )
}
