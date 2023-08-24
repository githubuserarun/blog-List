import './index.css'

const BlogItem = props => {
  const {title, description, publishedDate} = props
  return (
    <div className="list_container">
      <li>
        <div className="list_top">
          <h1>{title}</h1>
          <p>{publishedDate}</p>
        </div>
        <div className="list_bottom">
          <p>{description}</p>
        </div>
        <hr />
      </li>
    </div>
  )
}
export default BlogItem
