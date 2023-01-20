import { IoIosEye } from "react-icons/io"
import { IoClose, IoGridSharp, IoFilmOutline, IoTrash, IoPencilSharp, IoCheckmarkCircle } from "react-icons/io5";
import { BsFillCapslockFill, BsFillChatSquareFill } from "react-icons/bs"
import gif from "../Image/qscrLYiFLa2E.gif"

import { useContext, useState } from "react"
import { Link, useParams } from "react-router-dom"
import Nav from "../Files/Nav"
import PostContentHeader from "../Files/PostContentHeader"
import PostHeaders from "../Files/PostHeaders"
import PostNav_bg2 from "../Files/PostNav_bg2"
import { myContext } from "../myContext";

function UserProfile() {

    const { id } = useParams()

    const { localUser, filterComment, filterLikes, login, followers, setFollowers } = useContext(myContext)
    const [user, setUser] = useState([])
    const [myPosts, setMyPosts] = useState([])

    const [follow, setFollow] = useState(false)
    const [followErr, setFollowErr] = useState(false)

    const reverse = [...myPosts].reverse()

    fetch(`http://localhost:4001/users/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setUser(data)
        })

    function postFollow() {
        fetch("http://localhost:4001/follow", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                "user_id": id,
                "follower_id": localUser._id
            })
        }).then((resp) => resp.json())
            .then((data) => {
                if (data.success) {
                    setFollow(true)
                } else {
                    setFollow(false)
                }
                console.log(data)
            })
    }

    fetch(`http://localhost:4001/follow_user/${id}`)
        .then((resp) => resp.json())
        .then((data) => {
            setFollowers(data)
        })

    fetch("http://localhost:4001/user_posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            "user_id": id
        })
    }).then((resp) => resp.json())
        .then((data) => {
            setMyPosts(data)
        })


    return (
        <div>
            <div>
                <Nav />
            </div>
            <div className="post_page_bg">
                <div>
                    <div className="post_details">
                        <div>
                            <img src={`http://localhost:4001/uploads/${user.user_image}`} className="profile_photo" alt="" />
                        </div>
                        <div>
                            <div className="profile_name">{user.user_name}</div>
                            <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
                                <p style={{ fontSize: "13px", fontWeight: "650" }}>1 PTS . NEUTRAL</p>
                                <p className="follow">
                                    <b onClick={() => login ? postFollow() : setFollowErr(true)}> {!follow ? "Follow" : "Unfollow"} </b>
                                    <div className="following">{followers.length}</div>
                                </p>
                                {
                                    followErr && <div className="alertlike_header">
                                        <center className="alertFollow">
                                            <div style={{ color: "#f5f5f5", fontSize: "20px", fontWeight: "600" }}>Oh gosh !!!</div>
                                            <div style={{ color: "#f5f5f5", fontSize: "13px" }}>Sign up to Follow the Users you like and make them more popular</div>
                                            <div className="like_btn">
                                                <Link to="/signin">
                                                    <button className="like_signin" style={{ backgroundColor: "#289D95", color: "#f5f5f5" }}>Sign in</button>
                                                </Link>
                                                <Link to="/reg">
                                                    <button className="like_signup" style={{ backgroundColor: "#3A54FE", color: "#f5f5f5" }}>Sign Up</button>
                                                </Link>
                                            </div>
                                            <div onClick={() => setFollowErr(false)} className="like_modal_close">
                                                <IoClose />
                                            </div>
                                            <div className="follow_gif">
                                                <img src={gif} alt="" />
                                            </div>
                                        </center>

                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                    <PostHeaders />
                </div>
            </div>
            <div className="post_bg2">
                <div>
                    <PostContentHeader />
                </div>

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
                                                {/* <div className="action_btn">
                                                    <Link to={`/edit_post/${data._id}`}><span><IoPencilSharp /></span></Link>
                                                    <span onClick={() => deletePost(data._id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><IoTrash /></span>
                                                </div> */}
                                            </div>
                                            <div className="post_content">
                                                <div style={{ fontSize: "15px" }}>{data.title}</div>
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
                        myPosts.length == 0 ? (
                            <div className="vacant_post">
                                {/* <div>
                                    <Link to="/postfinal"><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                                </div> */}
                                <div style={{ color: "#f5f5f5", paddingTop: "1em" }}>
                                    <center style={{ color: "green" }}><h1>Ops!</h1></center>
                                    <h4> {user.user_name} has'nt shared something with us yet...</h4>
                                </div>
                            </div>
                        ) : null
                    }

                </div>
            </div>
        </div>
    )
}

export default UserProfile