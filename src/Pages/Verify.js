import logoImg from "../Image/610-6103115_imgur-logo-png.png"
import { Link } from "react-router-dom"
import { useState } from "react"
import { useContext } from "react"
import { myContext } from "../myContext"

function Verify() {

    const [code, setCode] = useState("")
    const [value, setValue] = useState(false)

    // const {user_details, setUser_details} = useContext(myContext)
    const { verify, setVerify, test, setTest} = useContext(myContext)
    console.log(test)

    // console.log(user_details)
    const verifyUser = () => {
        if(code !== verify){
            alert("unsuccesful login")
            console.log(verify)
            console.log(code)
        }
        else if(code === verify){
            alert("login successful")
        }
    }

    // let myform = new FormData()
    // myform.append(user_details.name)

    const Validate = () => {
        if(code === ""){
            setValue(true)
           
        }
        else{

        }
    }


    // const timer = () => {
    //     let num = 60;
    //     for(let i = 0; i <= 0; i-- ){
    //         setInterval(() => {
    //             let count = num[i]
    //             console.log(count)
    //         }, 1000)
    //     }
    // }

    // timer()

    return (
        <div>
            <div className="reg_bg verify_bg">
                <div>
                    <Link to="/" className="reg_header text-light ps-4"><b>i</b> <span>back to Imgur</span></Link>
                </div>

                <div style={{ width: "15%", margin: "auto" }}>
                    <Link to="/"><img src={logoImg} alt="logo" className="img-fluid" /></Link>
                </div>

                <div className="verify_body">
                    <div className="verify_header">Provide Verification Code</div>
                    <div className="verify_box">
                        <input type="text" placeholder="_ _ _ _ _ _" value={code} onChange={(e) => setCode(e.target.value)} />
                    </div>
                    {value && code === "" ? <center style={{color: "red"}} className="verify_header">Enter verification code</center>: null}
                    
                    <div className="verify_btn">
                        <button onClick={verifyUser}>Submit</button>
                    </div>
                </div>

                <div className="text-light d-flex ps-4" style={{ gap: "10px" }}>
                    <div style={{ cursor: "pointer" }}>terms</div>
                    <div style={{ cursor: "pointer" }}>privacy</div>
                </div>
            </div>
        </div>
    )
}

export default Verify