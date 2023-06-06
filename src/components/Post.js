import './Post.css'

function Post(props){
  const {userId,id,title,body}=props
    return <div className='post'>

        <small>{id}</small>
        <h2>{title}</h2>
        <p>{body}</p>
        <h3>UserId:{userId}</h3>
    </div>

}
export default Post