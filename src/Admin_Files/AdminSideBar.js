import { IoChatbubblesSharp, IoImages, IoThumbsUp } from "react-icons/io5"
import { BsFillPeopleFill, BsFillFileRichtextFill, BsFillPersonPlusFill, BsChatSquareTextFill, BsFilePlusFill, BsHeartFill, BsListOl, BsInfoLg } from "react-icons/bs"
import { Link } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../myContext"
function AdminSideBar() {

    const { category } = useContext(myContext)

    return (
        <div>
            <div>
                <div>
                    <div className="offcanvas offcanvas-start side_bar" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
                        <div className="offcanvas-header">
                            <Link to={"/admin"}><h5 className="offcanvas-title text-light" id="offcanvasExampleLabel">DASHBOARD</h5></Link>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body">
                            <div>
                                <div>
                                    <Link to="/admin_post" className="side_option">
                                        <span><BsFilePlusFill /></span>
                                        <span>Create Post</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/manage_users" className="side_option">
                                        <span><BsFillPeopleFill ></BsFillPeopleFill></span>
                                        <span>Users</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/admin_post" className="side_option">
                                        <span><BsFillFileRichtextFill /></span>
                                        <span>All Posts</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="side_option">
                                        <span><BsListOl /></span>
                                        <div className="dropdown">
                                            <div>
                                                Categories = {category.length}
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="side_option">
                                        <span><IoChatbubblesSharp /></span>
                                        <span>Comments</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="side_option">
                                        <span><IoThumbsUp /></span>
                                        <span>Likes</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/manage_roles" className="side_option">
                                        <span><BsChatSquareTextFill /></span>
                                        <span>Roles</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/manager_users" className="side_option">
                                        <span><BsFillPersonPlusFill /></span>
                                        <span>Create User</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="side_option">
                                        <span><BsHeartFill /></span>
                                        <span>Feedbacks</span>
                                    </Link>
                                </div>
                                <div>
                                    <Link to="/" className="side_option"><span><BsInfoLg /></span>
                                        <span>Blog</span></Link>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdminSideBar