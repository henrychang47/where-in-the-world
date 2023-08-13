'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { useState, useEffect } from 'react'

import Navbar from './components/Navbar'
import { GlobalContextProvider } from './Context/store'

const inter = Inter({ subsets: ['latin'] })


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') setTheme('dark');
    else if (theme === 'dark') setTheme('light');
  }

  useEffect(() => {
    document.documentElement.className = theme;
  }, [theme])

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar toggleTheme={toggleTheme} />
        <GlobalContextProvider>
          {children}
        </GlobalContextProvider>
      </body>
    </html>
  )
}
