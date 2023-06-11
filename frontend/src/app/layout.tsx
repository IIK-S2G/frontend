import { ClientProvider } from '../redux/provider'
import Navbar from '../components/nav/Navbar'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'S2G Playground',
  description: 'Secret flag: ###',
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