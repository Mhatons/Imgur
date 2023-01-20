import logoImg from "../Image/610-6103115_imgur-logo-png.png"
import { IoLogoApple, IoLogoTwitter, IoLogoGoogle, IoLogoYahoo } from "react-icons/io"
import { FaFacebookF } from "react-icons/fa"
import { Link, useNavigate } from "react-router-dom"
import { useContext, useState } from "react"
import { myContext } from "../myContext"
// import { useNavigate } from "react-router-dom"
function Signin() {

    const [response, setResponse] = useState("")
    let storedUser = localStorage.getItem('storedUser')

    const [details, setDetails] = useState("");
    const [password, setPassword] = useState("");

    const [userDetails, setuserDetails] = useState({ user_email: "", password: "" })

    const { setLogin, setAdminLog } = useContext(myContext)

    const [validate, setValidate] = useState(false);
    const navigate = useNavigate()

    const Validation = () => {
        if (details === "" || password === "") {
            setValidate(true)
        }
        else {
            // setLocate(true)
            handleLogin()
        }
    }


    function handleLogin() {
        fetch("http://localhost:4001/user_login",
            {
                method: "post",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(userDetails)
            }
        )
            .then(resp => resp.json())
            .then((data) => {
                setResponse(data.message)
                if (data.success) {
                    const user = data.user
                    localStorage.setItem("user", JSON.stringify(user))
                    setLogin(true)
                    if (user.user_email == "admin@gmail.com") {
                        navigate("/admin")
                        setAdminLog(true)
                    } else {
                        navigate(-1)
                    }
                    console.log(user)
                }
            }).catch(err => console.log(err))

        console.log();
    }

    return (
        <div>
            <div className="reg_bg">
                <div>
                    <Link to="/" className="reg_header text-light ps-4"><b>i</b> <span>back to Imgur</span></Link>
                </div>

                <div style={{ width: "15%", margin: "auto" }}>
                    <Link to="/"><img src={logoImg} alt="logo" className="img-fluid" /></Link>
                </div>

                <form className="reg_body">
                    <div style={{ textAlign: "center", fontFamily: 'monospace', color: "#f5f5f5", fontSize: "11px" }}>Register with</div>

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
                        <div action="">
                            <div className="sign_input1 d-flx">
                                <input type="text" placeholder="Username or Email" className="input_log" name="user_email" value={details} onChange={(e) => { setDetails(e.target.value); setuserDetails({ ...userDetails, user_email: e.target.value }) }} />
                                {/* className={`input_log ${!details ? "checkBorder" : null}`} */}
                                {validate && details === "" ? <span className="errSign"></span> : null}
                            </div>
                            <div className="sign_input d-flx">
                                <input type="password" placeholder="Password" value={password} name="password" className="input_log" onChange={(e) => { setPassword(e.target.value); setuserDetails({ ...userDetails, password: e.target.value }) }} />
                                <button type="button" class="sign_forgot" data-bs-toggle="tooltip" data-bs-placement="bottom" title="forgot password">
                                    forgot?
                                </button>
                            </div>
                            {validate && password === "" ? <span></span> : null}
                        </div>
                    </div>
                    {
                        response ? (
                            <p className="err" style={{ color: "red" }}>{response}</p>
                        ) : null
                    }


                    <div className="reg_btn_header">
                        <Link to="/reg"><button className="reg_signbtn">need an account?</button></Link>
                        <button type="button" className="reg_btn" onClick={() => Validation()}>sign in</button>

                    </div>

                </form>

                {/* {
                    locate && (
                        <Link to="/signin"></Link>
                    )
                } */}

                <div className="text-light d-flex ps-4" style={{ gap: "10px", marginTop: "11em" }}>
                    <div style={{ cursor: "pointer" }}>terms</div>
                    <div style={{ cursor: "pointer" }}>privacy</div>
                </div>
            </div>
        </div>
    )
}

export default Signin