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
        <div className='relative block md:flex min-h-screen'>
          <Navbar />
          <main className='relative z-10 w-full'>
            <div className='content-body p-8 lg:p-20 md:p-10 xl:p-28 2xl:p-40'>
              {children}
            </div>
            <div className='skewpart'></div>
          </main>
        </div>
      </body>
    </html>
  )
}
