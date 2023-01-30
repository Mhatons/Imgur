import { BsFillImageFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../myContext"
import AdminNav from "./AdminNav"
function CreateUserModal() {


    const [check, setCheck] = useState(false)
    const { roles, setUsermodal, usermodal, setUser_details, user_details, url } = useContext(myContext)


    // fetch(`http://localhost:4001/users/${id}`)
    //     .then((resp) => resp.json())
    //     .then((data) => {
    //         console.log(data)
    //     })


    const validate = () => {
        if (user_details.user_email === "" || user_details.user_name === "" || user_details.password === "" || user_details.user_phone === "" || user_details.confirm_password === "" || user_details.role_id === "" || user_details.user_image === "") {
            setCheck(true)
        }
        else {
            fetch(`${url}/create_user`, {
                method: "POST",
                body: userForm
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            setUsermodal(false)
        }

    }

    const updateUser = () => {
        if (user_details.user_email === "" || user_details.user_name === "" || user_details.password === "" || user_details.user_phone === "" || user_details.confirm_password === "" || user_details.role_id === "" || user_details.user_image === "") {
            setCheck(true)
        }
        else {
            fetch(`${url}/update_user`, {
                method: "PUT",
                body: userForm
            })
                .then((resp) => resp.json())
                .then((data) => {
                    console.log(data)
                })
            setUsermodal(false)
        }

    }

    const userForm = new FormData()

    userForm.append("user_name", user_details.user_name)
    userForm.append("user_email", user_details.user_email)
    userForm.append("password", user_details.password)
    userForm.append("user_phone", user_details.user_phone)
    userForm.append("confirm_password", user_details.confirm_password)
    userForm.append("role_id", user_details.role_id)
    userForm.append("user_image", user_details.user_image)



    return (
        <div>
            {
                usermodal && <div className="admin_modal_header">
                    <AdminNav />
                    <div style={{ paddingTop: "12em" }}>
                        <div style={{ width: "65%", position: "relative", margin: "auto", paddingTop: "15px" }}>
                            <div className="modal-dialog modal-dialog-centered" style={{ width: "95%" }}>
                                <div className="modal-content">
                                    <div>
                                        <div className="post_modal_body">
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
                                                        <button onClick={() => validate()}>Create user</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modalItem-header">
                                <div onClick={() => setUsermodal(false)}><IoClose /></div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default CreateUserModal