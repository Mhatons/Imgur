import { BsJustify, BsSearch } from "react-icons/bs"
import AdminSideBar from "./AdminSideBar"
import logoimg from "../Image/610-6103115_imgur-logo-png.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../myContext"
function AdminNav() {

    const { localUser, clearItem, url } = useContext(myContext)

    let toHome = useNavigate()

    function clrUser() {
        clearItem()
        toHome("/")
    }

    return (
        <div>
            <div className="admin_nav">
                <div className="d-flx logo_header">
                    <div>
                        <a className="btn" data-bs-toggle="offcanvas" href="#offcanvasExample" role="button" aria-controls="offcanvasExample">
                            <span style={{ color: "#f2f2f2", fontSize: "22px" }}><BsJustify /></span>
                        </a>
                    </div>
                    <div className="logo">
                        <Link to="/"><img src={logoimg} alt="" /></Link>
                    </div>
                </div>
                <div className="ad_search rounded-pill">
                    <input type="text" placeholder="Search here" />
                    <span><BsSearch /></span>
                </div>
                <div className="admin_details">
                    <span>{localUser.user_name}</span>
                    <div className="dropdown dropbtn">
                        <div style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px", cursor: "pointer" }} data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={`${url}/uploads/${localUser.user_image}`} alt="" />
                        </div>
                        <div>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                <li><a className="dropdown-item" href="/post">Posts</a></li>
                                <li><a className="dropdown-item" href="#">Favorites</a></li>
                                <li><a className="dropdown-item" href="#">Comments</a></li>
                                <li><a className="dropdown-item" href="#">About</a></li>
                                <li><a className="dropdown-item" href="#">Images</a></li>
                                <li><a className="dropdown-item" href="#">Settings</a></li>
                                <li onClick={() => clrUser()}><a className="dropdown-item" style={{cursor: "pointer"}}>Sign Out</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <AdminSideBar />
            </div>
        </div>
    )
}

export default AdminNav