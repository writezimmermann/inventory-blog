import './globals.css'
import Home from './page'

export const metadata = {
  title: 'Inventory - Michael Zimmermann',
  description: 'Personal blog by Michael Zimmermann',
}

export default function RootLayout() {
  return (
    <html lang="en">
      <body>
        <Home />
      </body>
    </html>
  )
} 