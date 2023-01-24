import { IoFilterSharp, IoGridSharp, IoFilmOutline, IoTrash, IoPencilSharp, IoCheckmarkCircle } from "react-icons/io5";
import { BsFillChatSquareFill } from "react-icons/bs"
import { IoIosEye } from "react-icons/io"
import { BsFillCapslockFill } from "react-icons/bs"

import loading from "../Image/loading.gif"
import { useContext, useState } from "react";
import { myContext } from "../myContext";
import { Link } from "react-router-dom";
function AdminPosts() {

    const { post, filterComment, filterLikes, setAdModal, reverse, url } = useContext(myContext)
    const [message, setMessage] = useState([])

    function deletePost(id) {
        fetch(`${url}/delete_post/${id}`, {
            method: "get"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMessage(data.success)
            })
    }

    return (
        <div>

            <div className="posted_items">
                <div className="admin_post_bg">
                    <center style={{ color: "#f5f5f5" }}><h4>Manage Posts</h4></center>
                </div>
                <center className="admin_post_divide">
                    <button onClick={() => setAdModal(true)}>Create Post</button>
                </center>
                <div className="posted_items_sub">
                    <div className="d-flx">
                        <div>
                            <div className="dropdown dropbtn">
                                <button className="btn dropdown-toggle" style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    MOST VIRAL
                                </button>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="#">MOST VIRAL</a></li>
                                    <li><a className="dropdown-item" href="#">USER SUBMITTED</a></li>
                                    <li><a className="dropdown-item" href="#">GIGHEST SCORING</a></li>
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="d-flx" style={{ gap: "15px" }}>
                                <div className="dropdown">
                                    <button className="btn dropdown-toggle" style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px" }} type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        NEWEST
                                    </button>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li><a className="dropdown-item" href="#">POPULAR</a></li>
                                        <li><a className="dropdown-item" href="#">NEWEST</a></li>
                                        <li><a className="dropdown-item" href="#">BEST</a></li>
                                        <li><a className="dropdown-item" href="#">RANDOM</a></li>
                                    </ul>
                                </div>
                                <div className="items_header" style={{ color: "#74738F", fontSize: "22px", gap: "10px", cursor: "pointer" }}>
                                    <span toggle="tooltip" placement="top" title="Content Controls"><IoFilterSharp /></span>
                                    <span toggle="tooltip" placement="top" title="Enable Autoplay"><IoFilmOutline /></span>
                                    <span toggle="tooltip" placement="top" title="Uniform" className="post_changer"><IoGridSharp /></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-light mt-3 post_header">

                        {
                            reverse.length ? (
                                reverse.map((data, i) => {
                                    return (
                                        <div className="post_box">
                                            <div className="post_img post_relative">

                                                <div>
                                                    <Link to={`/one_post/${data._id}`}>
                                                        <img src={`${url}/uploads/${data.image}`} alt="" />
                                                    </Link>
                                                    <div className="action_btn">
                                                        <span><IoPencilSharp /></span>
                                                        <span onClick={() => deletePost(data._id)}data-bs-toggle="modal" data-bs-target="#exampleModal"><IoTrash /></span>
                                                    </div>
                                                </div>
                                            </div>


                                           
                                            <center className="modal modal-danger fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                                <div className="modal-dialog">
                                                    <div className="modal-content" style={{ backgroundColor: "green" }}>
                                                        <div className="modal-header">
                                                            <h6 className="modal-title fs-5" id="exampleModalLabel" style={{ color: "silver" }}> <span style={{ color: "#f5f5f5" }}><IoCheckmarkCircle /></span> success</h6>
                                                            <button type="button" className="btn-close bg-light" data-bs-dismiss="modal" aria-label="Close"></button>
                                                        </div>
                                                        <div className="modal-body">
                                                            <h6 style={{ color: "#f5f5f5" }}>{message}</h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </center>



                                            <div className="post_content">
                                                <div style={{ fontSize: "15px" }}>{data.title}</div>
                                                <div className="d-flx">
                                                    <span><BsFillCapslockFill /> {filterLikes(data._id).length}</span>
                                                    <span><BsFillChatSquareFill />{filterComment(data._id).length} </span>
                                                    <span><IoIosEye /> 9k</span>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            ) : (
                                <div><img src={loading} alt="" /></div>
                            )
                        }
                    </div>
                </div>
            </div>        </div>
    )
}

export default AdminPosts