import { IoFilterSharp, IoGridSharp, IoFilmOutline, IoTrash, IoPencilSharp, IoCheckmarkCircle, IoClose } from "react-icons/io5";
import { BsFillImageFill } from "react-icons/bs"
import { useContext, useState } from "react"
import { myContext } from "../myContext"

import loading from "../Image/loading.gif"
import { Link } from "react-router-dom";
import AdminNav from "../Admin_Files/AdminNav";
import CreateUserModal from "../Admin_Files/CreateUserModal";

function ManageUsers() {

    const { users, setUsermodal, setUserChanger, roles, usermodal, setUser_details, user_details, localUser, reverseUsers, url } = useContext(myContext)
    const [check, setCheck] = useState(false)
    const [message, setMessage] = useState([])

    const [editModal, setEditModal] = useState(false)


    function deleteUser(id) {
        fetch(`${url}/delete_user/${id}`, {
            method: "get"
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMessage(data.success)
            })
    }

    function validate() {
        if (user_details.user_email === "" || user_details.user_name === "" || user_details.password === "" || user_details.user_phone === "" || user_details.confirm_password === "" || user_details.role_id === "" || user_details.user_image === "") {
            setCheck(true)
        }
        else {
            fetch(`${url}/update_user`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: (
                    userForm
                )
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            setEditModal(false)
        }
    }

    let userForm = new FormData
    userForm.append("user_name", user_details.user_name)
    userForm.append("user_email", user_details.user_email)
    userForm.append("password", user_details.password)
    userForm.append("user_phone", user_details.user_phone)
    userForm.append("confirm_password", user_details.confirm_password)
    userForm.append("role_id", user_details.role_id)
    userForm.append("user_image", user_details.user_image)
    userForm.append("id", localUser._id)



    return (
        <div>
            <AdminNav />
            <CreateUserModal />
            <div className="admin_user_bg">
                <center style={{ color: "#f5f5f5", paddingTop: "1em" }}><h3>Manage Users</h3></center>
            </div>

            <center className="user_post_divide">
                <button onClick={() => setUsermodal(true)}>Create User</button>
            </center>
            <div className="user_body">
                <div className="d-flx" style={{ width: "75%", margin: "auto" }}>
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
                <div className="all_users">
                    {
                        reverseUsers.length ? (
                            reverseUsers.map((data, i) => {
                                return (
                                    <div className="post_box" key={i}>
                                        <div className="post_img post_relative">
                                            <Link to={`/profile/${data._id}`}>
                                                <img src={`${url}/uploads/${data.user_image}`} alt="" />
                                            </Link>

                                            <div className="action_btn">
                                                <span onClick={() => setEditModal(true)}><IoPencilSharp /></span>
                                                <span onClick={() => deleteUser(data._id)} data-bs-toggle="modal" data-bs-target="#exampleModal"><IoTrash /></span>
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


                                        </div>
                                        <div className="post_content">
                                            <div style={{ fontSize: "15px" }}>{data.user_name}</div>
                                            <div style={{ fontSize: "15px" }}>{data.user_email}</div>
                                            <div style={{ fontSize: "15px" }}>{data.role_id}</div>
                                            <div style={{ fontSize: "15px" }}>{data.user_phone}</div>
                                        </div>

                                    </div>
                                )
                            })
                        ) : <div><img src={loading} alt="" /></div>
                    }
                </div>
            </div>
            {
                editModal && <div className="admin_modal_header">
                    <AdminNav />
                    <div style={{ paddingTop: "12em" }}>
                        <div style={{ width: "65%", position: "relative", margin: "auto", paddingTop: "15px" }}>
                            <div className="modal-dialog modal-dialog-centered" style={{ width: "95%" }}>
                                <div className="modal-content">
                                    <div>
                                        <div className="d-flx post_modal_body">
                                            <div className="adminpost_modal1">
                                                <div>
                                                    <center style={{ paddingTop: "2em" }}><h6>User Details</h6></center>
                                                    <div className="post_excerpt3">
                                                        <input type="text" value={user_details.user_name} className={check && user_details.user_name === "" ? ("admin_title2") : null} placeholder=" write name" onChange={(e) => setUser_details({ ...user_details, user_name: e.target.value })} />
                                                    </div>

                                                    <div className="post_excerpt3">
                                                        <input type="text" placeholder="email" className={check && user_details.user_email === "" ? ("admin_excerpt2") : null} value={user_details.user_email} onChange={(e) => setUser_details({ ...user_details, user_email: e.target.value })} />
                                                    </div>

                                                    <div className="post_excerpt3">
                                                        <input type="number" placeholder="Phone Number" className={check && user_details.user_phone === "" ? ("admin_excerpt2") : null} value={user_details.user_phone} onChange={(e) => setUser_details({ ...user_details, user_phone: e.target.value })} />
                                                    </div>


                                                    <div style={{ display: "flex", justifyContent: "space-between", paddingBottom: "3.5em" }}>
                                                        <select value={user_details.role_id} className={check && user_details.role_id === "" ? ("admin_category2") : ("admin_post_category")} onChange={(e) => setUser_details({ ...user_details, role_id: e.target.value })}>
                                                            <option value="">Select Role</option>
                                                            {
                                                                roles.length ? (
                                                                    roles.map((data) => {
                                                                        return (
                                                                            <option value={data._id}>{data.role}</option>
                                                                        )
                                                                    })
                                                                ) : null
                                                            }
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>

                                            <div className="post_modal2">
                                                <div className="modal_phase2">
                                                    <span className="admin_modal_image">
                                                        <div className="admin_modal_image">
                                                            < BsFillImageFill /> <label For="user_image"> Choose Photo/Video </label>
                                                            <input type="file" id="user_image" name="image" hidden onChange={(e) => setUser_details({ ...user_details, user_image: e.target.files[0] })} />
                                                        </div>
                                                    </span>

                                                    <div className={check && user_details.password === "" ? ("admin_excerpt2") : null}>
                                                        <input type="text" placeholder="Password" value={user_details.password} onChange={(e) => setUser_details({ ...user_details, password: e.target.value })} />
                                                    </div>

                                                    <div className={check && user_details.confirm_password === "" ? ("admin_excerpt2") : null} style={{ marginTop: "1em" }}>
                                                        <input type="text" placeholder="Retype password" value={user_details.confirm_password} onChange={(e) => setUser_details({ ...user_details, confirm_password: e.target.value })} />
                                                    </div>

                                                    <div className="admin_post_btn">
                                                        {/* <button onClick={() => validate()}>Update user</button> */}
                                                        <button onClick={() => validate()}>Update User</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modalItem-header">
                                <div onClick={() => setEditModal(false)}><IoClose /></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div >
    )

}

export default ManageUsers