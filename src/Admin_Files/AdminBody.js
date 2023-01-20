import { IoChatbubblesSharp, IoImages, IoThumbsUp } from "react-icons/io5"
import { BsFillPeopleFill } from "react-icons/bs"
import AdminNav from "./AdminNav"
import { useContext } from "react"
import { myContext } from "../myContext"
import { Link } from "react-router-dom"


function AdminBody() {


    const { post, users, comments, likes, category, roles } = useContext(myContext)

    return (
        <div className="card_body">
            <div>
                <AdminNav />
            </div>
            <div className="d-flx card_header" style={{ width: "90%", margin: "auto", padding: "7em 0em", textAlign: "center" }}>
                <Link to="/manage_category" className="ad_card1 d-flx">
                    <div>
                        <div style={{ fontSize: "35px", fontWeight: "700" }}>{category.length}</div>
                        <div style={{ fontSize: "15px", fontWeight: "600", color: "gray" }}>category</div>
                    </div>
                    <div className="ad_card_icon">
                        <IoChatbubblesSharp />
                    </div>
                </Link>

                <Link to="/manage_roles" className="ad_card2 d-flx">
                    <div>
                        <div style={{ fontSize: "35px", fontWeight: "700" }}>{roles.length}</div>
                        <div style={{ fontSize: "15px", fontWeight: "600", color: "gray" }}>roles</div>
                    </div>
                    <div className="ad_card_icon">
                        <IoThumbsUp />
                    </div>
                </Link>

                <Link to="/admin_post" className="ad_card3 d-flx">
                    <div>
                        <div style={{ fontSize: "35px", fontWeight: "700" }}>{post.length}</div>
                        <div style={{ fontSize: "15px", fontWeight: "600", color: "gray" }}>Posts</div>
                    </div>
                    <div className="ad_card_icon">
                        <IoImages />
                    </div>
                </Link>

                <Link to={"/manage_users"} className="ad_card4 d-flx">
                    <div>
                        <div style={{ fontSize: "35px", fontWeight: "700" }}>{users.length}</div>
                        <div style={{ fontSize: "15px", fontWeight: "600", color: "gray" }}>Users</div>
                    </div>
                    <div className="ad_card_icon">
                        <BsFillPeopleFill />
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default AdminBody