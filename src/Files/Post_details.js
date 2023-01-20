import { useEffect, useState } from "react"
import { IoMdThumbsUp, IoMdHeartEmpty, IoMdThumbsDown, IoIosChatboxes, IoIosImage } from "react-icons/io"
import { IoShareSocialOutline, IoCaretDown, IoCaretUp, IoClose } from "react-icons/io5"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom"
import image2 from "../Image/tony.jpeg"
import gif from "../Image/qscrLYiFLa2E.gif"
import { useContext } from "react"
import { myContext } from "../myContext";

function Post_details() {

    const { id } = useParams()
    const [one_post, setOne_post] = useState([])
    const { post, login, localUser } = useContext(myContext)
    const [postLikes, setpostLikes] = useState([])

    // console.log(comments[0].user_id)


    const [likeColor, setLikeColor] = useState(false)
    const [commentBtn, setCommentBtn] = useState(false)
    const [toEdit, setToEdit] = useState(false)

    const [delComment, setDelComment] = useState(false)
    const [commentDetails, setCommentDetails] = useState(false)

    const [likeErr, setLikeErr] = useState(false)

    const [poster, setPoster] = useState({})
    const [userId, setUserId] = useState({ id: "" })

    const [slicePost, setSlicePost] = useState(8)
    // console.log(comments)

    // const [postComment, setPostComment] = useState({ user_id: "", post_id: "", text: "" })
    const [postComment, setPostComment] = useState({ text: "" })
    const [findComment, setFindComment] = useState("")

    function allRenders() {

        fetch(`http://localhost:4001/post/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setOne_post(data)

                fetch(`http://localhost:4001/users/${data.user_id}`)
                    .then((resp) => resp.json())
                    .then((data) => {
                        setPoster(data)
                    })

                // fetch("http://localhost:4001/comments")
                //     .then((resp) => resp.json())
                //     .then((info) => {
                //         const myComment = info.filter(({ post_id }) => post_id === data._id)
                //         setCommentDetails(myComment)
                //     })


                if (localUser._id === data.user_id) {
                    setToEdit(true)
                }
            })

        // fetch(`http://localhost:4001/users/${userId.id}`)
        //     .then((resp) => resp.json())
        //     .then((data) => {
        //         setPoster(data)
        //         console.log(data)
        //     })

        fetch(`http://localhost:4001/comment_post/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setCommentDetails(data)
            })


        fetch(`http://localhost:4001/post_likes/${id}`)
            .then((resp) => resp.json())
            .then((data) => {
                setpostLikes(data)
                data.map((info) => {
                    if (localUser._id === info.user_id) {
                        setLikeColor(true)
                    } else {
                        setLikeColor(false)
                    }
                })
            })

    }

    allRenders()

// console.log(commentDetails)


    function deleteComment(id) {
        fetch(`http://localhost:4001/delete_comment/${id}`, {
            method: "get"
        }).then((resp) => resp.json)
            .then((data) => {
                console.log(data)
            })
    }



    function getLikes() {
        fetch("http://localhost:4001/likes", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: localUser._id,
                post_id: id

            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }



    function createComment() {
        fetch("http://localhost:4001/comments", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                user_id: localUser._id,
                post_id: id,
                text: postComment.text

            })
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
            })
    }

    // function createComment(){
    //     fetch("http://localhost:4001/comments", {
    //         method: "POST",
    //         body: commentForm
    //     })
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         console.log(data)
    //     })
    // }

    // let commentForm = new FormData()

    // commentForm.append("text", postComment.text)
    // commentForm.append("user_id", localUser._id)
    // commentForm.append("post_id", one_post._id)

    return (
        <div>
            <div className="one_post_details">
                <div className="one_post_banner pt-5">
                    <section className="one_post_sect1_parent">
                        <div className="one_post_sect1">
                            <div className="one_post_part1" style={{ marginTop: "8em" }}>
                                <center>
                                    <div>
                                        <div type="button" className={likeColor ? ("liked") : ("unliked")} style={{ paddingTop: "0.5em" }} data-bs-toggle="tooltip" data-bs-placement="top" title="Upvote">
                                            <IoMdThumbsUp onClick={() => { !login ? setLikeErr(true) : getLikes() }} />
                                        </div>
                                        {
                                            likeErr && <div className="alertlike_header">
                                                <center className="alertlike">
                                                    <div style={{ color: "#f5f5f5", fontSize: "20px", fontWeight: "600" }}>Oh gosh !!!</div>
                                                    <div style={{ color: "#f5f5f5", fontSize: "13px" }}>Sign up to Upvote the posts you like and make them more popular</div>
                                                    <div className="like_btn">
                                                        <Link to="/signin">
                                                            <button className="like_signin" style={{ backgroundColor: "tranparent", color: "#f5f5f5" }}>Sign in</button>
                                                        </Link>
                                                        <Link to="/reg">
                                                            <button className="like_signup" style={{ backgroundColor: "#3A54FE", color: "#f5f5f5" }}>Sign Up</button>
                                                        </Link>
                                                    </div>
                                                    <div onClick={() => setLikeErr(false)} className="like_modal_close">
                                                        <IoClose />
                                                    </div>
                                                </center>
                                                <div className="like_gif">
                                                    <img src={gif} alt="" />
                                                </div>
                                            </div>
                                        }
                                    </div>
                                    <p>{postLikes.length}</p>
                                </center>
                                <center>
                                    <div>
                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Downvote">
                                            <IoMdThumbsDown />
                                        </button>
                                    </div>
                                    <p>2</p>
                                </center>
                                <center>
                                    <div>
                                        <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Add to Favorites">
                                            <IoMdHeartEmpty />
                                        </button>
                                    </div>
                                    <p>34</p>
                                </center>
                            </div>

                            <div>
                                <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Downvote">
                                    <IoShareSocialOutline />
                                </button>
                            </div>

                            <center className="one_post_part1" style={{ marginTop: "4em" }}>
                                <div>
                                    <button type="button" className="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Jump to Comments">
                                        <IoIosChatboxes />
                                    </button>
                                </div>
                                <p> {commentDetails.length} </p>
                            </center>
                        </div>
                    </section>


                    <div className="post_final1">
                        <section style={{ paddingLeft: "4em" }}>
                            <div className="pb-3" style={{ color: "#f5f5f5", fontSize: "25px" }}>
                                <b>{one_post.title}</b>
                            </div>
                            <div className="one_post_user_details pb-3">
                                <div>
                                    <Link to={poster._id === localUser._id ? "/post" : `/profile/${poster._id}`}><img src={`http://localhost:4001/uploads/${poster.user_image}`} alt="" /></Link>
                                </div>
                                <div>
                                    {/* <div style={{ color: "#1BA769" }}>{one_post.user_id}</div> */}
                                    <Link to={poster._id === localUser._id ? "/post" : `/profile/${poster._id}`} style={{ color: "#1BA769", textDecoration: "none" }}>
                                        <div>{poster.user_name}</div>
                                    </Link>
                                    <div>112,279 views . {one_post.date} . via iPhone</div>
                                </div>
                            </div>
                        </section>
                        <div className="post_final_img_header">
                            <img src={`http://localhost:4001/uploads/${one_post.image}`} alt="" />
                            <div className="post_final_img_inner">
                                <button className="btn btn-secondary">Copy link</button>
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">...</button>
                                <div className="dropdown">
                                    <ul className="dropdown-menu onePost_drop">

                                        {
                                            !toEdit && <li>
                                                <li>Embed</li>
                                                <li>Download</li>
                                                <li>Report</li>
                                                <li>Mute user</li>
                                            </li>
                                        }
                                        {
                                            toEdit && <li>
                                                <li>Embed</li>
                                                <li>Download</li>
                                                <Link to={`/edit_post/${one_post._id}`} style={{ textDecoration: "none", color: "black" }}><li> Edit Post </li></Link>
                                                <li>Make post hidden </li>
                                            </li>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <center style={{ color: "#f5f5f5", marginBottom: "2em", marginTop: "0.4em" }}>
                            <b><i>{one_post.body}</i></b>
                        </center>

                        <section>
                            <form className="post_comment">
                                <div className="comment_sect">
                                    <input type="text" placeholder="Write a comment" value={postComment.text} onChange={(e) => { setCommentBtn(true); setPostComment({ ...postComment, text: e.target.value }) }} />
                                    {
                                        !login ? (
                                            <>
                                                <div className="d-flex comment_sect_sub">
                                                    <div>
                                                        <Link to="/signin" style={{ color: "white" }}><button className="btn" style={{ backgroundColor: "transparent", padding: '8px 0px' }}>Sign in</button></Link>
                                                    </div>
                                                    <div>
                                                        <Link to="/reg" style={{ color: "white" }}><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 20px' }}>Sign up</button></Link>
                                                    </div>
                                                </div>
                                            </>
                                        ) : null
                                    }
                                </div>
                                <div>
                                    <input type="text" hidden placeholder="Write a comment" name="user_id" value={localUser._id} />
                                </div>
                                <div>
                                    <input type="text" hidden placeholder="Write a comment" name="post_id" value={one_post._id} />
                                </div>
                                <div className="post_comment_sub">
                                    <div style={{ fontSize: "10px" }}>Read the community rules</div>

                                    {
                                        login ? (
                                            <div className="post_comment_sub1">
                                                <IoIosImage />
                                                <div style={{ fontSize: "13px" }}>140</div>
                                                <div className={commentBtn ? ("commbtn") : null}>
                                                    <button onClick={() => createComment()}>Post</button>
                                                </div>
                                            </div>
                                        ) : null
                                    }

                                </div>
                            </form>
                        </section>

                        <section className="comment_sect2">
                            <div className="comment_header">
                                <div style={{ paddingLeft: "10px" }}>{commentDetails.length} Comments</div>
                            </div>
                            {
                                commentDetails.length > 0 ? (
                                    commentDetails.map((data) => {
                                        return (
                                            <div className="comment_body">
                                                <div>
                                                    <div className="comment_body_sub">
                                                        <img src={`http://localhost:4001/uploads/${data.user_image}`} alt="" />
                                                        <Link to={data.user_id === localUser._id ? "/post" : `/profile/${data.user_id}`}
                                                            style={{ color: "#1BA769", textDecoration: "none" }}><div>  {data.user_name} </div></Link>

                                                        {/* <div style={{ color: "#1BA769" }}> {localUser._id} </div> */}
                                                        <span style={{ color: "#777777" }}> . 12h ago</span>
                                                    </div>

                                                    <div className="comment_body_list" data-bs-toggle="dropdown">
                                                        <div className="comment_drop">...</div>
                                                    </div>

                                                    <div className="dropdown">
                                                        <ul className="dropdown-menu onePost_drop">

                                                            {
                                                                data.user_id !== localUser._id ? <li>
                                                                    <li>Permalink</li>
                                                                    <li>Mute user</li>
                                                                    <li>Report</li>
                                                                </li> : <li>
                                                                    <li>Permalink</li>
                                                                    <li type="button" onClick={() => setFindComment(data._id)} class="btn btn-primary" data-bs-toggle="modal" data-bs-target={`#exampleModal${data._id}`}> Delete </li>
                                                                    <li>Report </li>
                                                                </li>
                                                            }
                                                        </ul>
                                                        {/* <!-- Modal --> */}
                                                        <div class="modal fade" id={`exampleModal${data._id}`} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                            <div class="modal-dialog">
                                                                <div class="modal-content modal_bg">
                                                                    <div class="modal-header">
                                                                        <h1 class="modal-title fs-5 text-danger" id="exampleModalLabel">Delete Comment!</h1>
                                                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                                    </div>
                                                                    <center class="modal-body text-dark">
                                                                        Be informed that this action cannot be undone {data.text}
                                                                    </center>
                                                                    <div class="modal-footer">
                                                                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                                                                        <button onClick={() => deleteComment(data._id)} type="button" class="btn btn-danger">Confirm</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="comment">
                                                    {data.text}
                                                </div>
                                                <div className="comment_events">
                                                    <div><IoMdThumbsUp /> 397</div>
                                                    <div><IoMdThumbsDown /></div>
                                                    <div>|</div>
                                                    <div>+ 10 replies</div>
                                                </div>
                                                <div className="replybtn">
                                                    <button>Reply</button>
                                                </div>
                                            </div>
                                        )
                                    })
                                ) : null
                            }
                        </section>
                    </div>




                    <div className="post_viral">
                        <div className="post_viral_sub">
                            <div className="one_post_viral">
                                NEWEST IN MOST VIRAL
                            </div>
                            <div>
                                {
                                    post.length ? (
                                        post.slice(0, slicePost).map((data) => {
                                            return (
                                                <div className="viral_posts">
                                                    <div>
                                                        <img src={`http://localhost:4001/uploads/${data.image}`} alt="" />
                                                    </div>
                                                    <p>
                                                        {data.body}
                                                    </p>
                                                </div>
                                            )
                                        })
                                    ) : null
                                }
                            </div>
                            <center>
                                <button onClick={() => setSlicePost(slicePost + 2)} className="post_viralbtn">see more <span className="post_viral_arrow"><IoCaretDown /></span><span className="post_viral_arrow2"><IoCaretUp /></span></button>
                            </center>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Post_details