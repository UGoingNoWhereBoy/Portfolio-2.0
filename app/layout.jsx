import './globals.css'
import  ThemeProvider  from './(useclient)/nexttheme'
import Analytics from './(useclient)/analytics'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      {/*
        <head /> will contain the components returned by the nearest parent
        head.jsx. Find out more at https://beta.nextjs.org/docs/api-reference/file-conventions/head
      */}
      <head />
     
        <body className='h-full'>
         <ThemeProvider enableSystem={true} attribute='data-theme'>
           <Navbar />
           {children}
           <Footer />
           <Analytics />
          </ThemeProvider>
        </body>
     
    </html>
  )
}
