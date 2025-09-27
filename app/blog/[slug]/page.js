import { getPostBySlug, getAllPosts } from '../../../lib/posts'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map(p => ({ slug: p.slug }))
}

export default function PostPage({ params }) {
  const post = getPostBySlug(params.slug)
  if (!post) return notFound()
  return (
    <div className="container">
      <article style={{maxWidth:800}}>
        <h1>{post.title}</h1>
        <div style={{color:'#9aa4b2'}}>{post.date}</div>
        <div style={{marginTop:20}} dangerouslySetInnerHTML={{ __html: post.content }} />
      </article>
    </div>
  )
}
