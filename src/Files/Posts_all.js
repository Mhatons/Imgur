import { IoIosEye } from "react-icons/io"
import { IoFilterSharp, IoGridSharp, IoFilmOutline, IoTrash, IoPencilSharp, IoCheckmarkCircle } from "react-icons/io5";
import { BsFillCapslockFill, BsFillChatSquareFill } from "react-icons/bs"
import logoImg3 from "../Image/icon-new-post.svg"

import { useContext, useState } from "react";
import { myContext } from "../myContext";
import { Link } from "react-router-dom";

function Post_all() {

    const { localUser, filterComment, filterLikes } = useContext(myContext)
    const [userPosts, setuserPosts] = useState([])
    const [message, setMessage] = useState([])

    const reverse = [...userPosts].reverse()

    function deletePost(id) {
        fetch(`http://localhost:4001/delete_post/${id}`, {
            method: "get"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMessage(data.success)
            })
    }

    fetch("http://localhost:4001/user_posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "user_id": localUser._id })
    }).then((resp) => resp.json())
        .then((data) => {
            setuserPosts(data)
        })

    return (
        <div className="post_bg">
            <div className="text-light mt-3 onePost_header">
                {
                    reverse.length > 0 ? (
                        reverse.map((data) => {
                            return (
                                <div className="post_box">
                                    <div className="post_img post_relative">
                                        <Link to={`/one_post/${data._id}`}>
                                            <img src={`http://localhost:4001/uploads/${data.image}`} alt="" />
                                        </Link>
                                        <div className="action_btn">
                                            <Link to={`/edit_post/${data._id}`}><span><IoPencilSharp /></span></Link>
                                            {/* <span onClick={() => deletePost(data._id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><IoTrash /></span> */}
                                        </div>
                                    </div>
                                    <div className="post_content">
                                        <center>
                                            <div style={{ fontSize: "15px", color: "gold", fontWeight: "600" }}>{data.title}</div>
                                            <div style={{ fontSize: "15px" }}>{data.body}</div>
                                        </center>
                                        <div className="d-flx">
                                            <span><BsFillCapslockFill /> {filterLikes(data._id).length}</span>
                                            <span><BsFillChatSquareFill /> {filterComment(data._id).length} </span>
                                            <span><IoIosEye /> 9k</span>
                                        </div>
                                    </div>

                                </div>
                            )
                        })
                    ) : null
                }


            </div>
            {
                userPosts.length == 0 ? (
                    <div className="vacant_post">
                        <div>
                            <Link to="/postfinal"><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                        </div>
                        <div style={{ color: "#f5f5f5", paddingTop: "1em" }}>
                            <h4>Share something with Imgur!</h4>
                        </div>
                    </div>
                ) : null
            }

        </div>
    )
}

export default Post_all