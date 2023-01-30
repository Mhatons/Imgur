import { IoFilterSharp, IoGridSharp, IoFilmOutline } from "react-icons/io5";
import { BsFillChatSquareFill, BsGrid1X2Fill, BsFillCapslockFill } from "react-icons/bs"
import { IoIosEye } from "react-icons/io"

import { useContext, useState } from "react";
import { myContext } from "../myContext";
import { Link } from "react-router-dom";

function PostContents() {
    const { post, filterComment, filterLikes, reverse, url } = useContext(myContext)
    const [viewChange, steViewChange] = useState(false)


    return (
        <div>
            <div className="posted_items">
                <div className="posted_items_sub">
                    <div className="d-flx">
                        <div>
                            <div className="dropdown dropbtn post_filter">
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
                            <div className="d-flx post_filter" style={{ gap: "15px" }}>
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
                                    {
                                        !viewChange && <span onClick={() => steViewChange(true)} toggle="tooltip" placement="top" title="Uniform" className="post_changer"><IoGridSharp /></span>
                                    }
                                    {
                                        viewChange && <span onClick={() => steViewChange(false)}  toggle="tooltip" placement="top" title="Uniform" className="post_changer_grid"><BsGrid1X2Fill /></span>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={ !viewChange ? "text-light mt-3 post_header": "text-light mt-3 post_header_grid"}>

                        {
                            reverse.length ? (
                                reverse.map((data, i) => {
                                    return (
                                        <div className={ !viewChange ? "post_box": "post_box_grid"}>
                                            <div className="post_img">

                                                <Link to={`/one_post/${data._id}`}>
                                                    <img src={`${url}/uploads/${data.image}`} alt="" />
                                                </Link>
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
                            ) : (
                                <center style={{ position: "absolute", right: "0", left: "0", marginTop: "2em" }}>
                                    <div class="spinner-border text-primary" role="status">
                                        <span class="visually-hidden">Loading...</span>
                                    </div>
                                </center>
                            )
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostContents