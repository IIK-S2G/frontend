import Navbar from '../components/nav/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'
import { ClientProvider } from '../redux/provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'S2G Playground',
  description: 'Secret flag: ###',
  icons: {
    icon: '/favicon.ico',
  },
}

const RootLayout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <html lang="en">
            <body className={inter.className}>
                <ClientProvider>
                    <Navbar/>
                    {children}
                </ClientProvider>
            </body>
        </html>
    )
}

export default RootLayout