import BlogHero from "../Blog/BlogHero"
import CategoryBlog from "../Blog/CategoryBlog"
import LatestBlog from "../Blog/LatestBlog"
import StayBlog from "../Blog/StayBlog"
import TopRead from "../Blog/TopRead"

const Blog = () => {
  return (
    <>
    <h1>Blog Page</h1>
    <BlogHero/>
    <TopRead/>
    <LatestBlog/>
    <CategoryBlog/>
    <StayBlog/>

    
    </>
  )
}

export default Blog