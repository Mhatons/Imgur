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
            <PostContents />
        </div>
    )
}

export default OnePost