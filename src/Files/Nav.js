import logoImg from "../Image/610-6103115_imgur-logo-png.png"
import logoImg2 from "../Image/ExtraLifeLogoWhite.png"
import logoImg3 from "../Image/icon-new-post.svg"

import { IoSearch, IoNotificationsOutline, IoChatbubbleOutline, IoGiftOutline } from "react-icons/io5"

import { Link, useNavigate } from "react-router-dom"
import { useContext } from "react"
import { myContext } from "../myContext"
import SampleCreate from "./SampleCreate"


function Nav() {

    const { login, clearItem, adminLog, setAdminLog, setSampleForm, url } = useContext(myContext)
    let user = JSON.parse(localStorage.getItem("user"))

    const toHome = useNavigate()

    function clrUser() {
        clearItem()
        setAdminLog(false)
        toHome("/")
    }


    return (
        <div>
            <div className="d-flx home_nav" style={{ padding: '10px 20px' }}>
                <div style={{ width: "27%", display: "flex", gap: "20px", alignItems: "center" }}>
                    <div>
                        <Link to="/"><img src={logoImg} alt="" style={{ height: "30px" }} /></Link>
                    </div>
                    {
                        !login ? (
                            <div>
                                <Link to="/signin"><button className="btn newPost-btn" style={{ backgroundColor: "#31BE7C", padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                            </div>
                        ) : null
                    }

                    {
                        login ? (
                            <div>
                                {/* <Link to="/postfinal" style={{ color: "#f5f5f5" }}><button onClick={() => setSampleForm()} className="btn btn-success" style={{ padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link> */}
                                <Link to="/sample" style={{ color: "#f5f5f5" }}><button onClick={() => setSampleForm()} className="btn btn-success" style={{ padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                            </div>
                        ) : null
                    }

                    {
                        adminLog && <div>
                            <Link to="/admin" style={{ color: "#f5f5f5" }}><button type="button" className="btn btn-danger" style={{ padding: '8px 15px' }}>Admin Page</button></Link>
                        </div>
                    }



                    {
                        !login ? (
                            <div className="nav_image2"><img src={logoImg2} alt="" style={{ height: "70px" }} /></div>
                        ) : null
                    }

                </div>
                <div className="d-flx inpuut_head" style={{ width: "40%" }}>
                    <input type="text" placeholder="images, #tags, @users oh my!" className="inpuut" />
                    <span style={{ color: "#f5f5f5", fontSize: "25px" }}> <IoSearch /> </span>
                </div>
                <div className="d-flx nav_sect3" style={{ width: "25%" }}>
                    <div>
                        <button className="btn" style={{ backgroundColor: "blue", padding: '8px 5px' }}>Go Ad-Free</button>
                    </div>

                    {
                        !login ? (
                            <>
                                <div>
                                    <Link to="/signin"><button className="btn" style={{ backgroundColor: "transparent", padding: '8px 0px' }}>Sign in</button></Link>
                                </div>
                                <div>
                                    <Link to="/reg"><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 20px' }}>Sign up</button></Link>
                                </div>

                            </>
                        ) : null
                    }
                    {
                        login ? (
                            <>
                                <div className="nav_fonts">
                                    <Link to="/reg" style={{ color: "white" }}> <IoGiftOutline /> </Link>
                                </div>
                                <div className="nav_fonts">
                                    <Link to="/reg" style={{ color: "white" }}> <IoChatbubbleOutline /> </Link>
                                </div>
                                <div className="nav_fonts">
                                    <Link to="/signin" style={{ color: "white" }}> <IoNotificationsOutline /> </Link>
                                </div>
                                <div style={{ display: "flex", alignItems: "center", gap: "15px", paddingTop: "5px" }}>
                                    {
                                        user ? (
                                            <div>
                                                <h6 style={{ color: "#f5f5f5", fontSize: "14px" }}>{user.user_name}</h6>
                                            </div>
                                        ) : null
                                    }

                                    <div className="dropdown dropbtn">
                                        {
                                            user && <div style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px" }} data-bs-toggle="dropdown" aria-expanded="false">
                                                <img src={`${url}/uploads/${user.user_image}`} alt="" style={{ borderRadius: "50%", width: "40px", cursor: "pointer" }} />
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
                            </>
                        ) : null
                    }
                </div>
            </div>

            <nav className="homeNav2">
                <div className="navbar navbar-expand-md navbar-dark fixed-top">
                    <div className="container">
                        <div>
                            <Link to="/"><img src={logoImg} alt="" style={{ height: "30px" }} /></Link>
                        </div>
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", paddingTop: "5px" }}>
                            {
                                user ? (
                                    <div>
                                        <h6 style={{ color: "#f5f5f5", fontSize: "14px" }}>{user.user_name}</h6>
                                    </div>
                                ) : null
                            }

                            <div className="dropdown dropbtn">
                                {
                                    user && <div style={{ color: "#B0BEC4", fontWeight: "700", fontSize: "19px" }} data-bs-toggle="dropdown" aria-expanded="false">
                                        <img src={`${url}/uploads/${user.user_image}`} alt="" style={{ borderRadius: "50%", width: "40px", cursor: "pointer" }} />
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
                        <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggle-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse ms-auto" id="collapsibleNavId">
                            <ul className="nav-item homeNav2_ul">
                                <a className="navbar-nav me-auto mt-2 mt-lg-0 ms-auto" href=""></a>
                                {
                                    !login ? (
                                        <div>
                                            <Link to="/signin"><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                                        </div>
                                    ) : null
                                }

                                {
                                    login ? (
                                        <div>
                                            {/* <Link to="/postfinal" style={{ color: "#f5f5f5" }}><button onClick={() => setSampleForm()} className="btn btn-success" style={{ padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link> */}
                                            <Link to="/sample" style={{ color: "#f5f5f5" }}><button onClick={() => setSampleForm()} className="btn btn-success" style={{ padding: '8px 15px' }}> <img src={logoImg3} alt="new post" /> New post</button></Link>
                                        </div>
                                    ) : null
                                }

                                {
                                    adminLog && <div>
                                        <Link to="/admin" style={{ color: "#f5f5f5" }}><button type="button" className="btn btn-danger" style={{ padding: '8px 15px' }}>Admin Page</button></Link>
                                    </div>
                                }



                                {/* {
                                    !login ? (
                                        <div><img src={logoImg2} alt="" style={{ height: "70px" }} /></div>
                                    ) : null
                                } */}
                                {/* <div className="d-flx inpuut_head" style={{ width: "40%" }}>
                                    <input type="text" placeholder="images, #tags, @users oh my!" className="inpuut" />
                                    <span style={{ color: "#f5f5f5", fontSize: "25px" }}> <IoSearch /> </span>
                                </div> */}
                                <div className="nav_sect3" style={{ width: "25%" }}>
                                    <div>
                                        <button className="btn" style={{ backgroundColor: "blue", padding: '8px 5px' }}>Go Ad-Free</button>
                                    </div>

                                    {
                                        !login ? (
                                            <>
                                                <div>
                                                    <Link to="/signin"><button className="btn" style={{ backgroundColor: "transparent", padding: '8px 0px' }}>Sign in</button></Link>
                                                </div>
                                                <div>
                                                    <Link to="/reg"><button className="btn" style={{ backgroundColor: "#31BE7C", padding: '8px 20px' }}>Sign up</button></Link>
                                                </div>

                                            </>
                                        ) : null
                                    }
                                    {
                                        login ? (
                                            <>
                                                <div className="nav_fonts">
                                                    <Link to="/reg" style={{ color: "white" }}> <IoGiftOutline /> </Link>
                                                </div>
                                                <div className="nav_fonts">
                                                    <Link to="/reg" style={{ color: "white" }}> <IoChatbubbleOutline /> </Link>
                                                </div>
                                                <div className="nav_fonts">
                                                    <Link to="/signin" style={{ color: "white" }}> <IoNotificationsOutline /> </Link>
                                                </div>

                                            </>
                                        ) : null
                                    }
                                </div>
                            </ul>
                        </div>

                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav