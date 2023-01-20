import { useContext } from "react"
import { BsPlusLg, BsEye, BsFillTrashFill, BsDownload, BsCode } from "react-icons/bs"
import image1 from "../Image/Screenshot (255).png"
import { myContext } from "../myContext"
import PostModal from "./PostModal"
function PostFinal_Banner() {

    const {modal} = useContext(myContext)

    return (
        <div>
            {
                modal && <div>
                <PostModal />
            </div>
            }
            <div className="postfinal_banner pt-5">
                <div className="post_final1">
                    <div className="pb-3">
                        <input type="text" placeholder="Give your post a unique title..." />
                    </div>
                    <div className="post_final_img_header">
                        <img src={image1} alt="" />
                        <div className="post_final_img_inner">
                            <button className="btn">Copy link</button>
                            <button className="btn">...</button>
                        </div>
                    </div> 
                    <div style={{ textAlign: "center", width: "100%", marginTop: "2em", marginBottom: "2em" }}>
                        <button className="rounded-pill postfinal_imgbtn"> <BsPlusLg /> Add image</button>
                    </div>
                </div>
                <div className="post_final2">
                    <div>
                        <div className="postfinal_txtlg">
                            POST
                        </div>
                        <div>
                            <button className="postfinal_btn1 btn">To Community</button>
                            <button className="postfinal_btn2 btn">Grab Link</button>
                        </div>
                        <div style={{color: "#9398A1", fontSize: "12px", paddingTop: "10px"}}><BsEye /> Your post is currently <span style={{color: "#019E5B", border: "1px dotted red"}}>Hidden</span></div>
                        <div style={{color: "#9398A1", fontSize: "14px", fontWeight: "500", paddingTop: "10px"}}>
                            <input type="checkbox" /> <label htmlFor="">Mature (?)</label>
                        </div>
                    </div>

                    <div style={{padding: "6em 0em"}}>
                        <div className="postfinal_txtlg">
                            ADD TAGS
                        </div>
                        <div>
                            <button className="rounded-pill btn btn-secondary" style={{fontSize: "14px"}}><BsPlusLg /> Tag</button>
                        </div>
                    </div>

                    <div>
                        <div className="postfinal_txtlg">
                            IMG TOOLS
                        </div>
                        <div style={{color: "#f5f5f5", fontWeight: "600", fontSize: "14px"}}>
                            <div style={{marginBottom: "1em"}}><b style={{fontSize: "16px", marginRight: "22px"}}><BsPlusLg /></b> Add more Images</div>
                            <div style={{marginBottom: "1em"}}><b style={{fontSize: "18px", marginRight: "20px"}}><BsCode /></b> Emded post</div>
                            <div style={{marginBottom: "1em"}}><b style={{fontSize: "18px", marginRight: "20px"}}><BsDownload /></b> Download post</div>
                            <div style={{marginBottom: "1em"}}><b style={{fontSize: "16px", marginRight: "22px"}}><BsFillTrashFill /></b> Delete post</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PostFinal_Banner