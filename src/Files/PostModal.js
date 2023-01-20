import { FcPicture, FcCamcorderPro, FcButtingIn } from "react-icons/fc"
import { BsFillImageFill } from "react-icons/bs"
import { IoClose } from "react-icons/io5"
import { useContext, useState } from "react"
import { myContext } from "../myContext"
import Nav3 from "./Nav3"
import { useNavigate } from "react-router-dom"
function PostModal() {

    const { setModal, setPostImage, postImage } = useContext(myContext)
    const [localImg, setLocalImg] = useState({})
    const navigate = useNavigate()

    function test(){
        if(postImage === ""){
            console.log("error")
        }
        else{
            console.log(postImage)
            localStorage.setItem("img", JSON.stringify(postImage))
        }
        
        
        // localStorage.setItem("postImage", JSON.stringify(postImage))
    }
        
    // localStorage.setItem("image", JSON.stringify(postImage))

    return (
        <div>
            <div className="postImage_modal">
                <div className="txt">
                    <Nav3 />
                </div>
                <div style={{ width: "65%", position: "relative", margin: "auto", paddingTop: "15px" }}>
                    <div className="modal-dialog modal-dialog-centered" style={{ width: "95%" }}>
                        <div className="modal-content">
                            <div>
                                <div className="d-flx post_modal_body">
                                    <div className="post_modal1">
                                        <div className="modal_phase1">
                                            Drag images here
                                        </div>
                                    </div>

                                    <div className="post_modal2">
                                        <div className="modal_phase2">
                                            <span style={{ gap: "20px" }}>
                                                {/* < BsFillImageFill /> <input type="file" text="Choose Photo/Video" value={image} id="post_image" onChange={(e) => { setImage(e.target.files[0]); setModal(false) }} style={{ backgroundColor: "transparent", display: "none" }} /> */}
                                                < BsFillImageFill /> 
                                                <input type="file" text="Choose Photo/Video" id="post_image" onChange={(e) => setPostImage(e.target.files[0])} style={{ backgroundColor: "transparent", display: "none" }} />
                                                <label for="post_image" style={{ fontSize: "14px", paddingLeft: "10px", paddingTop: "3em" }}> Choose Photo/Video </label>
                                            </span>
                                            <button onClick={() => test()}>Submit</button>
                                            <div className="pt-3 pb-3 d-flx" style={{ width: "50%", margin: "auto" }}>
                                                <div className="post_modal_line"></div>
                                                <div>or</div>
                                                <div className="post_modal_line"></div>
                                            </div>
                                            <div>
                                                <input type="text" placeholder="Paste image or URL"  onChange={(e) => { setPostImage(e.target.files); setModal(false) }} style={{ textAlign: "center", fontWeight: "700", color: "#f5f5f5" }} />
                                            </div>
                                            <div className="d-flx pt-5 mb-5">
                                                <div>
                                                    <div style={{ fontSize: "32px" }}><FcButtingIn /></div>
                                                    <div style={{ fontSize: "13px" }}>Meme Gen</div>
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "32px" }}><FcCamcorderPro /></div>
                                                    <div style={{ fontSize: "13px" }}>Video to Gif</div>
                                                </div>
                                                <div>
                                                    <div style={{ fontSize: "32px" }}><FcPicture /></div>
                                                    <div style={{ fontSize: "13px" }}>My Uploads</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modalItem-header">
                        {/* <div onClick={() => setModal(false)}><IoClose /></div> */}
                        <div onClick={() => navigate(-1)}><IoClose /></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostModal