import logoImg from "../Image/610-6103115_imgur-logo-png.png"
import { IoLogoApple, IoLogoTwitter, IoLogoGoogle, IoLogoYahoo } from "react-icons/io"
import { FaFacebookF, FaCaretDown } from "react-icons/fa"
import nigeria from "../Image/nigeria.png"
import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { myContext } from "../myContext"
function Reg() {

    // const { } = useContext(myContext)
    const { verify, setVerify, user_details, setUser_details, users } = useContext(myContext)
    const [verifyPass, setverifyPass] = useState(false)


    const [value, setValue] = useState(false)
    const location = useNavigate()

    const [response, setResponse] = useState([])


    // for verification Modal
    const [code, setCode] = useState("")
    const [modal, setModal] = useState(false)
    const [formItem, setFormItem] = useState(true)
    const [verCode, setVerCode] = useState()


    function valiDate() {
        if (user_details.user_name === "" || user_details.user_email === "" || user_details.user_phone === "" || user_details.password === "") {
            setValue(true)
        }
        else {
            postUser()
            // localPost()
        }
    }



    let formData = new FormData()

    formData.append("user_name", user_details.user_name)
    formData.append("user_email", user_details.user_email)
    formData.append("password", user_details.password)
    formData.append("confirm_password", user_details.confirm_password)
    formData.append("user_phone", user_details.user_phone)
    formData.append("user_image", user_details.user_image)
    formData.append("role_id", "6390a3481acea51a9d32d430")

    let mydata = ""

    const postUser = () => {
        fetch("http://localhost:4001/create_user", {
            method: "POST",
            body: formData

        })
            .then((resp) => resp.json())
            .then((data) => {
                setResponse(data.message)
                if (data.success !== false) {
                    setModal(true)   
                }
                console.log(data)
                mydata = data.current_verification
                setVerCode(mydata)

                // localStorage.setItem("poster", JSON.stringify(data))
            })
    }

    function mailModal() {
        if (code === "") {
            setValue(true)
        }
        else {
            if (code === verCode) {
                console.log("User dey")
            }
            else {
                console.log("User does not exist")
                // location("/signin")
            }
        }
        console.log(verCode)
    }

    // function localPost(){
    //     const myuser = {
    //         "user_name": user_details.user_name,
    //         "user_email": user_details.user_email,
    //         "password": user_details.password,
    //         "confirm_password": user_details.confirm_password,
    //         "user_phone": user_details.user_phone,
    //         "user_image": user_details.user_image,
    //         "role_id": "6390a3481acea51a9d32d430"
    //     }
    //     // const mydata = formData
    //     localStorage.setItem("newReg", JSON.stringify(myuser))
    // }

    return (
        <div>
            <div className="reg_bg">
                <div>
                    <Link to="/" className="reg_header text-light ps-4"><b>i</b> <span>back to Imgur</span></Link>
                </div>

                <div style={{ width: "15%", margin: "auto" }}>
                    <Link to="/"><img src={logoImg} alt="logo" className="img-fluid" /></Link>
                </div>



                <div>
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
                                <div className={value && user_details.user_name === "" ? ("reg_input_err") : ("reg_input")}>
                                    <input type="text" placeholder="Username" value={user_details.user_name} name="user_name" className="input_log" onChange={(e) => setUser_details({ ...user_details, user_name: e.target.value })} />
                                    {/* {value && user_details.user_name === "" ? <span className="err">username is required</span> : null} */}
                                </div>

                                <div className={value && user_details.user_email === "" ? ("reg_input_err") : ("reg_input")}>
                                    <input type="text" placeholder="Email" value={user_details.user_email} name="user_email" className="input_log" onChange={(e) => setUser_details({ ...user_details, user_email: e.target.value })} />
                                    {/* {value && user_details.user_email === "" ? <span className="err">Email is required</span> : null} */}
                                </div>

                                <div className={value && user_details.password === "" ? ("reg_input_err") : ("reg_input")}>
                                    <input type="text" placeholder="Password" value={user_details.password} name="password" className="input_log" onChange={(e) => setUser_details({ ...user_details, password: e.target.value })} />
                                    {/* {value && user_details.password === "" ? <span className="err">password is required</span> : null} */}
                                </div>

                                <div className={value && user_details.confirm_password === "" ? ("reg_input_err") : ("reg_input")}>
                                    <input type="text" placeholder="Retype Password" value={user_details.confirm_password} name="confirm_password" className="input_log" onChange={(e) => setUser_details({ ...user_details, confirm_password: e.target.value })} />
                                    {/* {value && user_details.confirm_password === "" ? <span className="err">confirm password</span> : null} */}
                                    {/* {value && pass.confirm_password === "" ? <span className="err">conflicting password</span> : null} */}
                                </div>


                                <div className="reg_input">
                                    <input type="text" name="role_id" hidden value={"6390a3481acea51a9d32d430"} className="input_log" />
                                    {/* {value && retype === "" ? <span className="err">confirm password</span> : null} */}
                                </div>

                                <div className={value && user_details.user_image === "" ? ("reg_input_err") : ("reg_input")}>
                                    <input type="file" name="user_image" style={{ color: "black" }} onChange={(e) => setUser_details({ ...user_details, user_image: e.target.files[0] })} />
                                    {/* {value && user_details.user_image === "" ? <span className="err">image field is empty</span> : null} */}
                                </div>


                                <div className={value && user_details.user_phone === "" ? ("reg_phone_err d-flx") : ("reg_phone d-flx")}>
                                    <div className="d-flx" style={{ color: "#808080", gap: "3px" }}><img src={nigeria} alt="" style={{ height: "20px" }} /><FaCaretDown /></div>
                                    <input type="text" placeholder="Phone Number" value={user_details.user_phone} name="user_phone" className="input_log3" onChange={(e) => setUser_details({ ...user_details, user_phone: e.target.value })} />
                                </div>
                                {/* {value && user_details.user_phone === "" ? <span className="err">Phone number required</span> : null} */}


                                {
                                    response ? (
                                        <center className="err">{response}</center>
                                    ) : null
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

                {
                    modal &&
                    <div className="modal_header">
                        <div className="verification_modal">
                            <div>
                                <div className="reg_modal_header">
                                    <center className="verify_header">Please check your email & provide the verification code sent to you</center>
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
                                <button onClick={() => mailModal()}>Submit</button>
                            </div>

                        </div>

                    </div>
                }












                {/* <form method="post" action="http://localhost:4001/create_user" encType="multipart/form-data" className="reg_body">
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
                        <div method="post" action="http://localhost:4001/create_user" encType="multipart/form-data">
                            <div className="reg_input">
                                <input type="text" placeholder="Username" value={name} name="user_name" className="input_log" onChange={(e) => setName(e.target.value)} />
                                {value && name === "" ? <span className="err">username is required</span> : null}
                            </div>

                            <div className="reg_input">
                                <input type="text" placeholder="Email" value={email} name="user_email" className="input_log" onChange={(e) => setEmail(e.target.value)} />
                                {value && email === "" ? <span className="err">Email is required</span> : null}
                            </div>

                            <div className="reg_input">
                                <input type="password" placeholder="Password" value={password} name="password" className="input_log" onChange={(e) => setPassword(e.target.value)} />
                                {value && password === "" ? <span className="err">password is required</span> : null}
                            </div>

                            <div className="reg_input">
                                <input type="password" placeholder="Retype Password" value={retype} name="confirm_password" className="input_log" onChange={(e) => setRetype(e.target.value)} />
                                {value && retype === "" ? <span className="err">confirm password</span> : null}
                            </div>


                            <div className="reg_input">
                                <input type="text" name="role_id" hidden value={"6390a3481acea51a9d32d430"} className="input_log" />
                                {value && retype === "" ? <span className="err">confirm password</span> : null}
                            </div>

                            <div className="reg_input">
                                <input type="file" name="user_image" style={{color: "black"}} />
                            </div>




                            <div className="reg_phone d-flx">
                                <div className="d-flx" style={{ color: "#808080", gap: "3px" }}><img src={nigeria} alt="" style={{ height: "20px" }} /><FaCaretDown /></div>
                                <input type="text" placeholder="Phone Number" value={phone} name="user_phone" className="input_log3" onChange={(e) => setPhone(e.target.value)} />
                            </div>
                            {value && phone === "" ? <span className="err">Phone number required</span> : null}

                        </div>
                        <div style={{ textAlign: "center", fontFamily: 'monospace', fontSize: "11px", color: "#808080" }}>Standard message and data rates may apply.</div>
                        <div style={{ textAlign: "center" }}>
                            <a href="" style={{ color: "#f5f5f5", fontFamily: 'arial', fontSize: "11px", textDecoration: "none" }}><b>Why do I have to verify my phone?</b></a>
                        </div>
                    </div>

                    <div className="reg_btn_header">
                        <Link to="/signin"><button className="reg_signbtn">sign in</button></Link>
                        <button className="reg_btn" onClick={valiDate}>Next</button>
                    </div>
                </form> */}

                <div className="text-light d-flex ps-4" style={{ gap: "10px" }}>
                    <div style={{ cursor: "pointer" }}>terms</div>
                    <div style={{ cursor: "pointer" }}>privacy</div>
                </div>
            </div>
        </div>
    )
}

export default Reg