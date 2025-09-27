import Link from 'next/link'
import { getAllPosts } from './lib/posts'

export default function Home() {
  const posts = getAllPosts()
  return (
    <div className="container">
      <section className="main-hero">
        <div style={{display:'flex',gap:24,alignItems:'center',flexWrap:'wrap'}}>
          <div style={{flex:1,minWidth:280}}>
            <h1 style={{fontSize:32}}>Hands-on farming, modern tools, practical business training.</h1>
            <p style={{color:'#9aa4b2'}}>I’m Fine — product manager turned agripreneur. SSI helps people build sustainable income through catfish & mushroom farming, project skills, and simple automation like MyFishDoc.online.</p>
            <p style={{marginTop:12}}><a href="/blog" style={{background:'var(--accent)',padding:'10px 14px',borderRadius:10,color:'#000',fontWeight:700,textDecoration:'none'}}>Read the Blog</a></p>
          </div>
          <div style={{width:360}}><img src="/images/hero.jpg" alt="hero" style={{width:'100%',borderRadius:12}}/></div>
        </div>
      </section>

      <section style={{marginTop:36}}>
        <h2>Latest posts</h2>
        <div className="post-list">
          {posts.slice(0,5).map(p => (
            <div key={p.slug} className="post-card">
              <a href={'/blog/' + p.slug} style={{color:'#fff',textDecoration:'none',fontWeight:700}}>{p.title}</a>
              <div style={{color:'#9aa4b2',fontSize:13}}>{p.date}</div>
              <p style={{color:'#9aa4b2'}}>{p.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
