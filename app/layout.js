import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Teste com NextJs 13',
  description: 'Criado para testasr as funções no Next 13',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>Layout</h1>
        <hr /> <br />
        {children}
      </body>
    </html>
  )
}
