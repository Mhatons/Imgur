import { BsFillChatSquareFill } from "react-icons/bs"
import { IoIosEye } from "react-icons/io"
import { BsFillCapslockFill } from "react-icons/bs"

import loading from "../Image/loading.gif"
import { useContext } from "react";
import { myContext } from "../myContext";
import { Link } from "react-router-dom";
function RecentPosts() {

    const { filterComment, filterLikes, reverse } = useContext(myContext)


    return (
        <div className="adminPage_posts">
            <div>
                <div>
                    <h4 className="recent">Recent Posts</h4>
                </div>
                <div>
                    <div>
                        <div className="text-light mt-3 post_header">
                            {
                                reverse.length ? (
                                    reverse.map((data, i) => {
                                        return (
                                            <div className="post_box">
                                                <div className="post_img">

                                                    <Link to={`/one_post/${data._id}`}>
                                                        <img src={`http://localhost:4001/uploads/${data.image}`} alt="" />
                                                    </Link>
                                                </div>
                                                <div className="post_content">
                                                    <div style={{ fontSize: "15px" }}>{data.title}</div>
                                                    <div className="d-flx">
                                                        <span><BsFillCapslockFill /> {filterLikes(data._id).length} </span>
                                                        <span><BsFillChatSquareFill /> {filterComment(data._id).length} </span>
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
                </div>

            </div>
        </div>
    )
}

export default RecentPosts