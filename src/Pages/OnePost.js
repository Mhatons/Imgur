import Nav from "../Files/Nav"
import PostContents from "../Files/PostContents"
import PostNav_bg2 from "../Files/PostNav_bg2"
import Post_details from "../Files/Post_details"

function OnePost() {

    return (
        <div>
            <section className="onepost"></section>
            <Nav />
            <Post_details />
            <div className="postContent_reduce_bg" style={{ backgroundColor: "#2E3035" }}>
                <div className="postContent_reduce">
                    <PostContents />
                </div>
            </div>
        </div>
    )
}

export default OnePost