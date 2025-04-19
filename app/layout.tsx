import './globals.css'
import { getPosts } from '@/lib/posts'
import Home from './page'

export const metadata = {
  title: 'Inventory - Michael Zimmermann',
  description: 'Personal blog by Michael Zimmermann',
}

export default async function RootLayout() {
  const posts = await getPosts()

  return (
    <html lang="en">
      <body>
        <Home posts={posts} />
      </body>
    </html>
  )
} 