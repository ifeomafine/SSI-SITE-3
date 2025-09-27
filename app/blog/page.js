import Link from 'next/link'
import { getAllPosts } from '../../lib/posts'

export default function BlogIndex() {
  const posts = getAllPosts()
  return (
    <div className="container">
      <h1>Blog</h1>
      <p style={{color:'#9aa4b2'}}>Practical guides on catfish, mushrooms, and small farm automation.</p>
      <ul style={{marginTop:20}}>
        {posts.map(p => (
          <li key={p.slug} style={{marginBottom:16}}>
            <a href={'/blog/' + p.slug} style={{color:'#fff',textDecoration:'none',fontWeight:700}}>{p.title}</a>
            <div style={{color:'#9aa4b2',fontSize:13}}>{p.date}</div>
            <p style={{color:'#9aa4b2'}}>{p.description}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
