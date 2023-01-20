import logoImg from "../Image/610-6103115_imgur-logo-png.png"
import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../myContext"
function Nav3() {


    const { localUser, clearItem } = useContext(myContext)
    let toHome = useNavigate()

    function clrUser() {
        clearItem()
        toHome("/")
    }

    return (
        <div className="postPage_nav">
            <div className="d-flx ps-5 pe-5">
                <div>
                    <Link to="/"><img src={logoImg} alt="" style={{ height: "30px" }} /></Link>
                </div>

                <div className="d-flx" style={{ width: "22%" }}>
                    <div>
                        <button className="btn" style={{ backgroundColor: "#6432F9", padding: '8px 5px' }}>Go Ad-Free</button>
                    </div>
                    <div className="d-flx" style={{gap: "10px"}}>
                        <div>
                            <h5 style={{ color: "#f5f5f5", fontSize: "15px" }}>{localUser.user_name}</h5>
                        </div>
                        <div className="dropdown dropbtn">
                            {
                                <div style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px" }} data-bs-toggle="dropdown" aria-expanded="false">
                                    <img src={`http://localhost:4001/uploads/${localUser.user_image}`} alt="" style={{ borderRadius: "50%", width: "40px", cursor: "pointer" }} />
                                </div>
                            }
                            <div>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li><a className="dropdown-item" href="/post">Posts</a></li>
                                    <li><a className="dropdown-item" href="#">Favorites</a></li>
                                    <li><a className="dropdown-item" href="#">Comments</a></li>
                                    <li><a className="dropdown-item" href="#">About</a></li>
                                    <li><a className="dropdown-item" href="#">Images</a></li>
                                    <li><a className="dropdown-item" href="#">Settings</a></li>
                                    <li onClick={() => clrUser()}><a className="dropdown-item" style={{ cursor: "pointer" }}>Sign Out</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Nav3