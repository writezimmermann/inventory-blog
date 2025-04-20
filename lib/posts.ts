import { promises as fs } from 'fs'
import path from 'path'
import { compileMDX } from 'next-mdx-remote/rsc'
import { ReactNode } from 'react'

export interface Post {
  title: string
  date: string
  content: ReactNode
}

export interface PostMetadata {
  title: string
  date: string
}

export async function getPosts(): Promise<Post[]> {
  const postsDirectory = path.join(process.cwd(), 'posts')
  const filenames = await fs.readdir(postsDirectory)
  
  const posts = await Promise.all(
    filenames
      .filter(filename => filename.endsWith('.mdx'))
      .map(async filename => {
        const filePath = path.join(postsDirectory, filename)
        const source = await fs.readFile(filePath, 'utf8')
        
        const { content, frontmatter } = await compileMDX<PostMetadata>({
          source,
          options: { 
            parseFrontmatter: true,
            mdxOptions: {
              development: process.env.NODE_ENV === 'development'
            }
          }
        })

        return {
          title: frontmatter.title,
          date: new Date(frontmatter.date).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit'
          }).replace('/', '.'),
          content
        }
      })
  )

  return posts.sort((a, b) => 
    new Date(b.date).getTime() - new Date(a.date).getTime()
  )
} 