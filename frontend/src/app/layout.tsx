import ClientProvider from '@/redux/providers';
import Navbar from '../components/nav/Navbar'
import './globals.css'

export const metadata = {
  title: 'S2G Playground',
  description: 'Secret flag: ###',
}

const RootLayout = ({children}: {children: React.ReactNode}): JSX.Element => {
    return (
        <html lang="en">
            <body>
                <ClientProvider>
                    <Navbar/>
                    {children}
                </ClientProvider>
            </body>
        </html>
    )
}

export default RootLayout