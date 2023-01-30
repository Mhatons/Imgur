import Nav from "./Nav"
import PostDetails from "./PostDetails"
import PostHeaders from "./PostHeaders"

function PostNav_bg() {
    return (
        <div>
            <div className="post_page_bg">
                <Nav />
                <PostDetails />
                <div>
                    <div className="post_headers2">
                        <div>POSTS</div>
                        <div>FAVOURITES</div>
                        <div>COMMENTS</div>
                        <div>ABOUT</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostNav_bg