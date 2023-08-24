import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul>
      {blogsList.map(each => (
        <BlogItem
          key={each.id}
          title={each.title}
          description={each.description}
          publishedDate={each.publishedDate}
        />
      ))}
    </ul>
  )
}
export default BlogList
