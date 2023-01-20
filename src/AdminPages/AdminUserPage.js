// import { BsFillPeopleFill, BsFillEnvelopeFill, BsFillTelephoneFill, BsPersonCircle, BsBriefcaseFill, BsXLg } from "react-icons/bs"
// import { useEffect } from "react"
// import { useState } from "react"
// import { Link, useParams } from "react-router-dom"

import { Navbar, NavDropdown } from "react-bootstrap";
import NavbarCollapse from "react-bootstrap/esm/NavbarCollapse";

// function AdminUserPage() {

//     const { id } = useParams()

//     const [oneUser, setOneUser] = useState([])
//     const [followers, setFollowers] = useState([])



//     useEffect(() => {
//         // Getting one user
//         fetch(`http://localhost:4001/users/${id}`)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setOneUser(data)
//                 // console.log(data)
//             }).catch((err) => {
//                 console.log(err)
//             })

//         // Getting the followers of one user
//         fetch(`http://localhost:4001/follow_user/${id}`)
//             .then((resp) => resp.json())
//             .then((data) => {
//                 setFollowers(data)
//             })
//     }, [oneUser])

//     // Deleting a user
//     function delete_user() {
//         fetch(`http://localhost:4001/delete_user/${id}`, {
//             method: "DELETE",
//             headers: { "Content-Type": "application/json" },
//         })
//         alert("user successfully deleted")
//     }

//     return (
//         <div>
//             <div className="user_modal_header">
//                 {
//                     <div className="user_modal">
//                         <section className="model_image">
//                             <img src={`http://localhost:4001/uploads/${oneUser.user_image}`} alt="" />
//                         </section>
//                         <section className="model_details">
//                             <div>Name:<span> <BsPersonCircle /> </span><i><b>{oneUser.user_name}</b></i> </div>
//                             <div>Email:<span> <BsFillEnvelopeFill /> </span><i>{oneUser.user_email}</i> </div>
//                             <div>Phone:<span> <BsFillTelephoneFill /> </span><i>{oneUser.user_phone}</i> </div>
//                             <div>Role:<span> <BsBriefcaseFill /> </span><i>{oneUser.role_id}</i> </div>
//                             <div>Followers:<span> <BsFillPeopleFill /> </span><i><b>{followers.length}</b></i> </div>
//                             <div className="modal_events">
//                                 <button onClick={delete_user} className="modal_del">Delete</button>
//                                 <button className="modal_upt">Update</button>
//                             </div>
//                         </section>
//                         <div className="modal_close"><Link to={"/manage_users"}> <p className="modal_close1"><BsXLg /></p> </Link></div>
//                     </div>
//                 }
//             </div>
//         </div>
//     )
// }

// export default AdminUserPage






{
    formItem && <div>
        <div className="reg_body">
            <div style={{ textAlign: "center", fontFamily: 'monospace', color: "#f5f5f5", fontSize: "11px" }} >Register with</div>

            <div className="socials">
                <div className="fac social_item"><FaFacebookF /></div>
                <div className="twi social_item"><IoLogoTwitter /></div>
                <div className="app social_item"> <IoLogoApple /></div>
                <div className="goo social_item"><IoLogoGoogle /></div>
                <div className="yah social_item"><IoLogoYahoo /></div>
            </div>

            <div className="d-flx" style={{ width: "80%", margin: "auto", padding: "7px 0px" }}>
                <div className="reg_lines"></div>
                <div style={{ textAlign: "center", fontFamily: 'monospace', color: "#f5f5f5", fontSize: "11px" }}>or with Imgur</div>
                <div className="reg_lines2"></div>
            </div>

            <div className="reg_form_bg">
                <div>
                    <div className="reg_input">
                        <input type="text" placeholder="Username" value={user_details.user_name} name="user_name" className="input_log" onChange={(e) => setUser_details({ ...user_details, user_name: e.target.value })} />
                        {value && user_details.user_name === "" ? <span className="err">username is required</span> : null}
                    </div>

                    <div className="reg_input">
                        <input type="text" placeholder="Email" value={user_details.user_email} name="user_email" className="input_log" onChange={(e) => setUser_details({ ...user_details, user_email: e.target.value })} />
                        {value && user_details.user_email === "" ? <span className="err">Email is required</span> : null}
                    </div>

                    <div className="reg_input">
                        <input type="text" placeholder="Password" value={user_details.password} name="password" className="input_log" onChange={(e) => setUser_details({ ...user_details, password: e.target.value })} />
                        {value && user_details.password === "" ? <span className="err">password is required</span> : null}
                    </div>

                    <div className="reg_input">
                        <input type="text" placeholder="Retype Password" value={user_details.confirm_password} name="confirm_password" className="input_log" onChange={(e) => setUser_details({ ...user_details, confirm_password: e.target.value })} />
                        {value && user_details.confirm_password === "" ? <span className="err">confirm password</span> : null}
                        {/* {value && pass.confirm_password === "" ? <span className="err">conflicting password</span> : null} */}
                    </div>


                    <div className="reg_input">
                        <input type="text" name="role_id" hidden value={"6390a3481acea51a9d32d430"} className="input_log" />
                        {/* {value && retype === "" ? <span className="err">confirm password</span> : null} */}
                    </div>

                    <div className="reg_input">
                        <input type="file" name="user_image" style={{ color: "black" }} onChange={(e) => setUser_details({ ...user_details, user_image: e.target.files[0] })} />
                        {value && user_details.user_image === "" ? <span className="err">image field is empty</span> : null}
                    </div>




                    <div className="reg_phone d-flx">
                        <div className="d-flx" style={{ color: "#808080", gap: "3px" }}><img src={nigeria} alt="" style={{ height: "20px" }} /><FaCaretDown /></div>
                        <input type="text" placeholder="Phone Number" value={user_details.user_phone} name="user_phone" className="input_log3" onChange={(e) => setUser_details({ ...user_details, user_phone: e.target.value })} />
                    </div>
                    {value && user_details.user_phone === "" ? <span className="err">Phone number required</span> : null}

                    {
                        emailPass && <div>
                            <center className="err">Username or email already exist</center>
                        </div>
                    }

                </div>
                <div style={{ textAlign: "center", fontFamily: 'monospace', fontSize: "11px", color: "#808080" }}>Standard message and data rates may apply.</div>
                <div style={{ textAlign: "center" }}>
                    <a href="#" style={{ color: "#f5f5f5", fontFamily: 'arial', fontSize: "11px", textDecoration: "none" }}><b>Why do I have to verify my phone?</b></a>
                </div>
            </div>

            <div className="reg_btn_header">
                <Link to="/signin"><button className="reg_signbtn">sign in</button></Link>
                <button className="reg_btn" onClick={() => valiDate()}>Next</button>
            </div>
        </div>
    </div>
}

{
    modal &&
    <div className="modal_header">
        <div className="verification_modal">
            <div>
                <div className="reg_modal_header">
                    <center className="verify_header">Please check your email & provide the verification code</center>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => { setModal(false); setFormItem(true) }}></button>
                </div>
            </div>

            <div className="verify_input">
                <input type="text" placeholder="_ _ _ _ _ _" value={code} onChange={(e) => setCode(e.target.value)} />
            </div>
            {value && code === "" ? <center style={{ color: "red" }} className="verify_header">Enter verification code</center> : null}
            {
                verifyPass && <div>
                    <center className="err">incorrect verification code</center>
                </div>
            }

            <div className="verify_btn">
                <button onClick={() => ValidateModal()}>Submit</button>
            </div>

        </div>

    </div>
}