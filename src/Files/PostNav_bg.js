import Nav from "./Nav"
import PostDetails from "./PostDetails"
import PostHeaders from "./PostHeaders"

function PostNav_bg(){
    return(
        <div>
            <div className="post_page_bg">
                <Nav />
                <PostDetails />
                <PostHeaders />
            </div>
        </div>
    )
}

export default PostNav_bg