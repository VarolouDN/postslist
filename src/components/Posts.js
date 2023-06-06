import Post from "../components/Post"
import {useEffect,useState} from "react";

function Posts(){
    const[posts,setPosts]=useState([])
    const[error,setError]=useState('')
    const[isLoading,setIsLoading]=useState(true)


    useEffect(()=>{
      fetch("https://jsonplaceholder.typicode.com/posts")
          .then(response=>response.json())
              .then(result=>{
                return  setPosts(result)})
          .catch(error=>setError(error.message)).finally(()=>setIsLoading(false))
    },[])


     if(error){
         return <h1>Error:{error}</h1>
     }
    return (
        <div>
            <h1>Posts</h1>
            <hr/>
            {isLoading?<h1>Loading</h1>:posts.length>0 && posts.map(post=>{

            return <Post key={post.id} {...post}/>
            })}
        </div>
    )

}
export default Posts