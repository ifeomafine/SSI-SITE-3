import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { marked } from 'marked'

const postsDir = path.join(process.cwd(), 'posts')

export function getAllPosts() {
  if (!fs.existsSync(postsDir)) return []
  const names = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'))
  const posts = names.map(name => {
    const full = path.join(postsDir, name)
    const raw = fs.readFileSync(full, 'utf-8')
    const { data } = matter(raw)
    const slug = name.replace(/\.md$/, '')
    return { slug, title: data.title || slug, date: data.date || '', description: data.description || '' }
  })
  posts.sort((a,b) => new Date(b.date) - new Date(a.date))
  return posts
}

export function getPostBySlug(slug) {
  const full = path.join(postsDir, slug + '.md')
  if (!fs.existsSync(full)) return null
  const raw = fs.readFileSync(full, 'utf-8')
  const { data, content } = matter(raw)
  const html = marked.parse(content)
  return { slug, title: data.title || slug, date: data.date || '', description: data.description || '', content: html }
}
